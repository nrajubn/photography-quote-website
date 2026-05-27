import React from "react";
import Button from "./Button.jsx";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(213,177,109,0.18),transparent_28%),linear-gradient(135deg,#050505_0%,#211611_45%,#0f0f0f_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:70px_70px]" />
      <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.32em] text-champagne">Wedding photo and video stories</p>
          <h1 className="font-display text-5xl leading-tight text-ivory md:text-7xl">
            Cinematic wedding films crafted around your story.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/75">
            Choose your film style, compare options, and request a custom quote.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button to="/login">Get a Quote</Button>
            <Button to="/packages" variant="secondary">View Packages</Button>
          </div>
        </div>
        <div className="cinematic-panel rounded-[2rem] p-4 shadow-glow">
          <div className="aspect-[4/5] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(150deg,rgba(248,243,234,0.16),rgba(213,177,109,0.18)_38%,rgba(36,25,19,0.9)),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.22),transparent_24%)] p-6">
            <div className="flex h-full flex-col justify-end rounded-[1.1rem] border border-white/15 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-champagne">Film mood</p>
              <p className="mt-3 font-display text-3xl text-white">Warm light, honest emotion, timeless edit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
