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

  function submit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const message = [
      "Hello RT Movers UAE, I would like a moving quote.",
      `Name: ${data.name || "-"}`,
      `Phone: ${data.phone || "-"}`,
      `Moving From: ${data.movingFrom || "-"}`,
      `Moving To: ${data.movingTo || "-"}`,
      `Move Type: ${data.moveType || "-"}`,
      `Preferred Date: ${data.preferredDate || "-"}`,
      data.message ? `Message: ${data.message}` : "",
    ].filter(Boolean).join("\n");

    const whatsappNumber = site.rtMoversPhone.replace(/\D/g, "");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setStatus("Your quote details are ready in WhatsApp. Send the message to RT Movers to continue.");
  }

  return (
    <form className="contact-form quote-form" onSubmit={submit}>
      <div className="quote-form__heading">
        <span className="eyebrow">RT Movers UAE</span>
        <h2>Get your moving quote.</h2>
        <p>Share the key details of your move. The enquiry opens directly with the RT Movers team on WhatsApp.</p>
      </div>

      <div className="form-grid">
        <label>Your Name<input name="name" required placeholder="Ahmed Ali" /></label>
        <label>Phone<input name="phone" required placeholder="+971 50 000 0000" /></label>
        <label>Moving From<input name="movingFrom" required placeholder="e.g. JVC, Dubai" /></label>
        <label>Moving To<input name="movingTo" required placeholder="e.g. Dubai Marina" /></label>
        <label>Move Type
          <select name="moveType" defaultValue="Home Relocation">
            {moveTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <label>Preferred Date<input type="date" name="preferredDate" /></label>
      </div>

      <label>Message <span className="form-optional">(optional)</span>
        <textarea name="message" rows="5" placeholder="Tell us about your items, floor, parking or access..." />
      </label>

      <button className="btn btn--gold" type="submit">
        Get My Free Quote <ArrowRight size={17} />
      </button>
      <p className="quote-form__consent">By continuing, you agree to be contacted by RT Movers UAE.</p>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
