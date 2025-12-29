"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [showReq, setShowReq] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("basic");
  const [req, setReq] = useState({ features: [] });

  const packages = {
    basic: {
      label: "Basic",
      items: ["1–3 Pages", "Responsive Layout", "Contact Form", "Basic SEO"],
    },
    standard: {
      label: "Standard",
      items: ["4–8 Pages", "Blog/News", "Auth (Login/Signup)", "Analytics", "On‑page SEO"],
    },
    premium: {
      label: "Premium",
      items: ["9+ Pages", "E‑Commerce", "Admin Dashboard", "Integrations (Payments/CRM)", "Performance & Security"],
    },
  };
  return (
    <div className="pt-24 sm:pt-28 w-full min-h-screen">
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-(--font-orbitron)" style={{ color: '#00448a' }}>
            Let&apos;s Connect
          </motion.h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-neutral-700 max-w-3xl">Tell us about your goals. We&apos;ll reply within 1 business day.</p>

          <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="md:col-span-2 gradient-border rounded-2xl overflow-hidden">
              <form className="glass p-4 md:p-6 space-y-3 md:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm text-white/70 mb-1">Name</label>
                    <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Your full name" className="w-full rounded-xl bg-white border border-black/10 focus:border-black/20 outline-none px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-neutral-900 shadow-inner transition" />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm text-white/70 mb-1">Email</label>
                    <input value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} type="email" placeholder="name@company.com" className="w-full rounded-xl bg-white border border-black/10 focus:border-black/20 outline-none px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-neutral-900 shadow-inner transition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm text-white/70 mb-1">Phone</label>
                    <input value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} placeholder="(+1) 555-0100" className="w-full rounded-xl bg-white border border-black/10 focus:border-black/20 outline-none px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-neutral-900 shadow-inner transition" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs md:text-sm text-white/70 mb-1">Message</label>
                    <textarea value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} placeholder="Tell us a bit about your project" rows={4} className="w-full rounded-xl bg-white border border-black/10 focus:border-black/20 outline-none px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-neutral-900 shadow-inner transition resize-none" />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 md:gap-3">
                  <button type="button" className="bg-accent-magenta px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold btn-ring hover:brightness-110 transition">Send Message</button>
                  <a className="glass gradient-border px-3 md:px-4 py-2 md:py-3 rounded-full text-xs md:text-sm text-center" href="#terms">Terms & Conditions</a>
                  <button type="button" onClick={()=>setShowReq(true)} className="glass gradient-border px-3 md:px-4 py-2 md:py-3 rounded-full text-xs md:text-sm">Requirements Form</button>
                </div>
                <div className="mt-2">
                  <a href="#" className="bg-accent-cyan inline-flex px-3 md:px-4 py-2 rounded-full text-xs md:text-sm btn-ring hover:brightness-110 transition">Chat with Us</a>
                </div>
              </form>
            </div>
            <div className="gradient-border rounded-2xl overflow-hidden">
              <div className="glass p-4 md:p-6 h-full">
                <h3 className="text-lg md:text-xl font-semibold text-neutral-900">Contact Details</h3>
                <p className="mt-2 text-xs md:text-sm text-neutral-700">We&apos;ll reach out soon. For urgent matters, email contact@vawe.global.</p>
                <div className="mt-4 md:mt-6 rounded-xl overflow-hidden ring-1 ring-white/40">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4949779602616!2d80.6462133!3d16.5010904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35faba842a60c9%3A0x2d5a839dfcea2ef8!2sVAWE%20INSTITUTES!5e0!3m2!1sen!2sin!4v1761392560306!5m2!1sen!2sin"
                    width="100%"
                    height="240"
                    className="md:h-[320px]"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Modal */}
      {showReq && (
        <div className="fixed inset-0 z-50 grid place-items-center p-3 md:p-4 bg-black/50 overflow-y-auto" onClick={()=>setShowReq(false)}>
          <div className="max-w-2xl w-full rounded-2xl overflow-hidden gradient-border my-4" onClick={(e)=>e.stopPropagation()}>
            <div className="glass p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <h2 className="text-lg md:text-2xl font-semibold text-neutral-900">Project Requirements</h2>
                <button className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-neutral-900/5 hover:bg-neutral-900/10 transition" onClick={()=>setShowReq(false)}>Close</button>
              </div>
              <p className="mt-2 text-xs md:text-sm text-neutral-700">Select a package and tick the features you need.</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {Object.keys(packages).map((k)=> (
                  <button key={k} onClick={()=>{ setSelectedPackage(k); setReq({ features: [] }); }} className={`px-3 py-1.5 rounded-full text-xs md:text-sm ring-1 ${selectedPackage===k? 'bg-neutral-900 text-white ring-neutral-900' : 'bg-white ring-neutral-300 text-neutral-900'}`}>{packages[k].label}</button>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {packages[selectedPackage].items.map((item)=>{
                  const checked = req.features.includes(item);
                  return (
                    <label key={item} className={`flex items-center gap-2 rounded-xl px-3 py-2 ring-1 cursor-pointer ${checked? 'ring-neutral-900 bg-white' : 'ring-neutral-200 bg-white/80'}`}>
                      <input type="checkbox" checked={checked} onChange={(e)=>{
                        setReq((prev)=>{
                          const features = e.target.checked ? [...prev.features, item] : prev.features.filter((f)=>f!==item);
                          return { ...prev, features };
                        });
                      }} />
                      <span className="text-xs md:text-sm text-neutral-900">{item}</span>
                    </label>
                  );
                })}
              </div>

              <div className="mt-4 md:mt-5">
                <label className="block text-xs md:text-sm text-white/70 mb-1">Additional notes</label>
                <textarea rows={3} className="w-full rounded-xl bg-white border border-black/10 focus:border-black/20 outline-none px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-neutral-900 shadow-inner transition resize-none" placeholder="Anything else we should know?" />
              </div>

              <div className="mt-4 md:mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs text-neutral-600">Selected: {req.features.length} feature{req.features.length===1?"":"s"}</span>
                <button type="button" className="bg-accent-cyan px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold btn-ring hover:brightness-110 transition w-full sm:w-auto" onClick={()=>setShowReq(false)}>Save & Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

                           {/* Terms & Conditions */}
        <section id="terms" className="w-full px-4 sm:px-6 mt-8 md:mt-12 pb-4 md:pb-4 lg:pb-8 xl:pb-2 2xl:pb-2">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                             {/* Left Side - Terms & Conditions */}
               <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                 {/* Header */}
                 <div className="relative bg-gradient-to-r from-[#00448a] to-[#00448a]/90 p-4 md:p-5 lg:p-8">
                   <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-3 lg:gap-4">
                     <div className="flex items-center gap-2 md:gap-3">
                       <div className="h-10 w-10 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center">
                         <span className="text-lg md:text-lg lg:text-xl font-black text-white">T&C</span>
                       </div>
                       <div>
                         <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Terms & Conditions</h3>
                         <p className="text-white/90 text-xs md:text-xs lg:text-sm">Important information about our services</p>
                       </div>
                     </div>
                     {/* Image */}
                     <div className="flex-shrink-0 md:block">
                       <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-40 lg:h-40 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 shadow-lg">
                         <Image 
                           src="Termsconditionsimg.webp" 
                           alt="Terms & Conditions" 
                           className="w-full h-full object-contain p-2 md:p-2 lg:p-3"
                           onError={(e) => {
                             e.currentTarget.onerror = null;
                             e.currentTarget.src = '/Termsconditionsimg.webp';
                           }}
                         />
                       </div>
                     </div>
                   </div>
                 </div>
                {/* Content */}
                <div className="p-4 md:p-5 lg:p-8">
                  <div className="space-y-3 md:space-y-3 lg:space-y-4">
                    {[
                      { text: "Project scope and deliverables are finalized after discovery.", color: '#00448a', number: '01' },
                      { text: "50% upfront to start; remaining on milestones or delivery.", color: '#f56c53', number: '02' },
                      { text: "Revisions covered as per package; extra work billed hourly.", color: '#00448a', number: '03' },
                      { text: "All assets and code are transferred upon final payment.", color: '#f56c53', number: '04' },
                      { text: "Confidentiality and data protection are upheld at all times.", color: '#00448a', number: '05' },
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className="relative group"
                      >
                        <div className="flex items-start gap-3 md:gap-3 lg:gap-4 p-3 md:p-3 lg:p-4 rounded-xl transition-all duration-300 hover:shadow-md border-l-4" 
                          style={{ 
                            backgroundColor: `${item.color}08`,
                            borderLeftColor: item.color
                          }}
                        >
                          {/* Number Circle */}
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full flex items-center justify-center font-bold text-xs md:text-xs lg:text-sm text-white shadow-md transition-transform duration-300 group-hover:scale-110" 
                              style={{ backgroundColor: item.color }}
                            >
                              {item.number}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 pt-0.5">
                            <p className="text-xs md:text-sm lg:text-base text-neutral-800 leading-relaxed font-medium">{item.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Options */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden md:self-start">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-[#f56c53] to-[#f56c53]/90 p-4 md:p-4 lg:p-8">
                  <div className="flex items-center gap-2 md:gap-2 lg:gap-3">
                    <div className="h-10 w-10 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center">
                      <svg className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-xl lg:text-3xl font-bold text-white">Contact Us</h3>
                      <p className="text-white/90 text-xs md:text-xs lg:text-sm">Get in touch with us</p>
                    </div>
                  </div>
                </div>
                
                {/* Contact Buttons */}
                <div className="p-4 md:p-4 lg:p-8">
                  <div className="space-y-2 md:space-y-2 lg:space-y-4">
                    {/* Call Us Button */}
                    <motion.a
                      href="tel:+1234567890"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="flex items-center gap-2 md:gap-2 lg:gap-4 p-3 md:p-3 lg:p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group"
                      style={{ 
                        backgroundColor: '#00448a08',
                        border: '2px solid #00448a30'
                      }}
                    >
                      <div className="flex-shrink-0 h-10 w-10 md:h-10 md:w-10 lg:h-14 lg:w-14 rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" 
                        style={{ backgroundColor: '#00448a' }}
                      >
                        <svg className="w-4 h-4 md:w-4 md:h-4 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm md:text-sm lg:text-lg font-bold text-neutral-800 mb-0.5">Call Us</h4>
                        <p className="text-xs md:text-xs lg:text-sm text-neutral-600">Speak directly with our team</p>
                      </div>
                      <div className="flex-shrink-0">
                        <svg className="w-4 h-4 md:w-4 md:h-4 lg:w-6 lg:h-6 text-neutral-400 group-hover:text-[#00448a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </motion.a>

                    {/* WhatsApp Button */}
                    <motion.a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="flex items-center gap-2 md:gap-2 lg:gap-4 p-3 md:p-3 lg:p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group"
                      style={{ 
                        backgroundColor: '#25D36608',
                        border: '2px solid #25D36630'
                      }}
                    >
                      <div className="flex-shrink-0 h-10 w-10 md:h-10 md:w-10 lg:h-14 lg:w-14 rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" 
                        style={{ backgroundColor: '#25D366' }}
                      >
                        <svg className="w-4 h-4 md:w-4 md:h-4 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm md:text-sm lg:text-lg font-bold text-neutral-800 mb-0.5">WhatsApp</h4>
                        <p className="text-xs md:text-xs lg:text-sm text-neutral-600">Chat with us on WhatsApp</p>
                      </div>
                      <div className="flex-shrink-0">
                        <svg className="w-4 h-4 md:w-4 md:h-4 lg:w-6 lg:h-6 text-neutral-400 group-hover:text-[#25D366] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </motion.a>

                    {/* Email Contact */}
                    <motion.a
                      href="mailto:contact@vawe.global"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="flex items-center gap-2 md:gap-2 lg:gap-4 p-3 md:p-3 lg:p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group"
                      style={{ 
                        backgroundColor: '#f56c5308',
                        border: '2px solid #f56c5330'
                      }}
                    >
                      <div className="flex-shrink-0 h-10 w-10 md:h-10 md:w-10 lg:h-14 lg:w-14 rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" 
                        style={{ backgroundColor: '#f56c53' }}
                      >
                        <svg className="w-4 h-4 md:w-4 md:h-4 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm md:text-sm lg:text-lg font-bold text-neutral-800 mb-0.5">Email Us</h4>
                        <p className="text-xs md:text-xs lg:text-sm text-neutral-600">contact@vawe.global</p>
                      </div>
                      <div className="flex-shrink-0">
                        <svg className="w-4 h-4 md:w-4 md:h-4 lg:w-6 lg:h-6 text-neutral-400 group-hover:text-[#f56c53] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}


