"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const pumps = [
  {
    title: "Industrial Pumps",
    image: "/products/industrial-pump.png",
    href: "/products/industrial",
  },
  {
    title: "Booster Pumps",
    image: "/products/booster-pump.png",
    href: "/products/booster",
  },
  {
    title: "Fire Pump Sets",
    image: "/products/fire-pump.png",
    href: "/products/fire",
  },
  {
    title: "Sewage Pumps",
    image: "/products/sewage-pump.png",
    href: "/products/sewage",
  },
];

export default function ExplorePumps() {
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
    <section
      className="explore-section"
      style={{ padding: "120px 24px" }}
      ref={ref}
    >
      <h2
        className={`reveal ${show ? "reveal-show" : ""}`}
        style={{ textAlign: "center" }}
      >
        Explore Our Pumps
      </h2>

      <div
        className="explore-grid"
        style={{
          marginTop: "56px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "32px",
          maxWidth: "1200px",
          marginInline: "auto",
        }}
      >
        {pumps.map((pump, i) => (
          <Link
            key={pump.title}
            href={pump.href}
            className={`reveal reveal-delay-${i + 1} ${
              show ? "reveal-show" : ""
            }`}
            style={{ textAlign: "center" }}
          >
            <Image src={pump.image} alt={pump.title} width={250} height={180} />
            <div style={{ marginTop: "12px", fontWeight: 500 }}>
              {pump.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
