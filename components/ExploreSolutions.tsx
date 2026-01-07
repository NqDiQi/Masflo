"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const pumps = [
  {
    title: { en: "Industrial Pumps", vi: "Bơm công nghiệp" },
    image: "/products/industrial-pump.png",
    href: "/products/industrial",
  },
  {
    title: { en: "Booster Pumps", vi: "Bơm tăng áp" },
    image: "/products/booster-pump.png",
    href: "/products/booster",
  },
  {
    title: { en: "Fire Pump Sets", vi: "Hệ bơm chữa cháy" },
    image: "/products/fire-pump.png",
    href: "/products/fire",
  },
  {
    title: { en: "Sewage Pumps", vi: "Bơm nước thải" },
    image: "/products/sewage-pump.png",
    href: "/products/sewage",
  },
];

export default function ExplorePumps() {
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
    <section className="explore-section" ref={ref}>
      <h2 className={`explore-title reveal ${show ? "reveal-show" : ""}`}>
        {isVI ? "Khám phá dòng sản phẩm bơm" : "Explore Our Pumps"}
      </h2>

      <div className="explore-grid">
        {pumps.map((pump, i) => (
          <Link
            key={pump.title.en}
            href={pump.href}
            className={`explore-card reveal reveal-delay-${i + 1} ${
              show ? "reveal-show" : ""
            }`}
          >
            <Image
              src={pump.image}
              alt={isVI ? pump.title.vi : pump.title.en}
              width={300}
              height={200}
            />
            <div className="explore-card-title">
              {isVI ? pump.title.vi : pump.title.en}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
