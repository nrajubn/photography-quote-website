import React from "react";
import { useEffect, useState } from "react";
import { deleteQuote, getQuotes } from "../api/quoteApi.js";
import AdminQuoteCard from "../components/AdminQuoteCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

function AdminQuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState("");

  const loadQuotes = () => {
    getQuotes()
      .then((response) => setQuotes(response.data))
      .catch(() => setError("Could not load quote requests. Please start the backend."));
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  const handleDelete = async (id) => {
    await deleteQuote(id);
    setQuotes((current) => current.filter((quote) => quote.id !== id));
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SectionTitle
        eyebrow="Admin"
        title="Submitted quote requests"
        text="Version 1 admin view for local testing. Authentication will be added later."
      />
      {error && <p className="rounded-2xl border border-red-300/30 bg-red-500/10 p-4 text-center text-red-100">{error}</p>}
      {!error && quotes.length === 0 && (
        <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center text-ivory/70">
          No quote requests yet.
        </p>
      )}
      <div className="grid gap-5">
        {quotes.map((quote) => (
          <AdminQuoteCard key={quote.id} quote={quote} onDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
}

export default AdminQuotesPage;
