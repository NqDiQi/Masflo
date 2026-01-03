"use client";

import { ShieldCheck, Cog, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    title: "Engineered Excellence",
    description:
      "Precision-engineered pumps built for performance, durability, and long-term efficiency.",
    icon: Cog,
  },
  {
    title: "Trusted Across Generations",
    description:
      "Masflo solutions have powered industries and farms for decades with proven reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Elegant Design",
    description:
      "Clean, thoughtful engineering that balances form, function, and ease of maintenance.",
    icon: Sparkles,
  },
];

export default function WhyMasflo() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ padding: "120px 24px" }} ref={ref}>
      <h2
        className={`reveal ${show ? "reveal-show" : ""}`}
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: 600,
          color: "#0A2540",
        }}
      >
        Why Masflo
      </h2>

      <div
        style={{
          marginTop: "64px",
          maxWidth: "1100px",
          marginInline: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "48px",
        }}
      >
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`reveal reveal-delay-${i + 1} ${
                show ? "reveal-show" : ""
              }`}
              style={{ textAlign: "center" }}
            >
              <Icon size={28} strokeWidth={1.5} color="#0A2540" />

              <h3
                style={{
                  marginTop: "20px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#0A2540",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#475569",
                }}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
