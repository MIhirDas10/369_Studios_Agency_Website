import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Preloader.css";

export default function Preloader() {
  const wrapRef = useRef(null);
  const numRef = useRef(null);
  const barRef = useRef(null);
  const logoRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(numRef.current, {
      innerText: 100,
      duration: 1.8,
      ease: "power2.inOut",
      snap: { innerText: 1 },
      onUpdate() {
        if (numRef.current)
          numRef.current.textContent =
            Math.round(gsap.getProperty(numRef.current, "innerText")) + "%";
      },
    });
    tl.to(
      barRef.current,
      { scaleX: 1, duration: 1.8, ease: "power2.inOut" },
      "<",
    );
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=1.4",
    );
    tl.to(
      panelsRef.current,
      { yPercent: -100, duration: 0.9, stagger: 0.06, ease: "power3.inOut" },
      "+=0.2",
    );
    tl.to(wrapRef.current, { display: "none", duration: 0 });
  }, []);

  return (
    <div className="preloader" ref={wrapRef}>
      <div className="preloader__panels">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="preloader__panel"
            ref={(el) => (panelsRef.current[i] = el)}
          />
        ))}
      </div>
      <div className="preloader__inner">
        <div className="preloader__logo" ref={logoRef}>
          369
        </div>
        <div className="preloader__bar-wrap">
          <div className="preloader__bar" ref={barRef} />
        </div>
        <div className="preloader__num" ref={numRef}>
          0%
        </div>
      </div>
    </div>
  );
}
