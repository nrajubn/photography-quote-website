import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-5 py-16">
      <div className="cinematic-panel w-full rounded-3xl p-8 text-center shadow-glow">
        <p className="mb-3 text-sm uppercase tracking-[0.28em] text-champagne">Client entry</p>
        <h1 className="font-display text-4xl text-white md:text-5xl">Start your quote request</h1>
        <p className="mx-auto mt-4 max-w-xl text-ivory/70">
          Google sign-in will be added later. For Version 1, continue as guest and test the full quote flow locally.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-ivory/85 opacity-80">
            Continue with Google
          </button>
          <Button onClick={() => navigate("/packages")}>Continue as Guest</Button>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
