import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Work.css";

const projects = [
  {
    id: "01",
    title: "Helix Brand Identity",
    category: "Branding",
    year: "2025",
    size: "large",
    client: "Helix Labs",
    location: "New York, USA",
  },
  {
    id: "02",
    title: "Volta Web Experience",
    category: "Web / UX",
    year: "2025",
    size: "small",
    client: "Volta Energy",
    location: "Berlin, DE",
  },
  {
    id: "03",
    title: "Noma Editorial System",
    category: "Editorial",
    year: "2024",
    size: "small",
    client: "Noma Magazine",
    location: "Copenhagen, DK",
  },
  {
    id: "04",
    title: "Arc Motion Reel",
    category: "Motion",
    year: "2024",
    size: "large",
    client: "Arc Studios",
    location: "London, UK",
  },
  {
    id: "05",
    title: "Prism Visual Identity",
    category: "Branding",
    year: "2024",
    size: "small",
    client: "Prism Ventures",
    location: "Dhaka, BD",
  },
  {
    id: "06",
    title: "Fold Digital Platform",
    category: "Web / UI",
    year: "2023",
    size: "large",
    client: "Fold Finance",
    location: "Singapore, SG",
  },
];
export default function Work() {
  return (
    <main className="work-page">
      <div className="container">
        <div className="work-page__header">
          <span className="tag">Portfolio</span>
          <h1 className="work-page__h1">
            {["Selected", "Projects"].map((w, i) => (
              <span key={i} className="work-page__word-wrap">
                <span className="work-page__word">{w}</span>
              </span>
            ))}
          </h1>
          <div className="work-page__meta">
            <p>
              We create work that lasts — across industries, borders, and
              mediums.
            </p>
            <span className="tag">{projects.length} Projects</span>
          </div>
        </div>
        <div className="work-page__filters">
          {["All", "Branding", "Web / UX", "Motion", "Editorial"].map((f) => (
            <button
              key={f}
              className={`filter-btn ${f === "All" ? "filter-btn--active" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="proj-grid">
          {projects.map((p) => (
            <div key={p.id} className={`proj-card proj-card--${p.size}`}>
              <div className="proj-card__visual">
                <div className="proj-card__num">{p.id}</div>
                <div className="proj-card__hover-info">
                  <span>View project →</span>
                </div>
              </div>
              <div className="proj-card__info">
                <div className="proj-card__row">
                  <span className="proj-card__cat">{p.category}</span>
                  <span className="proj-card__loc">{p.location}</span>
                  <span className="proj-card__year">{p.year}</span>
                </div>
                <h2 className="proj-card__title">{p.title}</h2>
                <p className="proj-card__client">Client: {p.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
