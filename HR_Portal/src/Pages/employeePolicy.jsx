import React, { useState } from "react";

export default function EmployeePolicy() {
  const [activeSection, setActiveSection] = useState(null);

  const policies = [
    {
      title: "Employee Conduct",
      content: `Dont Act Up.`,
    },
    {
      title: "Dress Code",
      content: `You Must Wear Clothes.`,
    },
    {
      title: "Attendance & Punctuality",
      content: `Be Present.`,
    },
    {
      title: "Use of Technology",
      content: `Gotta have a computer and use it correctly.`,
    },
    {
      title: "Social Media & Public Communication",
      content: `Dont use Social Media at work.`,
    },
    {
      title: "Health & Safety",
      content: `Practice safe work ethics.`,
    },
    {
      title: "Workplace Harassment & Discrimination",
      content: `Harassment, bullying, or discrimination of any kind will not be tolerated.`,
    },
    {
      title: "Confidentiality",
      content: `Employees must safeguard company, client, and coworker information.`,
    },
    {
      title: "Performance & Reviews",
      content: `Performance reviews occur annually, with informal feedback sessions held quarterly.`,
    },
    {
      title: "Resignation & Termination",
      content: `Employees are enced to provide at least two weeks’ notice when resigning. Exit interviews may be conducted to gather feedback.`,
    },
  ];

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg font-sans">
      <header className="mb-6">
        <h1 className="3xl font-bold text-slate-800">HR — Employee Policy</h1>
      </header>

      <div className="mb-4 flex gap-3">
        <button
          onClick={() => window.print()}
          className="px-3 py-2 rounded-lg border text-sm hover:bg-slate-50"
        >
          Print
        </button>
        <button
          onClick={() => alert('This Employee Policy is part of a sample React project for coursework.')}
          className="px-3 py-2 rounded-lg border text-sm hover:bg-slate-50"
        >
          About
        </button>
      </div>

      <main>
        {policies.map((policy, index) => (
          <section key={index} className="mb-4 border border-slate-100 rounded-lg p-4">
            <header className="flex justify-between items-start">
              <h2 className="text-lg font-semibold text-slate-700">{policy.title}</h2>
              <button
                onClick={() => toggleSection(index)}
                className="text-sm text-slate-500 px-2 py-1 rounded hover:bg-slate-50"
              >
                {activeSection === index ? 'Collapse' : 'Expand'}
              </button>
            </header>

            <div className={`mt-3 text-sm text-slate-600 ${activeSection === index ? '' : 'hidden'}`}>
              <p style={{ whiteSpace: 'pre-wrap' }}>{policy.content}</p>
            </div>
          </section>
        ))}
      </main>

      <footer className="mt-6 text-xs text-slate-400">
        <p>Last updated: October 22, 2025 (sample date)</p>
        <p>Document owner: Human Resources Department (fictional)</p>
      </footer>
    </div>
  );
}