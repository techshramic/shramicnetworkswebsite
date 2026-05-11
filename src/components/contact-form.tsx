"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm({ kind = "general" }: { kind?: "general" | "partner" | "career" | "demo" | "investor" }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="glass grid gap-5 p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <input aria-hidden="true" className="hidden" name="companyWebsite" tabIndex={-1} />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="field">
          <label htmlFor={`${kind}-name`}>Name</label>
          <input id={`${kind}-name`} name="name" required />
        </div>
        <div className="field">
          <label htmlFor={`${kind}-email`}>Email</label>
          <input id={`${kind}-email`} name="email" required type="email" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="field">
          <label htmlFor={`${kind}-phone`}>Phone</label>
          <input id={`${kind}-phone`} name="phone" type="tel" />
        </div>
        <div className="field">
          <label htmlFor={`${kind}-organization`}>Organization</label>
          <input id={`${kind}-organization`} name="organization" />
        </div>
      </div>
      {kind === "demo" ? (
        <div className="field">
          <label htmlFor="platform">Platform</label>
          <select id="platform" name="platform">
            <option>Shramic Krushi</option>
            <option>Shramic Build</option>
            <option>Shramic Worker App</option>
            <option>PashuSetu</option>
            <option>Shramic Business</option>
            <option>Shramic Experts</option>
          </select>
        </div>
      ) : null}
      <div className="field">
        <label htmlFor={`${kind}-message`}>Message</label>
        <textarea id={`${kind}-message`} name="message" required />
      </div>
      {kind === "investor" ? (
        <label className="flex gap-3 text-sm text-[#4d473b]">
          <input required type="checkbox" />
          I acknowledge the current NDA terms and understand sensitive material is shared only after email verification.
        </label>
      ) : null}
      <button className="button button-accent w-fit" type="submit">
        <Send size={18} /> Submit inquiry
      </button>
      {submitted ? <p className="rounded-lg bg-[#1f7a7214] p-3 font-bold text-[#1f7a72]">Thanks. This prototype captured your submission locally and is ready for backend wiring.</p> : null}
    </form>
  );
}
