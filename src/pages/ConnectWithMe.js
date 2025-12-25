import React, { useState } from "react";
import "../styles/ConnectWithMe.css";
import useActivityMeter from "../components/useActivityMeter";

const templates = [
  {
    title: "Template 1",
    subject: "Invitation for a Phone Discussion",
    body: `Hi [Your Name],

We are reaching out from [Company Name] and would like to have a short 15-minute introductory phone call regarding potential opportunities.

Would you be available on [Date] at [Time] EST?

Please let us know if you would prefer a different time slot.

Best Regards,
Hiring Team
[Company Name]
`,
  },
  {
    title: "Template 2",
    subject: "Video Call – Introduction & Discussion",
    body: `Hello [Your Name],

We hope you're doing well. We are contacting you on behalf of [Company Name] and would love to schedule a video call to learn more about your background and experience.

Would [Date] at [Time] EST be a suitable time for you?

Looking forward to connecting.

Kind Regards,
Hiring Team
[Company Name]
`,
  },
  {
    title: "Template 3",
    subject: "Job Opportunity – Quick Discussion Request",
    body: `Hi [Your Name],

I am reaching out from [Company Name]. We reviewed your profile and would love to speak with you about a potential job opportunity.

Here is the role link for reference: [Job Link]

Could you please let us know if you are available for a short chat on [Date] at [Time] EST?

Warm Regards,
Hiring Team
[Company Name]
`,
  },
];

const ConnectWithMe = () => {
  const [flipped, setFlipped] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const { points, incrementPoints } = useActivityMeter();

  const [recruiterName, setRecruiterName] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [jobLink, setJobLink] = useState("");
  const [error, setError] = useState("");

  const [providerPopup, setProviderPopup] = useState(false);

  const receivingEmail = "nithisha2207@gmail.com";

  const replaceValues = (body, subject) => ({
    body: body
      .replaceAll("[Your Name]", recruiterName)
      .replaceAll("[Company Name]", company)
      .replaceAll("[Date]", date)
      .replaceAll("[Time]", time)
      .replaceAll("[Job Link]", jobLink || ""),
    subject: subject.replaceAll("[Company Name]", company),
  });

  const handleSend = () => {
    if (!recruiterName || !company || !date || !time || !selectedTemplate) {
      setError("⚠ Please fill all * fields.");
      return;
    }

    if (selectedTemplate === "Template 3" && !jobLink) {
      setError("⚠ Job link is required for Template 3.");
      return;
    }

    setError("");
    setProviderPopup(true);
  };

  const openEmailClient = (type) => {
    const tpl = templates.find((t) => t.title === selectedTemplate);
    const { subject, body } = replaceValues(tpl.body, tpl.subject);

    let url = "";
    if (type === "gmail") {
      url = `https://mail.google.com/mail/?view=cm&fs=1&to=${receivingEmail}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    } else if (type === "outlook") {
      url = `https://outlook.office.com/mail/deeplink/compose?to=${receivingEmail}&subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    } else if (type === "yahoo") {
      url = `https://compose.mail.yahoo.com/?to=${receivingEmail}&subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    } else {
      window.location.href = `mailto:${receivingEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    window.open(url, "_blank");
    if (points < 100) incrementPoints();
    setProviderPopup(false);
  };

  return (
    <div className="connect-container">
      <h1 className="connect-title">Invite Me</h1>

      <div className="card-grid">
        {templates.map((tpl, i) => (
          <div
            key={i}
            className={`flip-card ${flipped === i ? "flipped" : ""}`}
            onClick={() => setFlipped(flipped === i ? null : i)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front"><h3>{tpl.title}</h3></div>
              <div className="flip-card-back">
                <h4>Subject:</h4>
                <p>{tpl.subject}</p>
                <h4>Body:</h4>
                <pre>{tpl.body}</pre>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="form-container">
        <div className="form-grid">
          <label>Recruiter Name *</label>
          <input value={recruiterName} onChange={(e) => setRecruiterName(e.target.value)} />

          <label>Company *</label>
          <input value={company} onChange={(e) => setCompany(e.target.value)} />

          <label>Date *</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <label>Time * (EST)</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />

          <label>{selectedTemplate === "Template 3" ? "Job Link *" : "Job Link (optional)"}</label>
          <input value={jobLink} onChange={(e) => setJobLink(e.target.value)} />

          <label>Select Template *</label>
          <select value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)}>
            <option value="">Select Template</option>
            {templates.map((t) => <option value={t.title}>{t.title}</option>)}
          </select>
        </div>

        {error && <p className="error-text">{error}</p>}
        <button className="send-btn" onClick={handleSend}>Send</button>
      </div>

      {providerPopup && (
  <div className="popup-overlay">
    <div className="popup-card">
      <h2>Select Email Service</h2>
      <div className="button-grid">
        <button className="email-btn gmail" onClick={() => openEmailClient("gmail")}>
          Gmail
        </button>
        <button className="email-btn outlook" onClick={() => openEmailClient("outlook")}>
          Outlook
        </button>
        <button className="email-btn yahoo" onClick={() => openEmailClient("yahoo")}>
          Yahoo Mail
        </button>
        <button className="email-btn default" onClick={() => openEmailClient("default")}>
          Default Mail App
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default ConnectWithMe;
