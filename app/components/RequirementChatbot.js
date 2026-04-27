"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Sparkles, X } from "lucide-react";
import { db } from "../lib/firebase";

const CHAT_STEPS = [
  {
    key: "requirement",
    question:
      "Welcome to VAWE. Tell me about your project requirement.",
    placeholder: "Example: I need an ecommerce website with admin panel",
  },
  {
    key: "name",
    question: "Great. May I know your name?",
    placeholder: "Enter your full name",
  },
  {
    key: "mobile",
    question: "Please share your mobile number so our team can reach you.",
    placeholder: "Enter your mobile number",
  },
  {
    key: "company",
    question: "What is your company or business name? (Type NA if not applicable)",
    placeholder: "Enter company name",
  },
  {
    key: "budget",
    question: "What budget range do you have in mind for this project?",
    placeholder: "Example: 50k - 1L",
    quickReplies: ["Below 50k", "50k-1L", "1L-3L", "3L+"],
  },
  {
    key: "timeline",
    question: "When do you want to start?",
    placeholder: "Example: Immediately or next month",
    quickReplies: ["Immediately", "Within 2 weeks", "This month", "Just exploring"],
  },
  {
    key: "contactTime",
    question: "What is the best time for our team to call you?",
    placeholder: "Example: 10 AM - 12 PM",
    quickReplies: ["Morning", "Afternoon", "Evening"],
  },
];

const initialMessages = [
  {
    role: "bot",
    text: CHAT_STEPS[0].question,
  },
];

const introLines = [
  "Welcome to VAWE",
  "I am your virtual assistant",
  "Let us plan your project today",
];

export default function RequirementChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({
    requirement: "",
    name: "",
    mobile: "",
    company: "",
    budget: "",
    timeline: "",
    contactTime: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [activeIntroIndex, setActiveIntroIndex] = useState(0);
  const [fieldError, setFieldError] = useState("");
  const chatBodyRef = useRef(null);

  const currentStep = CHAT_STEPS[stepIndex];
  const isDone = stepIndex >= CHAT_STEPS.length;
  const showIntro = !isOpen;
  const progress = isDone
    ? 100
    : Math.min(100, Math.round((stepIndex / CHAT_STEPS.length) * 100));

  const placeholder = useMemo(() => {
    if (isDone) return "Type restart to start again...";
    return currentStep.placeholder;
  }, [currentStep, isDone]);

  const pushMessage = (role, text) => {
    setMessages((prev) => [...prev, { role, text }]);
  };

  const resetConversation = () => {
    setStepIndex(0);
    setFormData({
      requirement: "",
      name: "",
      mobile: "",
      company: "",
      budget: "",
      timeline: "",
      contactTime: "",
    });
    setMessages(initialMessages);
    setInput("");
    setFieldError("");
  };

  const normalizeMobile = (value) => value.replace(/[^\d+]/g, "");

  const validateField = (key, value) => {
    if (key === "mobile") {
      const mobile = normalizeMobile(value);
      return /^\+?\d{10,14}$/.test(mobile);
    }
    if (key === "name") return /^[a-zA-Z\s.'-]{2,40}$/.test(value);
    if (key === "requirement") return value.length >= 12;
    if (key === "company") return value.length <= 60;
    return value.length > 0 && value.length <= 80;
  };

  const validationMessage = (key) => {
    if (key === "mobile") return "Please enter a valid mobile number (optional +).";
    if (key === "name") return "Please enter a valid name (letters and spaces only).";
    if (key === "requirement") return "Please share more details (minimum 12 characters).";
    if (key === "company") return "Company name is too long (max 60 characters).";
    return "Please enter a valid value.";
  };

  const saveLead = async (payload) => {
    setIsSaving(true);
    try {
      await addDoc(collection(db, "chatbotLeads"), {
        ...payload,
        source: "website-chatbot",
        createdAt: serverTimestamp(),
      });
      pushMessage(
        "bot",
        "Perfect. Your details are saved successfully. Our team will contact you shortly."
      );
      setStepIndex(CHAT_STEPS.length);
      pushMessage("bot", "To submit another requirement, type restart.");
    } catch (error) {
      console.error("Chatbot save failed:", error);
      pushMessage("bot", "Sorry, we could not save right now. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    if (!showIntro) return undefined;

    setActiveIntroIndex(0);
    const interval = setInterval(() => {
      setActiveIntroIndex((prev) => (prev + 1) % introLines.length);
    }, 2200);
    return () => {
      clearInterval(interval);
    };
  }, [showIntro]);

  useEffect(() => {
    if (!chatBodyRef.current) return;
    chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  }, [messages, isSaving]);

  useEffect(() => {
    if (input.trim().length === 0) {
      setFieldError("");
    }
  }, [input]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const value = input.trim();
    if (!value || isSaving) return;

    if (isDone) {
      if (value.toLowerCase() === "restart") {
        resetConversation();
      } else {
        pushMessage("bot", "Type restart to submit a new requirement.");
      }
      setInput("");
      return;
    }

    pushMessage("user", value);
    setInput("");
    setFieldError("");

    if (!validateField(currentStep.key, value)) {
      const error = validationMessage(currentStep.key);
      setFieldError(error);
      pushMessage("bot", error);
      return;
    }

    const sanitizedValue =
      currentStep.key === "mobile" ? normalizeMobile(value) : value;
    const updatedData = { ...formData, [currentStep.key]: sanitizedValue };
    setFormData(updatedData);
    const nextStepIndex = stepIndex + 1;

    if (nextStepIndex >= CHAT_STEPS.length) {
      await saveLead(updatedData);
      return;
    }

    setStepIndex(nextStepIndex);
    pushMessage("bot", CHAT_STEPS[nextStepIndex].question);
  };

  return (
    <div className="fixed bottom-4 right-3 z-50 sm:bottom-5 sm:right-5">
      {isOpen ? (
        <div className="w-[min(92vw,360px)] overflow-hidden rounded-3xl border border-[#0b4b92]/20 bg-white/95 shadow-[0_20px_50px_rgba(3,35,74,0.24)] backdrop-blur">
          <div className="flex items-center justify-between bg-gradient-to-r from-[#0a4a93] to-[#1866bd] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-sm font-semibold">VAWE Assistant</h3>
                <p className="text-[11px] text-white/85">Online now · We typically reply in under 1 min</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 text-xs hover:bg-white/20"
              aria-label="Close chatbot"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="h-1 w-full bg-[#e7effb]">
            <div
              className="h-full bg-gradient-to-r from-[#0a4a93] to-[#3aa0ff] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div
            ref={chatBodyRef}
            className="max-h-[52vh] space-y-2 overflow-y-auto bg-gradient-to-b from-[#f6f9ff] to-[#eef4ff] p-3 sm:max-h-[360px]"
          >
            {messages.map((msg, index) => (
              <div
                key={`${msg.role}-${index}`}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                  msg.role === "bot"
                    ? "bg-white text-slate-800 shadow-sm ring-1 ring-slate-100"
                    : "ml-auto bg-gradient-to-r from-[#0a4a93] to-[#1866bd] text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isSaving ? (
              <div className="max-w-[85%] rounded-xl bg-white px-3 py-2 text-sm text-slate-700 shadow-sm">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0a4a93] [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0a4a93] [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0a4a93] [animation-delay:300ms]" />
                </div>
              </div>
            ) : null}
          </div>

          {!isDone && currentStep.quickReplies ? (
            <div className="flex flex-wrap gap-2 border-t border-slate-100 bg-white px-3 py-2">
              {currentStep.quickReplies.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setInput(option)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700 transition hover:-translate-y-[1px] hover:border-[#0a4a93] hover:text-[#0a4a93]"
                >
                  {option}
                </button>
              ))}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-slate-200 bg-white p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={placeholder}
              disabled={isSaving}
              maxLength={currentStep?.key === "requirement" ? 300 : 80}
              className={`w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 ${
                fieldError
                  ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                  : "border-slate-300 focus:border-[#0a4a93] focus:ring-[#0a4a93]/20"
              }`}
            />
            <button
              type="submit"
              disabled={isSaving || !input.trim()}
              className="rounded-xl bg-gradient-to-r from-[#0a4a93] to-[#1866bd] px-4 py-2 text-sm font-medium text-white transition hover:brightness-95 disabled:opacity-60"
            >
              {isSaving ? "Saving..." : "Send"}
            </button>
          </form>
          {fieldError ? (
            <p className="border-t border-red-100 bg-red-50 px-3 py-2 text-xs text-red-700">
              {fieldError}
            </p>
          ) : null}

          <button
            type="button"
            onClick={resetConversation}
            className="w-full border-t border-slate-100 bg-white py-2 text-xs text-slate-600 hover:bg-slate-50"
          >
            Reset chat
          </button>
        </div>
      ) : (
        <div className="relative flex items-end gap-2 sm:gap-3">
          {showIntro ? (
            <div className="relative max-w-[min(64vw,255px)] rounded-2xl border border-[#d9e6fb] bg-white px-3 py-2.5 text-slate-700 shadow-[0_14px_30px_rgba(10,74,147,0.15)] sm:px-4 sm:py-3">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0a4a93]/80">
                VAWE Assistant
              </p>
              <p
                key={activeIntroIndex}
                className="min-h-[36px] pr-1 text-xs font-medium leading-5 text-slate-800 animate-[fadeUp_450ms_ease] sm:min-h-[40px] sm:text-sm"
              >
                {introLines[activeIntroIndex]}
              </p>
              <div className="mt-2 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0a4a93] [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0a4a93] [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0a4a93] [animation-delay:300ms]" />
              </div>
              <p className="mt-2 text-[11px] text-slate-500">Tap the bot to get a quick consultation</p>

              <span className="absolute -right-2 bottom-4 h-4 w-4 rotate-45 border-b border-r border-[#d9e6fb] bg-white" />
            </div>
          ) : null}

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open chatbot"
            className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_14px_30px_rgba(10,74,147,0.35)] ring-2 ring-white transition hover:scale-[1.04] animate-[floatBot_2.6s_ease-in-out_infinite] sm:h-14 sm:w-14"
          >
            <span className="absolute inset-0 rounded-full border-2 border-[#0a4a93]/30 animate-ping" />
            <Image
              src="/botimg.png"
              alt="Chatbot"
              width={56}
              height={56}
              className="h-full w-full object-cover"
              priority
            />
          </button>
          <style jsx>{`
            @keyframes floatBot {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(8px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
