"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type PixelRevealProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function PixelReveal({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
}: PixelRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const cells = useMemo(() => Array.from({ length: 96 }, (_, index) => index), []);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`pixel-reveal ${revealed ? "is-revealed" : ""} ${className}`}
    >
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} />
      <div className="pixel-reveal__grid" aria-hidden="true">
        {cells.map((cell) => {
          const row = Math.floor(cell / 12);
          const column = cell % 12;
          const delay = (11 - column) * 34 + row * 15;

          return (
            <i
              key={cell}
              style={{ "--pixel-delay": `${delay}ms` } as React.CSSProperties}
            />
          );
        })}
      </div>
    </div>
  );
}
