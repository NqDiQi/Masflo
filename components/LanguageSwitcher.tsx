"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const flagStyle = (active: boolean) => ({
    cursor: "pointer",
    opacity: active ? 1 : 0.4,
    transition: "opacity 0.15s ease",
  });

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontSize: 14, fontStyle: "italic" }}>Language:</span>

      <Image
        src="/images/hero/VietNam.jpg"
        alt="Vietnamese"
        width={28}
        height={20}
        style={flagStyle(language === "vi")}
        onClick={() => setLanguage("vi")}
      />

      <Image
        src="/images/hero/English.jpg"
        alt="English"
        width={28}
        height={20}
        style={flagStyle(language === "en")}
        onClick={() => setLanguage("en")}
      />
    </div>
  );
}
