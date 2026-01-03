"use client";

import Image from "next/image";
import styles from "./section-block.module.css";
import { useEffect, useRef } from "react";

type Props = {
  index: string;
  title: string;
  content: string[];
  image: string;
  reverse?: boolean;
};

export default function SectionBlock({
  index,
  title,
  content,
  image,
  reverse = false,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.show);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.block} ${reverse ? styles.reverse : ""}`}
    >
      {/* IMAGE */}
      <div className={styles.image}>
        <Image
          src={image}
          alt={title}
          width={460}
          height={320}
          priority={false}
        />
      </div>

      {/* TEXT */}
      <div className={styles.text}>
        <div className={styles.heading}>
          <span className={styles.roman}>{index}</span>
          <h3>{title}</h3>
        </div>

        <ul className={styles.list}>
          {content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
