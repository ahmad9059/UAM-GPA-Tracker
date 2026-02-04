"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 2000,
  decimals = 2,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCount();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    const startTime = Date.now();
    const startValue = 0;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentValue = startValue + (end - startValue) * easedProgress;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <span ref={countRef} className={className}>
      {count.toFixed(decimals)}
    </span>
  );
}
