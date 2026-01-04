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
    <section className="explore-section" ref={ref}>
      <h2 className={`explore-title reveal ${show ? "reveal-show" : ""}`}>
        Explore Our Pumps
      </h2>

      <div className="explore-grid">
        {pumps.map((pump, i) => (
          <Link
            key={pump.title}
            href={pump.href}
            className={`explore-card reveal reveal-delay-${i + 1} ${
              show ? "reveal-show" : ""
            }`}
          >
            <Image src={pump.image} alt={pump.title} width={300} height={200} />
            <div className="explore-card-title">{pump.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
