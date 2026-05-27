import React from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { createQuote } from "../api/quoteApi.js";
import Button from "./Button.jsx";

const initialBooleanFields = {
  needsDrone: false,
  needsTeaserReel: false,
  needsFullCeremonyVideo: false,
  needsInterviews: false,
  needsConceptualScenes: false
};

function QuoteForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedPackage = searchParams.get("package") || "Wedding Video - Cinematic";
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phone: "",
    selectedPackageName: selectedPackage,
    eventType: "Wedding",
    weddingDate: "",
    location: "",
    numberOfEvents: 1,
    coverageHours: 8,
    serviceType: "Video",
    budgetRange: "",
    specialNotes: "",
    ...initialBooleanFields
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        numberOfEvents: Number(formData.numberOfEvents),
        coverageHours: Number(formData.coverageHours)
      };
      const response = await createQuote(payload);
      navigate("/thank-you", { state: { quote: response.data } });
    } catch (apiError) {
      setError("Please check the form and make sure the backend is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cinematic-panel rounded-3xl p-6 md:p-8">
      {error && <div className="mb-6 rounded-2xl border border-red-300/30 bg-red-500/10 p-4 text-red-100">{error}</div>}
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-ivory/75">Client Name</span>
          <input className="field" name="clientName" value={formData.clientName} onChange={handleChange} required />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-ivory/75">Email</span>
          <input className="field" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-ivory/75">Phone</span>
          <input className="field" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-ivory/75">Selected Package</span>
          <select className="field" name="selectedPackageName" value={formData.selectedPackageName} onChange={handleChange}>
            <option>Wedding Video - Cinematic</option>
            <option>Documentary Wedding Film</option>
            <option>Wedding Film + Conceptual</option>
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm text-ivory/75">Event Type</span>
          <input className="field" name="eventType" value={formData.eventType} onChange={handleChange} />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-ivory/75">Wedding Date</span>
          <input className="field" type="date" name="weddingDate" value={formData.weddingDate} onChange={handleChange} />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-ivory/75">Location</span>
          <input className="field" name="location" value={formData.location} onChange={handleChange} />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-ivory/75">Number of Events</span>
          <input className="field" type="number" min="1" name="numberOfEvents" value={formData.numberOfEvents} onChange={handleChange} />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-ivory/75">Required Coverage Hours</span>
          <input className="field" type="number" min="1" name="coverageHours" value={formData.coverageHours} onChange={handleChange} />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-ivory/75">Service Type</span>
          <select className="field" name="serviceType" value={formData.serviceType} onChange={handleChange}>
            <option>Photo</option>
            <option>Video</option>
            <option>Both</option>
          </select>
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm text-ivory/75">Budget Range</span>
          <input className="field" name="budgetRange" placeholder="$2,000 - $5,000" value={formData.budgetRange} onChange={handleChange} />
        </label>
      </div>

      <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {[
          ["needsDrone", "Need Drone"],
          ["needsTeaserReel", "Need Teaser/Reel"],
          ["needsFullCeremonyVideo", "Need Full Ceremony cinematic Video"],
          ["needsInterviews", "Need Interviews"],
          ["needsConceptualScenes", "Need Conceptual Scenes"]
        ].map(([name, label]) => (
          <label key={name} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-ivory/80">
            <input type="checkbox" name={name} checked={formData[name]} onChange={handleChange} className="h-4 w-4 accent-champagne" />
            {label}
          </label>
        ))}
      </div>

      <label className="mt-6 block space-y-2">
        <span className="text-sm text-ivory/75">Special Notes / Expectations</span>
        <textarea className="field min-h-32" name="specialNotes" value={formData.specialNotes} onChange={handleChange} />
      </label>

      <div className="mt-8">
        <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Quote Request"}
        </Button>
      </div>
    </form>
  );
}

export default QuoteForm;
