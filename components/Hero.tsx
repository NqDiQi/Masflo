"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        height: "520px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image – GIỮ NGUYÊN */}
      <Image
        src="/images/hero/hero-pumps.jpg"
        alt="Premium Pump Solutions"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center", // 👈 không zoom thêm
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.7)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          margin: "0 auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "50px",
            fontWeight: 300,
            color: "#0A2540",
            maxWidth: "760px",
            lineHeight: 1.3,

            /* ✨ animation */
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          Premium Pump Solutions <br />
          for Industry & Agriculture
        </h1>

        {/* SUBTITLE */}
        <p
          style={{
            marginTop: "16px",
            fontSize: "20px",
            color: "#475569",
            maxWidth: "560px",

            /* ✨ animation delay */
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(24px)",
            transition:
              "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
          }}
        >
          Masflo delivers durable, efficient, and elegant pumping solutions
          trusted across generations.
        </p>
      </div>
    </section>
  );
}
