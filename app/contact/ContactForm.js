"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

const moveTypes = [
  "Home Relocation",
  "Apartment Move",
  "Villa Move",
  "Office Relocation",
  "Furniture Moving",
  "Packing & Unpacking",
  "Storage Services",
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
    payload.append("_subject", "New moving quote enquiry from Rush Track website");
    payload.append("_template", "table");
    payload.append("_captcha", "false");
    payload.append("Source", "Rush Track Transport LLC — Moving Quote page");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.rtMoversEmail}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) throw new Error("Quote submission failed");

      form.reset();
      setStatus(`Thank you. Your moving quote request has been sent to ${site.rtMoversEmail}.`);
    } catch (error) {
      setStatus(`We could not send the form right now. Please email ${site.rtMoversEmail} or contact RT Movers on ${site.rtMoversPhone}.`);
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form quote-form" onSubmit={submit}>
      <div className="quote-form__heading">
        <span className="eyebrow">RT Movers UAE</span>
        <h2>Get your moving quote.</h2>
        <p>Share your move details and the enquiry will be sent directly to the RT Movers contact inbox.</p>
      </div>

      <div className="form-grid">
        <label>Your Name<input name="Name" required placeholder="Ahmed Ali" /></label>
        <label>Phone<input name="Phone" required placeholder="+971 50 000 0000" /></label>
        <label>Moving From<input name="Moving From" required placeholder="e.g. JVC, Dubai" /></label>
        <label>Moving To<input name="Moving To" required placeholder="e.g. Dubai Marina" /></label>
        <label>Move Type
          <select name="Move Type" defaultValue="Home Relocation">
            {moveTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <label>Preferred Date<input type="date" name="Preferred Date" /></label>
      </div>

      <label>Message <span className="form-optional">(optional)</span>
        <textarea name="Message" rows="5" placeholder="Tell us about your items, floor, parking or access..." />
      </label>

      <button className="btn btn--gold" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Get My Free Quote"} <ArrowRight size={17} />
      </button>
      <p className="quote-form__consent">By submitting, you agree to be contacted by RT Movers UAE.</p>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}
