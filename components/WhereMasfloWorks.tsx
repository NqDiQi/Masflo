"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const items = [
  { title: "Industrial", image: "/applications/industrial.jpg" },
  { title: "Agriculture", image: "/applications/agriculture.jpg" },
  { title: "Fire Protection", image: "/applications/fire.jpg" },
  { title: "Water Supply", image: "/applications/water.jpg" },
];

export default function WhereMasfloWorks() {
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
    <section style={{ padding: "100px 24px" }}>
      <h2
        className={`reveal ${show ? "reveal-show" : ""}`}
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: 600,
          color: "#0A2540",
        }}
      >
        Where Masflo Works
      </h2>

      <div
        ref={ref}
        style={{
          marginTop: "56px",
          maxWidth: "1200px",
          marginInline: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
        }}
      >
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`reveal reveal-delay-${i + 1} ${
              show ? "reveal-show" : ""
            }`}
            style={{
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              height: "220px",
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.35)",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
