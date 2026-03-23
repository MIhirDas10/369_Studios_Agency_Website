import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import div from "../components/div";
// import div from "../components/div";
// import div from "../components/div";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Home.css";
// import heroBg from "/images/bg.jpg";

// import project1 from "/images/jams.png";
// import project2 from "../images/project2.jpg";
// import project3 from "../images/project3.jpg";

gsap.registerPlugin(ScrollTrigger);

const featuredWork = [
  {
    id: "01",
    title: "Jams Italia",
    category: "Architecture / Branding",
    year: "2026",
    color: "#1a1a2e",
    accent: "#c8ff00",
    // image: "/images/jams.png",
  },
  {
    id: "02",
    title: "Line Animation",
    category: "Motion / Story-telling",
    year: "2026",
    color: "#0d0d0d",
    accent: "#ff3c00",
    // image: "/images/pro2.png",
  },
  {
    id: "03",
    title: "Motion Graphics",
    category: "Balance / Jovial",
    year: "2026",
    color: "#111108",
    accent: "#f5e642",
    // image: "/images/pro3.png",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const heroNumRef = useRef(null);
  const heroH1Ref = useRef(null);
  const heroSubRef = useRef(null);
  const heroBtnRef = useRef(null);
  const heroLineRef = useRef(null);

  const workRef = useScrollReveal({ selector: ".work-card", stagger: 0.12 });
  const statsRef = useScrollReveal({ selector: ".stat-item", stagger: 0.1 });
  const aboutRef = useScrollReveal({ selector: ".about__para", stagger: 0.15 });
  const svcRef = useScrollReveal({ selector: ".service-row", stagger: 0.07 });

  // /* ── Hero entrance ── */
  // useEffect(() => {
  //   const tl = gsap.timeline({ delay: 2.4 });

  //   tl.fromTo(
  //     heroNumRef.current,
  //     { opacity: 0, x: -20 },
  //     { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
  //   );

  //   tl.fromTo(
  //     heroH1Ref.current.querySelectorAll(".hero__word"),
  //     { yPercent: 110, opacity: 0 },
  //     {
  //       yPercent: 0,
  //       opacity: 1,
  //       duration: 1,
  //       stagger: 0.08,
  //       ease: "power3.out",
  //     },
  //     "-=0.3",
  //   );

  //   tl.fromTo(
  //     heroSubRef.current,
  //     { opacity: 0, y: 20 },
  //     { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
  //     "-=0.5",
  //   );

  //   tl.fromTo(
  //     heroBtnRef.current,
  //     { opacity: 0, y: 20 },
  //     { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
  //     "-=0.4",
  //   );

  //   tl.fromTo(
  //     heroLineRef.current,
  //     { scaleX: 0 },
  //     {
  //       scaleX: 1,
  //       duration: 1.2,
  //       ease: "power3.inOut",
  //       transformOrigin: "left",
  //     },
  //     "-=0.8",
  //   );

  //   // Parallax on scroll
  //   gsap.to(".hero__bg-number", {
  //     yPercent: -40,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: heroRef.current,
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });

  //   return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  // }, []);

  /* ── Work card 3D tilt ── */
  const onCardMove = (e, card) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(card, {
      rotateY: x * 8,
      rotateX: -y * 5,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 800,
    });
  };
  const onCardLeave = (card) => {
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <main className="home">
      {/* ─── HERO ─── */}
      <section
        className="hero"
        ref={heroRef}
        // style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero__bg-number" aria-hidden>
          369
        </div>

        <div className="container hero__content">
          <div className="hero__eyebrow" ref={heroNumRef}>
            <span className="tag">Studio — Est. 2026</span>
            <span className="hero__location">Work . Inspire</span>
          </div>

          <h1 className="hero__h1" ref={heroH1Ref}>
            {["Make", "It", "Matter."].map((w, i) => (
              <span key={i} className="hero__word-wrap">
                <span className="hero__word">{w}</span>
              </span>
            ))}
          </h1>

          <div className="hero__sub-row">
            <p className="hero__sub" ref={heroSubRef}>
              A creative studio shaping brands, experiences,
              <br />
              and digital products for bold companies worldwide.
            </p>
            <div
              ref={heroBtnRef}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <div>
                <Link to="/work" className="btn btn--accent">
                  View work
                </Link>
              </div>
              <div>
                <Link to="/contact" className="btn btn--outline">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>

          <div className="hero__line" ref={heroLineRef} />
        </div>

        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div
        text="Branding · Web · Motion · Editorial · Identity · Strategy"
        speed={35}
      />

      {/* ─── FEATURED WORK ─── */}
      <section className="section" ref={workRef}>
        <div className="container">
          <div className="section-header">
            <span className="tag">Selected work</span>
            <Link to="/work" className="section-header__link">
              View all →
            </Link>
          </div>
          <div className="work-grid">
            {featuredWork.map((item) => (
              <div
                key={item.id}
                className="work-card"
                style={{
                  "--card-bg": item.color,
                  "--card-accent": item.accent,
                }}
                onMouseMove={(e) => onCardMove(e, e.currentTarget)}
                onMouseLeave={(e) => onCardLeave(e.currentTarget)}
              >
                <div
                  className="work-card__visual"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="work-card__image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="work-card__overlay">
                    <span className="work-card__cta">View project →</span>
                  </div>
                </div>
                <div className="work-card__info">
                  <div className="work-card__meta">
                    <span>{item.category}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="work-card__title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="section stats-section" ref={statsRef}>
        <div className="container stats-grid">
          {[
            { num: "1+", label: "Years of craft" },
            { num: "30+", label: "Projects shipped" },
            { num: "5", label: "Countries reached" },
            { num: "All", label: "Client satisfaction" },
          ].map(({ num, label }) => (
            <div className="stat-item" key={label}>
              <div className="stat-item__num">{num}</div>
              <p className="stat-item__label">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BENTO GRID ─── */}
      <section className="bento-section">
        <div className="container">
          <span className="tag">At a glance</span>
          <h2>
            Everything we are,
            <br />
            in one view.
          </h2>
          <div />
        </div>
      </section>

      {/* ─── MARQUEE INVERTED ─── */}
      <div
        text="Local · International · Full-Service · Startup-Friendly"
        speed={28}
        inverted
      />

      {/* ─── ABOUT STRIP ─── */}
      <section className="section" ref={aboutRef}>
        <div className="container about-strip__inner">
          <div className="about-strip__left">
            <span className="tag">About 369</span>
            <div className="about-strip__index">
              <span>A</span>
              <span>B</span>
              <span>T</span>
            </div>
          </div>
          <div className="about-strip__right">
            <p className="about__para">
              369 Studio is a multidisciplinary creative studio founded on the
              belief that design is the most powerful tool for building trust
              between brands and people.
            </p>
            <p className="about__para">
              We partner with startups and global companies across branding,
              digital design, and motion — delivering work that is equal parts
              beautiful and effective.
            </p>
            <p className="about__para">
              Our name isn't random. 3-6-9 is a pattern that appears in nature,
              frequency, and mathematics — a reminder that great design follows
              deep logic.
            </p>
            <div>
              <Link
                to="/about"
                className="btn btn--outline"
                style={{ marginTop: "1rem" }}
              >
                Our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="section" ref={svcRef}>
        <div className="container">
          <span className="tag">What we do</span>
          <div className="services-list">
            {[
              "Brand Identity",
              "Web Design & Dev",
              "Motion & Animation",
              "Editorial Design",
              "Creative Strategy",
              "UI/UX Design",
            ].map((s, i) => (
              <div className="service-row" key={s}>
                <span className="service-row__num">0{i + 1}</span>
                <span className="service-row__name">{s}</span>
                <span className="service-row__arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
