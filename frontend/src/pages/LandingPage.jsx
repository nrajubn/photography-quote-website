import React from "react";
import Button from "../components/Button.jsx";

function LandingPage() {
  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden px-5 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(213,177,109,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(86,24,38,0.18),transparent_26%),linear-gradient(135deg,#050505_0%,#172018_45%,#241913_100%)]" />
      <div className="relative mx-auto w-full max-w-5xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-champagne">Photo and video quote builder</p>
        <h1 className="font-display text-5xl text-white md:text-7xl">Welcome to MyHobbyGraphy</h1>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ChoiceCard
            title="I am a Client"
            text="Request a quote for your wedding or event."
            to="/client"
          />
          <ChoiceCard
            title="I am a Photographer"
            text="Photographer tools will be added soon."
            to="/photographer"
            muted
          />
        </div>
      </div>
    </section>
  );
}

function ChoiceCard({ title, text, to, muted }) {
  return (
    <div className="cinematic-panel rounded-3xl p-7 text-left shadow-glow">
      <div className="mb-6 h-36 rounded-3xl bg-[linear-gradient(135deg,rgba(213,177,109,0.25),rgba(69,94,72,0.22),rgba(86,24,38,0.18),rgba(0,0,0,0.5))]" />
      <h2 className="font-display text-4xl text-white">{title}</h2>
      <p className="mt-3 min-h-12 text-ivory/68">{text}</p>
      <div className="mt-7">
        <Button to={to} variant={muted ? "secondary" : "primary"} className="w-full">
          {title}
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
