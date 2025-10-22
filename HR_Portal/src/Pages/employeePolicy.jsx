import React, { useState } from "react";

export default function EmployeePolicy() {
  const [activeSection, setActiveSection] = useState(null);

  const policies = [
    {
      title: "Employee Conduct",
      content: `All HR mployees are expected to maintain professionalism and integrity at all times. This includes being courteous to colleagues, clients, and vendors, adhering to company values, and promoting a positive workplace culture. Disrespectful or disruptive behavior may result in disciplinary action.`,
    },
    {
      title: "Dress Code",
      content: `HR maintains a smart-casual dress policy. Employees are encouraged to wear clothing that is neat, clean, and professional. Business attire may be required for client meetings, presentations, or events as communicated by management.`,
    },
    {
      title: "Attendance & Punctuality",
      content: `Regular attendance is crucial for team collaboration. Employees should arrive on time for work and meetings. Absences and tardiness should be reported to a supervisor as soon as possible. Repeated unexcused absences may impact performance evaluations.`,
    },
    {
      title: "Use of Technology",
      content: `Company devices and networks are provided for business use. Limited personal use is acceptable but must not interfere with productivity or security. Employees must not download unauthorized software or visit inappropriate websites while using company resources.`,
    },
    {
      title: "Social Media & Public Communication",
      content: `Employees should use discrewhen posting on social media, especially when identifying themselves as HR employees. Confidential information must never be shared online. Only authorized representatives may speak on behalf of the company.`,
    },
    {
      title: "Health & Safety",
      content: `HRritizes the safety of all employees. Staff are expected to follow workplace safety procedures, report hazards immediately, and participate in required safety training. The company maintains compliance with occupational health and safety standards.`,
    },
    {
      title: "Workplace Harassment & Discrimination",
      content: `Harassment, bullying, or discrimination of any kind will not be tolerated. Employees are encouraged to report any incidents confidentially to HR. Retaliation against individuals who raise concerns in good faith is strictly prohibited.`,
    },
    {
      title: "Confidentiality",
      content: `Employees must safeguard company, client, and coworker information. Sensitive data, trade secrets, and proprietary content should not be shared outside the company. Violations may lead to disciplinary action or legal consequences.`,
    },
    {
      title: "Performance & Reviews",
      content: `Performance reviews occur annually, with informal feedback sessions held quarterly. Employees are evaluated based on job knowledge, teamwork, reliability, and contribution to company goals. Constructive feedback is a two-way process — employees are encouraged to share input with managers.`,
    },
    {
      title: "Resignation & Termination",
      content: `Employees are enced to provide at least two weeks’ notice when resigning. Exit interviews may be conducted to gather feedback. HR reserves the right to terminate employment for violation of policies, poor performance, or business needs.`,
    },
  ];

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg font-sans">
      <header className="mb-6">
        <h1 className="3xl font-bold text-slate-800">HR Labs — Employee Policy</h1>
        <p className="mt-2 text-sm text-slate-500">(Fictional policy for training/demo use)</p>
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