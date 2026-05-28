import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createQuote } from "../api/quoteApi.js";
import Button from "../components/Button.jsx";

const eventOptions = ["Haldi", "Sangeet", "Mehendi", "Pellikoduku / Pelli Kuturu", "Wedding", "Reception", "Other"];
const coverageOptions = ["Photo only", "Video only", "Photo + Video"];
const liveStreamingOptions = ["No", "Only Wedding", "Each Event", "Other"];
const deliverableOptions = [
  "One full cinematic highlight video",
  "One combined teaser for all events under 2 minutes",
  "Teaser / Reel for each event",
  "Edited photos",
  "Online delivery through downloadable link and private YouTube upload"
];
const videoStyleOptions = ["Documentary Wedding Film", "Cinematic Video"];

const initialAnswers = {
  clientName: "",
  email: "",
  phone: "",
  weddingDate: "",
  location: "",
  numberOfEvents: "",
  guestCount: "",
  indoorOutdoorType: "",
  selectedIndianEvents: [],
  customEventName: "",
  serviceType: "",
  liveStreamingPreference: "",
  selectedDeliverables: [],
  finalVideoStyle: ""
};

function WeddingBuilderPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [errors, setErrors] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const steps = useMemo(() => [
    { key: "clientName", question: "What is your name?", type: "text", required: true, placeholder: "Client Name" },
    { key: "email", question: "What is your email?", type: "email", required: true, placeholder: "Email" },
    { key: "phone", question: "What is your phone number?", type: "text", required: true, placeholder: "Phone" },
    { key: "weddingDate", question: "What is your wedding date?", type: "date", required: true },
    { key: "location", question: "Where is the wedding located?", type: "text", required: true, placeholder: "City, venue, or address" },
    { key: "numberOfEvents", question: "How many events do you need covered?", type: "number", required: true, placeholder: "Number of Events" },
    { key: "guestCount", question: "Approximate guest count?", type: "number", required: false, placeholder: "Optional" },
    { key: "indoorOutdoorType", question: "Total Coverage Type", type: "choice", required: true, options: ["Indoor", "Outdoor", "Both"] },
    { key: "selectedIndianEvents", question: "Which wedding events should we cover?", type: "multi", required: true, options: eventOptions },
    { key: "serviceType", question: "What coverage do you need?", type: "choice", required: true, options: coverageOptions },
    { key: "liveStreamingPreference", question: "Do you need live streaming?", type: "choice", required: true, options: liveStreamingOptions },
    { key: "selectedDeliverables", question: "Select your deliverables", type: "multi", required: true, options: deliverableOptions },
    { key: "finalVideoStyle", question: "What style do you want for the final video?", type: "choice", required: true, options: videoStyleOptions },
    { key: "summary", question: "Review your quote request", type: "summary", required: false }
  ], []);

  const currentStep = steps[step];
  const progress = Math.round(((step + 1) / steps.length) * 100);

  const setAnswer = (key, value) => {
    setAnswers((current) => ({ ...current, [key]: value }));
    setErrors("");
  };

  const toggleMulti = (key, value) => {
    const currentValues = answers[key];
    setAnswer(key, currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value]);
  };

  const isCurrentStepValid = () => {
    if (!currentStep.required) return true;
    const value = answers[currentStep.key];
    if (Array.isArray(value)) return value.length > 0;
    return String(value || "").trim().length > 0;
  };

  const goNext = () => {
    if (!isCurrentStepValid()) {
      setErrors("Please answer this question before continuing.");
      return;
    }
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const goBack = () => {
    setErrors("");
    setStep((current) => Math.max(current - 1, 0));
  };

  const submitQuote = async () => {
    setSubmitting(true);
    setErrors("");
    try {
      const includesPhoto = answers.serviceType === "Photo only" || answers.serviceType === "Photo + Video";
      const payload = {
        clientName: answers.clientName,
        email: answers.email,
        phone: answers.phone,
        eventCategory: "Wedding",
        weddingDate: answers.weddingDate,
        location: answers.location,
        numberOfEvents: Number(answers.numberOfEvents),
        selectedIndianEvents: answers.selectedIndianEvents.join(", "),
        customEventName: answers.customEventName,
        coverageHours: 1,
        indoorOutdoorType: answers.indoorOutdoorType,
        guestCount: answers.guestCount ? Number(answers.guestCount) : null,
        serviceType: answers.serviceType,
        photographyNeeded: includesPhoto,
        photoDeliverableEstimate: includesPhoto ? "Edited photos selected by client" : "Not applicable",
        selectedPhotographyOptions: includesPhoto ? "Edited photos" : "",
        selectedVideoPackage: answers.finalVideoStyle,
        liveStreamingPreference: answers.liveStreamingPreference,
        selectedDeliverables: answers.selectedDeliverables.join(", "),
        finalVideoStyle: answers.finalVideoStyle,
        selectedVideoAddOns: answers.liveStreamingPreference !== "No" ? `Live streaming: ${answers.liveStreamingPreference}` : "",
        selectedGeneralAddOns: answers.selectedDeliverables.join(", "),
        specialNotes: answers.finalVideoStyle === "Documentary Wedding Film"
          ? "Interviews will be conducted as part of the documentary-style wedding film."
          : "No interviews will be conducted. The film will focus on cinematic event coverage."
      };
      const response = await createQuote(payload);
      navigate("/thank-you", { state: { quote: response.data } });
    } catch (error) {
      setErrors("Quote request could not be submitted. Please make sure the backend is running.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[86vh] overflow-hidden px-5 py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(213,177,109,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(86,24,38,0.16),transparent_28%),linear-gradient(135deg,#050505_0%,#111812_52%,#241913_100%)]" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-4xl flex-col justify-center">
        <div className="mb-8">
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-champagne transition-all" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-3 text-center text-sm text-ivory/60">Step {step + 1} of {steps.length}</p>
        </div>

        <div className="cinematic-panel rounded-3xl p-6 shadow-glow md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-champagne">Wedding quote</p>
          <h1 className="font-display text-4xl text-white md:text-5xl">{currentStep.question}</h1>
          <div className="mt-8">
            <StepInput step={currentStep} answers={answers} setAnswer={setAnswer} toggleMulti={toggleMulti} />
          </div>
          {answers.selectedIndianEvents.includes("Other") && currentStep.key === "selectedIndianEvents" && (
            <input
              className="field mt-5"
              value={answers.customEventName}
              onChange={(event) => setAnswer("customEventName", event.target.value)}
              placeholder="Please mention event name"
            />
          )}
          {currentStep.key === "finalVideoStyle" && answers.finalVideoStyle && (
            <div className="mt-6 rounded-2xl border border-champagne/25 bg-champagne/10 p-4 text-ivory/80">
              {answers.finalVideoStyle === "Documentary Wedding Film"
                ? "Interviews will be conducted as part of the documentary-style wedding film."
                : "No interviews will be conducted. The film will focus on cinematic event coverage."}
            </div>
          )}
          {errors && <p className="mt-5 rounded-2xl border border-red-300/30 bg-red-500/10 p-4 text-red-100">{errors}</p>}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <Button variant="secondary" onClick={step === 0 ? () => navigate("/client") : goBack}>
              Back
            </Button>
            {currentStep.type === "summary" ? (
              <Button onClick={submitQuote} disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Quote"}
              </Button>
            ) : (
              <Button onClick={goNext}>Next</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepInput({ step, answers, setAnswer, toggleMulti }) {
  if (step.type === "summary") {
    return <Summary answers={answers} />;
  }
  if (step.type === "choice") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {step.options.map((option) => (
          <ChoiceButton key={option} active={answers[step.key] === option} onClick={() => setAnswer(step.key, option)}>
            {option}
          </ChoiceButton>
        ))}
      </div>
    );
  }
  if (step.type === "multi") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {step.options.map((option) => (
          <ChoiceButton key={option} active={answers[step.key].includes(option)} onClick={() => toggleMulti(step.key, option)}>
            {option}
          </ChoiceButton>
        ))}
      </div>
    );
  }
  return (
    <input
      className="field text-lg"
      type={step.type}
      value={answers[step.key]}
      onChange={(event) => setAnswer(step.key, event.target.value)}
      placeholder={step.placeholder}
      min={step.type === "number" ? "1" : undefined}
      autoFocus
    />
  );
}

function ChoiceButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-5 text-left text-base transition ${active ? "border-champagne bg-champagne/15 text-white" : "border-white/10 bg-black/20 text-ivory/75 hover:border-champagne/50 hover:bg-white/[0.06]"}`}
    >
      {children}
    </button>
  );
}

function Summary({ answers }) {
  const rows = [
    ["Client Name", answers.clientName],
    ["Email", answers.email],
    ["Phone", answers.phone],
    ["Wedding Date", answers.weddingDate],
    ["Location", answers.location],
    ["Number of Events", answers.numberOfEvents],
    ["Approximate Guest Count", answers.guestCount || "Not provided"],
    ["Total Coverage Type", answers.indoorOutdoorType],
    ["Selected Events", answers.selectedIndianEvents.join(", ")],
    ["Other Event", answers.customEventName || "Not provided"],
    ["Coverage Needed", answers.serviceType],
    ["Live Streaming", answers.liveStreamingPreference],
    ["Deliverables", answers.selectedDeliverables.join(", ")],
    ["Final Video Style", answers.finalVideoStyle]
  ];

  return (
    <div className="grid gap-3 md:grid-cols-2">
      {rows.map(([label, value]) => (
        <div key={label} className="rounded-2xl bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-champagne/85">{label}</p>
          <p className="mt-2 leading-6 text-ivory/80">{value || "-"}</p>
        </div>
      ))}
    </div>
  );
}

export default WeddingBuilderPage;
