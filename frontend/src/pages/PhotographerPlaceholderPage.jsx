import React from "react";
import Button from "../components/Button.jsx";

function PhotographerPlaceholderPage() {
  return (
    <section className="mx-auto flex min-h-[75vh] max-w-3xl items-center px-5 py-16">
      <div className="cinematic-panel w-full rounded-3xl p-8 text-center shadow-glow">
        <p className="mb-3 text-sm uppercase tracking-[0.28em] text-champagne">Coming soon</p>
        <h1 className="font-display text-5xl text-white">Photographer flow</h1>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-ivory/70">
          This side will be added later. For now, the client quote flow is ready to use.
        </p>
        <div className="mt-8">
          <Button to="/" variant="secondary">Back to Welcome</Button>
        </div>
      </div>
    </section>
  );
}

export default PhotographerPlaceholderPage;
