"use client";
import { useState } from "react";

export default function ContactEmail() {
  const email = "r0548500974@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center space-x-2 space-x-reverse text-sm">
      <span>{email}</span>
      <button
        onClick={handleCopy}
        className="text-white hover:text-gray-300 transition"
        title="העתק מייל"
      >
        {/* SVG של אייקון העתקה */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6V4a2 2 0 00-2-2H6a2 2 0 00-2 2v16a2 2 0 002 2h4z"
          />
        </svg>
      </button>
      {copied && <span className="text-green-300">הועתק</span>}
    </div>
  );
}
