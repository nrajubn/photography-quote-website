import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { serviceHighlights } from "../data/serviceHighlights.js";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle
          eyebrow="Film styles"
          title="Wedding coverage shaped for the way your story feels."
          text="Start simple, go documentary, or choose a fully planned cinematic film experience."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {serviceHighlights.map((item) => (
            <article key={item.title} className="cinematic-panel rounded-3xl p-5">
              <div className="mb-5 h-28 rounded-2xl bg-[linear-gradient(135deg,rgba(213,177,109,0.25),rgba(255,255,255,0.08),rgba(36,25,19,0.86))]" />
              <h3 className="font-display text-2xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ivory/68">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default LandingPage;
