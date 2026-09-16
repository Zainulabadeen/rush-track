"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      e.currentTarget.reset();
      setStatus("Thank you. Your enquiry has been captured in the local prototype.");
    } catch {
      setStatus("Something went wrong. Please email info@rushtrack.ae instead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Full Name<input name="name" required placeholder="Your name" /></label>
        <label>Company<input name="company" placeholder="Company name" /></label>
        <label>Email<input type="email" name="email" required placeholder="name@company.com" /></label>
        <label>Phone<input name="phone" placeholder="+971 ..." /></label>
      </div>
      <label>Service
        <select name="service" defaultValue="Transport & Logistics">
          <option>Transport & Logistics</option>
          <option>Moving & Relocation / RT Movers</option>
          <option>Fleet Services</option>
          <option>Corporate Partnership</option>
          <option>Careers</option>
        </select>
      </label>
      <label>Message<textarea name="message" required rows="6" placeholder="Tell us what you need..." /></label>
      <button className="btn btn--gold" disabled={loading}>{loading ? "Sending..." : <>Send Enquiry <Send size={17} /></>}</button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
