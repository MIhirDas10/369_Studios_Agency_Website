import React from "react";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import "./Navbar.css";

const links = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // gsap animations

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      >
        <div className="container navbar__inner">
          <NavLink
            to="/"
            className="navbar_logo_new"
            aria-label="369 Studio home"
          >
            <img src="/images/369logo.png" alt="" />
          </NavLink>
          <div className="navbar__links">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
          <button
            className={`navbar__burger ${open ? "navbar__burger--open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className="fullmenu"
        ref={menuRef}
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        <div className="fullmenu__inner">
          <div className="fullmenu__links">
            {[{ to: "/", label: "Home" }, ...links].map(({ to, label }, i) => (
              <NavLink key={to} to={to} className="menu-link">
                <span className="menu-link__num">0{i + 1}</span>
                <span className="menu-link__text">{label}</span>
              </NavLink>
            ))}
          </div>
          <div className="fullmenu__footer">
            <p>hello@369studio.com</p>
            <p>© 2026 369 Studio</p>
          </div>
        </div>
      </div>
    </>
  );
}
