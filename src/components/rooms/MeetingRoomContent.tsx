"use client";

import { useState } from "react";

const CONTACTS = [
  {
    label: "hello@hasib.dev",
    icon: (
      <svg width="14" height="14" viewBox="0 0 20 20" fill="#6B7280">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    label: "linkedin.com/in/hasib",
    icon: (
      <svg width="14" height="14" viewBox="0 0 20 20" fill="#6B7280">
        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "github.com/hasib",
    icon: (
      <svg width="14" height="14" viewBox="0 0 20 20" fill="#6B7280">
        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
      </svg>
    ),
  },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontSize: 13,
  fontWeight: 400,
  color: "#111827",
  background: "#F9FAFB",
  border: "1.5px solid #E5E7EB",
  borderRadius: 10,
  padding: "10px 14px",
  outline: "none",
  transition: "all 0.15s ease",
  fontFamily: "inherit",
};

export default function MeetingRoomContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#818CF8";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(129,140,248,0.15)";
    e.currentTarget.style.background = "#FFFFFF";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#E5E7EB";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.background = "#F9FAFB";
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "32px 0" }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "#ECFDF5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 14px auto",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 20 20" fill="#10B981">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827" }}>
          Message Sent!
        </h3>
        <p style={{ fontSize: 13, color: "#6B7280", marginTop: 4 }}>
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 16, lineHeight: 1.6 }}>
        Let&apos;s schedule a meeting! Fill out the form below or reach out directly.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
          <input
            type="text"
            placeholder="Your Name"
            required
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          style={{ ...inputStyle, marginBottom: 10 }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <textarea
          placeholder="Your Message"
          rows={3}
          required
          style={{
            ...inputStyle,
            resize: "none",
            marginBottom: 12,
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            fontSize: 13,
            fontWeight: 700,
            color: "white",
            background: "linear-gradient(135deg, #4F46E5, #6366F1)",
            border: "none",
            padding: "11px 0",
            borderRadius: 10,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(79,70,229,0.25)",
            transition: "all 0.15s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(79,70,229,0.35)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 14px rgba(79,70,229,0.25)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Send Message
        </button>
      </form>

      {/* Contact links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginTop: 16,
          paddingTop: 14,
          borderTop: "1px solid #F3F4F6",
        }}
      >
        {CONTACTS.map((c) => (
          <span
            key={c.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: 11,
              fontWeight: 500,
              color: "#6B7280",
            }}
          >
            {c.icon}
            {c.label}
          </span>
        ))}
      </div>
    </div>
  );
}
