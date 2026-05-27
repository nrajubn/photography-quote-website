import React from "react";
import { Link } from "react-router-dom";

const variants = {
  primary: "bg-champagne text-charcoal hover:bg-[#e1c181]",
  secondary: "border border-champagne/50 text-ivory hover:bg-champagne/10",
  danger: "border border-red-300/40 text-red-100 hover:bg-red-500/15"
};

function Button({ children, to, type = "button", variant = "primary", className = "", onClick, disabled = false }) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

export default Button;
