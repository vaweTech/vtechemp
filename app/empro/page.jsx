// "use client";
// import { useState } from "react";

// export default function Home() {
//   const [form, setForm] = useState({
//     empId: "",
//     empName: "",
//     morningWork: "",
//     afternoonWork: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("/api/submit", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     if (res.ok) {
//       alert("Work Report Submitted Successfully!");
//       setForm({ empId: "", empName: "", morningWork: "", afternoonWork: "" });
//     } else {
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
//       <div className="w-full max-w-xl bg-white rounded-lg shadow-xl p-6">
//         <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
//           Daily Work Report Form
//         </h1>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input
//             placeholder="Employee ID"
//             value={form.empId}
//             onChange={(e) => setForm({ ...form, empId: e.target.value })}
//             required
//             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//           />

//           <input
//             placeholder="Employee Name"
//             value={form.empName}
//             onChange={(e) => setForm({ ...form, empName: e.target.value })}
//             required
//             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//           />

//           <label className="font-medium text-gray-700">Morning Work Summary</label>
//           <textarea
//             rows="5"
//             placeholder="Describe what you worked on in the morning..."
//             value={form.morningWork}
//             onChange={(e) => setForm({ ...form, morningWork: e.target.value })}
//             required
//             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//           />

//           <label className="font-medium text-gray-700">Afternoon Work Summary</label>
//           <textarea
//             rows="5"
//             placeholder="Describe afternoon work in detail..."
//             value={form.afternoonWork}
//             onChange={(e) => setForm({ ...form, afternoonWork: e.target.value })}
//             required
//             className="w-full border border-gray-300 rounded-lg px-3 py-2"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
//           >
//             Submit Report
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }

"use client";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("work");
  const [leave, setLeave] = useState({
    empName: "",
    reason: "",
    emergency: false,
  });

  const [work, setWork] = useState({
    empId: "",
    empName: "",
    morningWork: "",
    afternoonWork: "",
  });

  const submitWork = async (e) => {
    e.preventDefault();
    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...work, sheet: "Work" }),
    });
    alert("Work Report Submitted!");
    setWork({ empId: "", empName: "", morningWork: "", afternoonWork: "" });
  };

  const submitLeave = async (e) => {
    e.preventDefault();
    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...leave, sheet: "Leaves" }),
    });
    alert("Leave Submitted!");
    setLeave({ empName: "", reason: "", emergency: false });
  };

  return (
    <main className="min-h-screen mt-26 bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-6">

        {/* TAB BUTTONS */}
        <div className="flex justify-center gap-4 mb-6">
          <button onClick={() => setActiveTab("work")}
            className={`px-4 py-2 rounded ${activeTab==="work"?"bg-blue-600 text-white":"bg-gray-200"}`}>
            Work Report
          </button>
          <button onClick={() => setActiveTab("leave")}
            className={`px-4 py-2 rounded ${activeTab==="leave"?"bg-blue-600 text-white":"bg-gray-200"}`}>
            Apply Leave
          </button>
        </div>

        {/* WORK REPORT FORM */}
        {activeTab === "work" && (
          <form className="space-y-4" onSubmit={submitWork}>
            <h2 className="text-xl font-bold">Daily Work Report</h2>

            <input placeholder="Employee ID" className="w-full border rounded px-3 py-2"
              value={work.empId} onChange={(e) => setWork({ ...work, empId: e.target.value })} required />

            <input placeholder="Employee Name" className="w-full border rounded px-3 py-2"
              value={work.empName} onChange={(e) => setWork({ ...work, empName: e.target.value })} required />

            <textarea rows={4} placeholder="Morning Work" className="w-full border rounded px-3 py-2"
              value={work.morningWork} onChange={(e) => setWork({ ...work, morningWork: e.target.value })} required />

            <textarea rows={4} placeholder="Afternoon Work" className="w-full border rounded px-3 py-2"
              value={work.afternoonWork} onChange={(e) => setWork({ ...work, afternoonWork: e.target.value })} required />

            <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold">Submit Work</button>
          </form>
        )}

        {/* LEAVE FORM */}
        {activeTab === "leave" && (
          <form className="space-y-4" onSubmit={submitLeave}>
            <h2 className="text-xl font-bold">Apply Leave</h2>

            <input placeholder="Employee Name" className="w-full border rounded px-3 py-2"
              value={leave.empName} onChange={(e) => setLeave({ ...leave, empName: e.target.value })} required />

            <textarea rows={4} placeholder="Reason for Leave" className="w-full border rounded px-3 py-2"
              value={leave.reason} onChange={(e) => setLeave({ ...leave, reason: e.target.value })} required />

            {/* Emergency Toggle */}
            <label className="flex items-center gap-3">
              <input type="checkbox"
                className="w-5 h-5"
                checked={leave.emergency}
                onChange={(e) => setLeave({ ...leave, emergency: e.target.checked })} />
              <span className="font-medium text-red-600">Emergency Leave</span>
            </label>

            <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold">Submit Leave</button>
          </form>
        )}
      </div>
    </main>
  );
}
