import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/Button.jsx";

function ThankYouPage() {
  const location = useLocation();
  const quote = location.state?.quote;

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-5 py-16">
      <div className="cinematic-panel w-full rounded-3xl p-8 text-center shadow-glow">
        <p className="mb-3 text-sm uppercase tracking-[0.28em] text-champagne">Submitted</p>
        <h1 className="font-display text-4xl text-white md:text-5xl">Your quote request has been submitted.</h1>
        {(quote?.selectedVideoPackage || quote?.eventCategory) && (
          <p className="mt-5 text-lg text-champagne">{quote.selectedVideoPackage || quote.eventCategory}</p>
        )}
        <p className="mx-auto mt-5 max-w-xl leading-7 text-ivory/72">
          We will review your event details and contact you soon with a custom quote.
        </p>
        <div className="mt-8">
          <Button to="/">Back to Home</Button>
        </div>
      </div>
    </section>
  );
}

export default ThankYouPage;
