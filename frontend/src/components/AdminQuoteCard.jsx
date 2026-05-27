import React from "react";
import Button from "./Button.jsx";

function yesNo(value) {
  return value ? "Yes" : "No";
}

function AdminQuoteCard({ quote, onDelete }) {
  return (
    <article className="cinematic-panel rounded-3xl p-6">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="font-display text-3xl text-white">{quote.clientName}</h3>
          <p className="mt-2 text-sm text-ivory/65">{quote.email} - {quote.phone || "No phone"}</p>
        </div>
        <Button variant="danger" onClick={() => onDelete(quote.id)}>Delete</Button>
      </div>
      <div className="mt-5 grid gap-4 text-sm md:grid-cols-2 lg:grid-cols-3">
        <Info label="Selected Package" value={quote.selectedPackageName} />
        <Info label="Wedding Date" value={quote.weddingDate || "Not provided"} />
        <Info label="Location" value={quote.location || "Not provided"} />
        <Info label="Coverage Hours" value={quote.coverageHours} />
        <Info label="Service Type" value={quote.serviceType} />
        <Info label="Budget Range" value={quote.budgetRange || "Not provided"} />
        <Info label="Drone" value={yesNo(quote.needsDrone)} />
        <Info label="Reel" value={yesNo(quote.needsTeaserReel)} />
        <Info label="Interviews" value={yesNo(quote.needsInterviews)} />
        <Info label="Conceptual" value={yesNo(quote.needsConceptualScenes)} />
        <Info label="Full Ceremony" value={yesNo(quote.needsFullCeremonyVideo)} />
        <Info label="Created Date" value={quote.createdAt ? new Date(quote.createdAt).toLocaleString() : "-"} />
      </div>
      {quote.specialNotes && (
        <div className="mt-5 rounded-2xl bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-champagne">Special Notes</p>
          <p className="mt-2 leading-7 text-ivory/75">{quote.specialNotes}</p>
        </div>
      )}
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
