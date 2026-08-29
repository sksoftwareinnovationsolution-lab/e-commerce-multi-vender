import { useEffect, useState } from "react";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

const motionQuery =
  typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;

function prefersReducedMotion() {
  return motionQuery ? motionQuery.matches : false;
}

export default function useCountUp(target, { duration = 900 } = {}) {
  const reduceMotion = prefersReducedMotion();
  const [value, setValue] = useState(() =>
    reduceMotion || target <= 0 ? target : 0
  );

  useEffect(() => {
    if (reduceMotion || target <= 0) return;

    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(target * easeOutCubic(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [target, duration, reduceMotion]);

  return value;
}