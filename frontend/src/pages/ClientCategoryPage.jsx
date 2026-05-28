import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";

const clientEventOptions = ["Wedding", "Engagement", "Birthday", "Sweet 16", "Baby Shower", "Housewarming", "Other"];

function ClientCategoryPage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const selectEvent = (eventType) => {
    if (eventType === "Wedding") {
      navigate("/client/wedding");
      return;
    }
    setMessage(`${eventType} quote flow will be available soon. Please contact us directly for now.`);
  };

  return (
    <section className="mx-auto flex min-h-[78vh] max-w-5xl items-center px-5 py-16">
      <div className="w-full">
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-champagne">Client quote</p>
          <h1 className="font-display text-5xl text-white">What type of event are you planning?</h1>
        </div>
        {message && (
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-champagne/25 bg-champagne/10 p-4 text-center text-ivory/80">
            {message}
          </div>
        )}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientEventOptions.map((eventType) => (
            <button
              key={eventType}
              type="button"
              onClick={() => selectEvent(eventType)}
              className="min-h-36 rounded-3xl border border-champagne/20 bg-white/[0.04] p-6 text-left transition hover:-translate-y-1 hover:border-champagne/60 hover:bg-champagne/10"
            >
              <span className="font-display text-3xl text-white">{eventType}</span>
            </button>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/" variant="secondary">Back</Button>
        </div>
      </div>
    </section>
  );
}

export default ClientCategoryPage;
