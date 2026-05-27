import React from "react";
import QuoteForm from "../components/QuoteForm.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

function QuotePage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <SectionTitle
        eyebrow="Quote request"
        title="Tell us about your wedding."
        text="Share the basics now. The admin page will store and display every local quote request in H2."
      />
      <QuoteForm />
    </section>
  );
}

export default QuotePage;
