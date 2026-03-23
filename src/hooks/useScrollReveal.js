import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollReveal — simple fade+slide reveal on scroll.
 * Returns a ref to attach to the element (or a parent container).
 * @param {object} options — gsap fromTo vars + optional selector
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const {
    selector,
    from = { y: 50, opacity: 0 },
    to = { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
    stagger = 0,
    start = "top 85%",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = selector ? el.querySelectorAll(selector) : el;

    gsap.fromTo(targets, from, {
      ...to,
      stagger,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return ref;
}
