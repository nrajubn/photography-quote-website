import React from "react";
import { useEffect, useState } from "react";
import { getPackageComparison } from "../api/packageApi.js";
import CompareTable from "../components/CompareTable.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

function ComparePage() {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getPackageComparison()
      .then((response) => setPackages(response.data))
      .catch(() => setError("Could not load comparison data. Please start the backend."));
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SectionTitle
        eyebrow="Compare"
        title="Package comparison"
        text="See how each option changes the coverage style, storytelling depth, and creative planning."
      />
      {error ? (
        <p className="rounded-2xl border border-red-300/30 bg-red-500/10 p-4 text-center text-red-100">{error}</p>
      ) : (
        <CompareTable packages={packages} />
      )}
    </section>
  );
}

export default ComparePage;
