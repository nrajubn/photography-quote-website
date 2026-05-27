import React from "react";

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm uppercase tracking-[0.28em] text-champagne">{eyebrow}</p>}
      <h2 className="font-display text-3xl text-ivory md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-ivory/70">{text}</p>}
    </div>
  );
}

export default SectionTitle;
