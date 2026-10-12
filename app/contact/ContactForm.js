"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

const services = [
  "Transport & Logistics",
  "Fleet Services",
  "Moving & Relocation (RT Movers)",
  "Business Partnership",
  "General Enquiry",
];

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(e) {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setStatus("");

    const form = e.currentTarget;
    const payload = new FormData(form);
    payload.append("_subject", "New Rush Track website enquiry");
    payload.append("_template", "table");
    payload.append("_captcha", "false");
    payload.append("Source", "Rush Track Transport LLC — Contact page");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) throw new Error("Enquiry submission failed");

      form.reset();
      setStatus("Thank you. Your enquiry has been sent to Rush Track Transport LLC.");
    } catch (error) {
      setStatus(
        `We could not send the form right now. Please email ${site.email} or call ${site.phone}.`
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form quote-form" onSubmit={submit}>
      <div className="quote-form__heading">
        <span className="eyebrow">Contact Rush Track</span>
        <h2>Send us your enquiry.</h2>
        <p>
          Tell us what you need and we’ll route your message to the Rush Track team best suited to help.
        </p>
      </div>

      <div className="form-grid">
        <label>
          Full Name
          <input name="Name" required placeholder="Your name" />
        </label>

        <label>
          Company <span className="form-optional">(optional)</span>
          <input name="Company" placeholder="Company name" />
        </label>

        <label>
          Email
          <input type="email" name="Email" required placeholder="name@company.com" />
        </label>

        <label>
          Phone
          <input name="Phone" required placeholder="+971 ..." />
        </label>

        <label>
          Service
          <select name="Service" defaultValue="Transport & Logistics">
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>

        <label>
          Location <span className="form-optional">(optional)</span>
          <input name="Location" placeholder="Dubai, Sharjah, Abu Dhabi..." />
        </label>
      </div>

      <label>
        Message
        <textarea
          name="Message"
          rows="5"
          required
          placeholder="Tell us what you need, where, and any useful timing or project details..."
        />
      </label>

      <button className="btn btn--gold" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send Enquiry"} <ArrowRight size={17} />
      </button>

      <p className="quote-form__consent">
        By submitting, you agree to be contacted by Rush Track Transport LLC regarding your enquiry.
      </p>

      {status && (
        <p className="form-status" role="status">
          {status}
        </p>
      )}
    </form>
  );
}
