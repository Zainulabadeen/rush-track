export default function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "section-heading--center" : ""}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
