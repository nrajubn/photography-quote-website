import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-b border-white/10 bg-charcoal/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-center px-5 py-4 md:justify-start">
        <Link to="/" className="font-display text-2xl tracking-wide text-ivory">
          MyHobbyGraphy
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
