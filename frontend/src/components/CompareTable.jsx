import React from "react";

const featureRows = [
  ["Cinematic Video 5+ Minutes", "includesCinematicVideoFiveMinutes"],
  ["Combined Events Film", "includesCombinedEventsFilm"],
  ["Teaser Style", "teaserStyle"],
  ["Couple Interviews", "includesCoupleInterviews"],
  ["Family Interviews", "includesFamilyInterviews"],
  ["Documentary Storytelling", "includesDocumentaryStorytelling"],
  ["Concept Planning", "includesConceptPlanning"],
  ["Pre-Wedding Conceptual Shoot Video", "includesPreWeddingConceptualShootVideo"],
  ["Creative Storytelling", "includesCreativeStorytelling"],
  ["Live Event Streaming", "liveEventStreaming"],
  ["Best For", "bestFor"]
];

function formatValue(value) {
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }
  return value || "-";
}

function CompareTable({ packages }) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-champagne/20 bg-white/[0.04]">
      <table className="min-w-[900px] w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-champagne/20 bg-black/20">
            <th className="p-4 text-sm uppercase tracking-[0.2em] text-champagne">Feature</th>
            {packages.map((item) => (
              <th key={item.id} className="p-4 font-display text-xl text-white">{item.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureRows.map(([label, key]) => (
            <tr key={key} className="border-b border-white/10 last:border-b-0">
              <td className="p-4 font-semibold text-ivory">{label}</td>
              {packages.map((item) => (
                <td key={item.id} className="p-4 text-sm leading-6 text-ivory/72">
                  {formatValue(item[key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompareTable;
