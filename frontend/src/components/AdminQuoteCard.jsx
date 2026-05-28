import React from "react";
import Button from "./Button.jsx";

function yesNo(value) {
  return value ? "Yes" : "No";
}

function AdminQuoteCard({ quote, onDelete }) {
  const addOns = [quote.liveStreamingPreference, quote.selectedVideoAddOns, quote.selectedGeneralAddOns].filter(Boolean).join(", ");

  return (
    <article className="cinematic-panel rounded-3xl p-6">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="font-display text-3xl text-white">{quote.clientName}</h3>
          <p className="mt-2 text-sm text-ivory/65">{quote.email} - {quote.phone || "No phone"}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to={`/admin/quotes/${quote.id}`} variant="secondary">View Details</Button>
          <Button variant="danger" onClick={() => onDelete(quote.id)}>Delete</Button>
        </div>
      </div>
      <div className="mt-5 grid gap-4 text-sm md:grid-cols-2 lg:grid-cols-3">
        <Info label="Event Category" value={quote.eventCategory} />
        <Info label="Wedding Date" value={quote.weddingDate || "Not provided"} />
        <Info label="Location" value={quote.location || "Not provided"} />
        <Info label="Number of Events" value={quote.numberOfEvents} />
        <Info label="Service Type" value={quote.serviceType} />
        <Info label="Photography Needed" value={yesNo(quote.photographyNeeded)} />
        <Info label="Photo Delivery Estimate" value={quote.photoDeliverableEstimate} />
        <Info label="Video Style" value={quote.finalVideoStyle || quote.selectedVideoPackage || "Not selected"} />
        <Info label="Deliverables" value={quote.selectedDeliverables || "None selected"} />
        <Info label="Add-ons" value={addOns || "None selected"} />
        <Info label="Created Date" value={quote.createdAt ? new Date(quote.createdAt).toLocaleString() : "-"} />
      </div>
    </article>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-champagne/80">{label}</p>
      <p className="mt-1 text-ivory/78">{value || "-"}</p>
    </div>
  );
}

export default AdminQuoteCard;
