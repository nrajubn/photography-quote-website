import React from "react";
import { useEffect, useState } from "react";
import { getPackages } from "../api/packageApi.js";
import PackageCard from "../components/PackageCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

function PackagesPage() {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getPackages()
      .then((response) => setPackages(response.data))
      .catch(() => setError("Could not load packages. Please start the Spring Boot backend."))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SectionTitle
        eyebrow="Packages"
        title="Choose your wedding film experience."
        text="Select a package now, or compare every option side by side before submitting a quote request."
      />
      {isLoading && <p className="text-center text-ivory/70">Loading packages...</p>}
      {error && <p className="rounded-2xl border border-red-300/30 bg-red-500/10 p-4 text-center text-red-100">{error}</p>}
      <div className="grid gap-6 lg:grid-cols-3">
        {packages.map((item) => (
          <PackageCard key={item.id} packageOption={item} />
        ))}
      </div>
      <section className="mt-10 rounded-3xl border border-champagne/25 bg-white/[0.04] p-6 md:p-8">
        <p className="text-sm uppercase tracking-[0.28em] text-champagne">Standard delivery</p>
        <h2 className="mt-3 font-display text-3xl text-white">
          Standard Delivery Included With Every Video Package
        </h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            "Professional editing",
            "Color correction and final video finishing",
            "Online delivery through downloadable link",
            "Private YouTube upload available on request"
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl bg-black/20 p-4 text-sm text-ivory/78">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default PackagesPage;
