"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const banners = [
  "/images/banners/banner1.jpg",
  "/images/banners/banner2.jpeg",
  "/images/banners/banner3.jpg",
  "/images/banners/banner4.jpeg",
  "/images/banners/banner5.jpg",
  "/images/banners/banner6.jpg",
  "/images/banners/banner7.jpg",
  "/images/banners/banner8.jpeg",
];

export default function AboutSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-slider">
      <div
        className="about-slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((src, i) => (
          <div className="about-slide" key={i}>
            <Image
              src={src}
              alt={`Masflo banner ${i + 1}`}
              fill
              sizes="100vw"
              priority={i === 0}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
