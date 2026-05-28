import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuoteById } from "../api/quoteApi.js";
import Button from "../components/Button.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

function AdminQuoteDetailPage() {
  const { id } = useParams();
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getQuoteById(id)
      .then((response) => setQuote(response.data))
      .catch(() => setError("Could not load quote details. Please make sure the backend is running."));
  }, [id]);

  if (error) {
    return (
      <section className="mx-auto max-w-5xl px-5 py-16">
        <p className="rounded-2xl border border-red-300/30 bg-red-500/10 p-4 text-red-100">{error}</p>
      </section>
    );
  }

  if (!quote) {
    return <section className="mx-auto max-w-5xl px-5 py-16 text-ivory/70">Loading quote details...</section>;
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle
        eyebrow="Admin details"
        title={quote.clientName}
        text="Full quote request details grouped for manual review."
      />
      <div className="mb-6">
        <Button to="/admin/quotes" variant="secondary">Back to Quotes</Button>
      </div>
      <div className="grid gap-6">
        <DetailSection title="Client Details" items={[
          ["Client Name", quote.clientName],
          ["Email", quote.email],
          ["Phone", quote.phone]
        ]} />
        <DetailSection title="Event Details" items={[
          ["Event Category", quote.eventCategory],
          ["Wedding Date", quote.weddingDate],
          ["Location", quote.location],
          ["Number of Events", quote.numberOfEvents],
          ["Selected Indian Events", quote.selectedIndianEvents],
          ["Custom Event Name", quote.customEventName],
          ["Event Names / Notes", quote.eventNamesOrNotes],
          ["Coverage Hours", quote.coverageHours],
          ["Indoor / Outdoor Type", quote.indoorOutdoorType],
          ["Guest Count", quote.guestCount],
          ["Special Traditions", quote.specialTraditions]
        ]} />
        <DetailSection title="Photography Details" items={[
          ["Photography Needed", quote.photographyNeeded ? "Yes" : "No"],
          ["Photo Delivery Estimate", quote.photoDeliverableEstimate],
          ["Selected Photography Options", quote.selectedPhotographyOptions]
        ]} />
        <DetailSection title="Video Details" items={[
          ["Selected Video Package", quote.selectedVideoPackage],
          ["Final Video Style", quote.finalVideoStyle],
          ["Live Streaming", quote.liveStreamingPreference],
          ["Selected Deliverables", quote.selectedDeliverables],
          ["Selected Video Add-ons", quote.selectedVideoAddOns]
        ]} />
        <DetailSection title="Additional Details" items={[
          ["Selected General Add-ons", quote.selectedGeneralAddOns],
          ["Reference Video Link", quote.referenceVideoLink],
          ["Budget Range", quote.budgetRange],
          ["Special Notes", quote.specialNotes],
          ["Created At", quote.createdAt ? new Date(quote.createdAt).toLocaleString() : ""]
        ]} />
      </div>
    </section>
  );
}

function DetailSection({ title, items }) {
  return (
    <section className="cinematic-panel rounded-3xl p-6">
      <h2 className="font-display text-3xl text-white">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {items.map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-champagne/80">{label}</p>
            <p className="mt-2 whitespace-pre-wrap leading-7 text-ivory/78">{value || "Not provided"}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminQuoteDetailPage;
