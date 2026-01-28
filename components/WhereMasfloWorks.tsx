"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const items = [
  {
    key: "industry",
    title: { en: "Industry", vi: "Công nghiệp" },
    image: "/applications/industrial.jpg",
    href: "/products/industry",
  },
  {
    key: "agriculture",
    title: { en: "Agriculture", vi: "Nông nghiệp" },
    image: "/applications/agriculture.jpg",
    href: "/products/agriculture",
  },
  {
    key: "fire",
    title: { en: "Fire Protection", vi: "Phòng cháy chữa cháy" },
    image: "/applications/fire.jpg",
    href: "/products/fire",
  },
  {
    key: "water",
    title: { en: "Water Supply", vi: "Cấp nước" },
    image: "/applications/water.jpg",
    href: "/products/water",
  },
];

export default function WhereMasfloWorks() {
  const { language } = useLanguage();
  const isVI = language === "vi";

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
    <section style={{ padding: "100px 24px" }} ref={ref}>
      <h2
        className={`reveal ${show ? "reveal-show" : ""}`}
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: 600,
          color: "#0A2540",
        }}
      >
        {isVI ? "Masflo hoạt động trong lĩnh vực nào" : "Where Masflo Works"}
      </h2>

      <div
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
          <Link
            key={item.key}
            href={item.href}
            className={`reveal reveal-delay-${i + 1} ${
              show ? "reveal-show" : ""
            }`}
            style={{
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              height: "220px",
              display: "block",
            }}
          >
            <Image
              src={item.image}
              alt={isVI ? item.title.vi : item.title.en}
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
              {isVI ? item.title.vi : item.title.en}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
