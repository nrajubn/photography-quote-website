import React from "react";
import Button from "./Button.jsx";

function PackageCard({ packageOption }) {
  const includes = packageOption.packageIncludes
    ? packageOption.packageIncludes.split("\n").filter(Boolean)
    : [];

  return (
    <article className="cinematic-panel flex h-full flex-col rounded-3xl p-6 shadow-glow">
      <div className="mb-6 h-40 rounded-2xl bg-[linear-gradient(135deg,rgba(213,177,109,0.28),rgba(248,243,234,0.08),rgba(36,25,19,0.9))]" />
      <h3 className="font-display text-3xl text-white">{packageOption.name}</h3>
      <p className="mt-4 leading-7 text-ivory/72">{packageOption.shortDescription}</p>
      <div className="mt-5 rounded-2xl bg-black/20 p-4">
        <p className="text-xs uppercase tracking-[0.22em] text-champagne">Includes</p>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-ivory/75">
          {includes.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {packageOption.addOn && (
        <div className="mt-4 rounded-2xl border border-champagne/20 bg-champagne/10 p-4">
          <p className="text-xs uppercase tracking-[0.22em] text-champagne">Add-on</p>
          <p className="mt-2 text-sm leading-6 text-ivory/80">{packageOption.addOn}</p>
        </div>
      )}
      <div className="mt-5 rounded-2xl bg-black/20 p-4">
        <p className="text-xs uppercase tracking-[0.22em] text-champagne">Best For</p>
        <p className="mt-2 text-sm leading-6 text-ivory/75">{packageOption.bestFor}</p>
      </div>
      <div className="mt-auto flex flex-col gap-3 pt-6">
        <Button to={`/client/wedding?package=${encodeURIComponent(packageOption.name)}`}>Select Package</Button>
        <Button to="/compare" variant="secondary">Compare</Button>
      </div>
    </article>
  );
}

export default PackageCard;
