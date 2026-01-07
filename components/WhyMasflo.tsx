"use client";

import { ShieldCheck, Cog, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const items = [
  {
    title: {
      en: "Engineered Excellence",
      vi: "Kỹ thuật chế tạo vượt trội",
    },
    description: {
      en: "Precision-engineered pumps built for performance, durability, and long-term efficiency.",
      vi: "Máy bơm được thiết kế chính xác, tối ưu hiệu suất, độ bền và vận hành lâu dài.",
    },
    icon: Cog,
  },
  {
    title: {
      en: "Trusted Across Generations",
      vi: "Được tin dùng qua nhiều thế hệ",
    },
    description: {
      en: "Masflo solutions have powered industries and farms for decades with proven reliability.",
      vi: "Giải pháp Masflo đã đồng hành cùng công nghiệp và nông nghiệp suốt nhiều thập kỷ.",
    },
    icon: ShieldCheck,
  },
  {
    title: {
      en: "Elegant Design",
      vi: "Thiết kế tinh gọn",
    },
    description: {
      en: "Clean, thoughtful engineering that balances form, function, and ease of maintenance.",
      vi: "Thiết kế hài hòa giữa hình thức, công năng và dễ bảo trì.",
    },
    icon: Sparkles,
  },
];

export default function WhyMasflo() {
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
        {isVI ? "Vì sao chọn Masflo" : "Why Masflo"}
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
              key={item.title.en}
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
                {isVI ? item.title.vi : item.title.en}
              </h3>

              <p
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#475569",
                }}
              >
                {isVI ? item.description.vi : item.description.en}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
