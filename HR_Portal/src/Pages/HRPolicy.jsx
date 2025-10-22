import React, { useState } from "react";

export default function HRPolicy() {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "Welcome & Purpose",
      body: `Welcome to Nimbus HR Labs. This document outlines the company's HR policies and expectations. It is intended for training and coursework only and contains fictional information for demonstration purposes. All policies are illustrative and not legally binding.`,
    },
    {
      title: "Equal Employment Opportunity",
      body: `Nimbus HR Labs is an equal opportunity employer. We are committed to providing an inclusive workplace free from discrimination on the basis of race, color, religion, sex, age, national origin, disability, or any other protected characteristic. Reasonable accommodations are available upon request.`,
    },
    {
      title: "Code of Conduct",
      body: `Employees must act with integrity and professionalism. Expected behaviors include: punctuality, respectful communication, collaboration, and protecting confidential information. Unprofessional behavior (harassment, theft, or fraud) may lead to disciplinary action up to and including termination.`,
    },
    {
      title: "Working Hours & Attendance",
      body: `Standard working hours are 9:00 AM — 5:00 PM, Monday through Friday (40 hours/week). Flexible start/end times are available with manager approval. Employees should notify their manager as early as possible when absent or late.`,
    },
    {
      title: "Remote Work & Telecommuting",
      body: `Employees may request remote work on a part-time or full-time basis. Remote work agreements must be approved by the direct manager and HR. Employees remain subject to the same performance and security expectations as on-site staff.`,
    },
    {
      title: "Paid Time Off (PTO)",
      body: `All full-time employees accrue PTO based on tenure: 0–1 year: 10 days; 1–3 years: 15 days; 3+ years: 20 days. PTO requests should be submitted at least 2 weeks in advance when possible. Unused PTO is subject to the company's carryover policy.`,
    },
    {
      title: "Sick Leave",
      body: `Employees are eligible for 6 sick days per calendar year. For illnesses lasting more than 3 consecutive days, a medical note may be required. Sick leave may not be used for disciplinary absences.`,
    },
    {
      title: "Leave of Absence",
      body: `The company offers parental leave, jury duty leave, and short-term family leave in accordance with applicable law. Employees should contact HR to initiate a leave request and obtain guidance on documentation requirements.`,
    },
    {
      title: "Compensation & Performance Reviews",
      body: `Salaries are determined by market benchmarks and individual performance. Formal performance reviews occur annually; informal check-ins occur quarterly. Promotions and raises are based on performance, business needs, and budget.`,
    },
    {
      title: "Employee Benefits (sample)",
      body: `Benefits may include: medical, dental, vision, 401(k) with company match, commuter benefits, and professional development stipends. Benefit details vary by employment type and location.`,
    },
    {
      title: "Confidentiality & Data Security",
      body: `Employees must protect company data and customer information. Use company-approved tools for storing data. Report security incidents immediately to the IT & Security team. Unauthorized data sharing may result in disciplinary action.`,
    },
    {
      title: "Use of Company Property & IT",
      body: `Company devices and accounts are provided for business use. Reasonable personal use is permitted but must not interfere with work or violate policy. Do not install unauthorized software. Follow password and MFA requirements.`,
    },
    {
      title: "Conflict of Interest",
      body: `Employees should avoid outside activities that conflict with company interests. Disclose potential conflicts to HR or your manager for review and guidance.`,
    },
    {
      title: "Disciplinary Procedures",
      body: `Minor infractions are handled through coaching and written warnings. Repeated or severe violations may lead to suspension or termination. HR will document disciplinary actions in accordance with company practices.`,
    },
    {
      title: "Acknowledgment",
      body: `All employees are required to sign an acknowledgment stating they have read and understood these policies. This sample document is for coursework and illustrative purposes only.`,
    },
  ];

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg font-sans">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">HR Policy</h1>
      </header>

      <div className="mb-4 flex gap-3">
        <button
          className="px-3 py-2 rounded-lg border text-sm hover:bg-slate-50"
          onClick={() => window.print()}
        >
          Print
        </button>
        <button
          className="px-3 py-2 rounded-lg border text-sm hover:bg-slate-50"
          onClick={() => alert('This is a sample component for coursework.')}
        >
          About
        </button>
      </div>

      <nav className="mb-4">
        <ul className="flex flex-wrap gap-2 text-sm">
          {sections.slice(0, 6).map((s, i) => (
            <li key={s.title}>
              <button
                className="px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200"
                onClick={() => toggle(i)}
              >
                {s.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {sections.map((section, idx) => (
          <section
            key={section.title}
            className="mb-4 border border-slate-100 rounded-lg p-4"
          >
            <header className="flex justify-between items-start">
              <h2 className="text-lg font-semibold text-slate-700">{section.title}</h2>
              <button
                className="text-sm text-slate-500 px-2 py-1 rounded hover:bg-slate-50"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                {openIndex === idx ? 'Collapse' : 'Expand'}
              </button>
            </header>

            <div className={`mt-3 text-sm text-slate-600 ${openIndex === idx ? '' : 'hidden'}`}>
              <p style={{ whiteSpace: 'pre-wrap' }}>{section.body}</p>
            </div>
          </section>
        ))}
      </main>

      <footer className="mt-6 text-xs text-slate-400">
        <p>Last reviewed: October 10, 2025 (sample date)</p>
        <p>Document owner: Human Resources (fictional)</p>
      </footer>
    </div>
  );
}
 