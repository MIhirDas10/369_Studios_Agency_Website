import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useScrollReveal } from "../hooks/useScrollReveal";
// import div from "../components/div";
import "./Services.css";

const services = [
  {
    num: "01",
    title: "Brand Identity",
    desc: "Strategy-first brand creation. Logos, visual systems, typography, color, motion guidelines, and the full toolkit for a brand that stands apart.",
    deliverables: [
      "Logo System",
      "Color Palette",
      "Typography",
      "Brand Guidelines",
      "Collateral",
    ],
  },
  {
    num: "02",
    title: "Web Design & Development",
    desc: "Beautiful, performant websites built with precision. From marketing sites and portfolios to complex web apps and e-commerce.",
    deliverables: [
      "UX Strategy",
      "UI Design",
      "Webflow / React Dev",
      "CMS Integration",
      "Performance Audit",
    ],
  },
  {
    num: "03",
    title: "Motion & Animation",
    desc: "Everything moves. We design motion graphics, explainer videos, UI microinteractions, and cinematic brand reels.",
    deliverables: [
      "Brand Reels",
      "UI Animations",
      "Explainer Videos",
      "Social Motion",
      "GSAP Interactions",
    ],
  },
  {
    num: "04",
    title: "Editorial Design",
    desc: "Print and digital editorial systems. Magazines, annual reports, lookbooks, and publications that readers actually want to hold.",
    deliverables: [
      "Magazine Layout",
      "Annual Reports",
      "Lookbooks",
      "Pitch Decks",
      "Infographics",
    ],
  },
  {
    num: "05",
    title: "Creative Strategy",
    desc: "Before design, we think. We offer brand audits, positioning strategy, audience research, and creative direction for campaigns.",
    deliverables: [
      "Brand Audit",
      "Positioning",
      "Campaign Concepts",
      "Naming",
      "Art Direction",
    ],
  },
  {
    num: "06",
    title: "UI/UX Design",
    desc: "Products people love using. Wireframes, prototypes, user testing, and production-ready UI for web and mobile apps.",
    deliverables: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Handoff",
    ],
  },
];

export default function Services() {
  return (
    <main className="services-page">
      <div className="container">
        <div className="services-page__header">
          <span className="tag">Capabilities</span>
          <h1 className="services-page__h1">
            {["What", "we do."].map((w, i) => (
              <span key={i} className="srv-word-wrap">
                <span className="srv-word">{w}</span>
              </span>
            ))}
          </h1>
          <p className="services-page__intro">
            Full-spectrum creative services for companies that want to lead, not
            follow.
          </p>
        </div>
        <div className="serv-list">
          {services.map(({ num, title, desc, deliverables }) => (
            <div className="serv-item" key={num}>
              <div className="serv-item__left">
                <span className="serv-item__num">{num}</span>
              </div>
              <div className="serv-item__center">
                <h2 className="serv-item__title">{title}</h2>
                <p className="serv-item__desc">{desc}</p>
              </div>
              <div className="serv-item__right">
                <ul className="serv-item__deliverables">
                  {deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="services-process">
          <span className="tag">Our process</span>
          <div className="process-grid">
            {/* {process.map(({ step, title, desc }) => (
              <div className="process-step" key={step}>
                <div className="process-step__num">{step}</div>
                <h3 className="process-step__title">{title}</h3>
                <p className="process-step__desc">{desc}</p>
              </div>
            ))} */}
          </div>
        </div>
        <div className="services-cta">
          <h2 className="services-cta__heading">
            Ready to build
            <br />
            something great?
          </h2>
          <div>
            <Link
              to="/contact"
              className="btn btn--accent"
              style={{ fontSize: "0.85rem", padding: "1.2rem 2.8rem" }}
            >
              Let's talk →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
