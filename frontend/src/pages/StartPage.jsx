import React from "react";
import Button from "../components/Button.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

function StartPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle
        eyebrow="Start"
        title="Choose how you want to continue."
        text="Clients can build a quote request. Admin can review submitted requests."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <StartCard
          title="Client"
          text="I want to request a quote for my event."
          buttonText="Request a Quote"
          to="/client"
        />
        <StartCard
          title="Admin"
          text="View submitted quote requests."
          buttonText="Open Admin"
          to="/admin/quotes"
        />
      </div>
    </section>
  );
}

function StartCard({ title, text, buttonText, to }) {
  return (
    <article className="cinematic-panel rounded-3xl p-8 shadow-glow">
      <div className="mb-6 h-44 rounded-3xl bg-[linear-gradient(135deg,rgba(213,177,109,0.28),rgba(69,94,72,0.24),rgba(86,24,38,0.22),rgba(0,0,0,0.42))]" />
      <h2 className="font-display text-4xl text-white">{title}</h2>
      <p className="mt-4 min-h-14 text-lg leading-8 text-ivory/72">{text}</p>
      <div className="mt-8">
        <Button to={to}>{buttonText}</Button>
      </div>
    </article>
  );
}

export default StartPage;
