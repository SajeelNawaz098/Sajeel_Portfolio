import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    const progress = progressRef.current;
    if (!progress) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const amount = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        progress.style.transform = `scaleX(${Math.min(1, Math.max(0, amount))})`;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const resizeObserver = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(update);
    resizeObserver?.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
