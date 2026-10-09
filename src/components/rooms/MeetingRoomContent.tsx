"use client";

import { useState } from "react";

export default function MeetingRoomContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <span className="text-4xl mb-3 block">✅</span>
        <h3 className="text-lg font-bold text-gray-800">Message Sent!</h3>
        <p className="text-sm text-gray-500 mt-1">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        Let&apos;s schedule a meeting! Fill out the form below or reach out directly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200
                       focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none
                       transition-all bg-gray-50 text-gray-800"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200
                       focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none
                       transition-all bg-gray-50 text-gray-800"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200
                     focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none
                     transition-all bg-gray-50 text-gray-800"
        />
        <textarea
          placeholder="Your Message"
          rows={3}
          required
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200
                     focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none
                     transition-all bg-gray-50 resize-none text-gray-800"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold
                     py-2.5 rounded-xl transition-colors text-sm shadow-lg shadow-blue-500/25"
        >
          Send Message
        </button>
      </form>

      <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
        {[
          { icon: "📧", label: "hello@hasib.dev" },
          { icon: "🔗", label: "linkedin.com/in/hasib" },
          { icon: "🐙", label: "github.com/hasib" },
        ].map((contact) => (
          <span key={contact.label} className="flex items-center gap-1 text-xs text-gray-500">
            <span>{contact.icon}</span> {contact.label}
          </span>
        ))}
      </div>
    </div>
  );
}
