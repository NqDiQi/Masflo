"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

type Props = {
  name: string;
  image: string;
  href: string;
  index?: number;
};

export default function ProductCard({ name, image, href, index = 0 }: Props) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal delay-${(index % 5) + 1}`}
      style={{ willChange: "transform, opacity" }}
    >
      <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
        {/* 👇 KHUNG ẢNH CỐ ĐỊNH */}
        <div
          style={{
            width: "100%",
            aspectRatio: "4 / 3", // 👈 đổi 1/1 nếu muốn vuông
            overflow: "hidden",
            borderRadius: "16px",
            backgroundColor: "transparent",
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // 🔥 CHÌA KHÓA
              display: "block",
            }}
          />
        </div>

        <h3
          style={{
            marginTop: "16px",
            fontSize: "16px",
            fontWeight: 500,
            color: "#0A2540",
          }}
        >
          {name}
        </h3>
      </Link>
    </div>
  );
}
