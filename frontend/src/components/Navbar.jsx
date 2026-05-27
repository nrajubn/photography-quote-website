import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm transition hover:text-champagne ${isActive ? "text-champagne" : "text-ivory/75"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-charcoal/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="font-display text-2xl tracking-wide text-ivory">
          Myhobby Wedding Films
        </Link>
        <div className="flex flex-wrap items-center gap-4">
          <NavLink to="/packages" className={linkClass}>Packages</NavLink>
          <NavLink to="/compare" className={linkClass}>Compare</NavLink>
          <NavLink to="/quote" className={linkClass}>Quote</NavLink>
          <NavLink to="/admin/quotes" className={linkClass}>Admin</NavLink>
          <NavLink to="/login" className="rounded-full border border-champagne/40 px-4 py-2 text-sm text-champagne transition hover:bg-champagne/10">
            Client Entry
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
