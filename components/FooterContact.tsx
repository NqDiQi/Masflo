"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FooterContact() {
  const { language } = useLanguage();

  if (language === "vi") {
    return (
      <>
        <p>MASFLO – International Pumping System</p>
        <p>590/2/4 Phan Văn Trị, phường Hạnh Thông, Thành phố Hồ Chí Minh</p>
        <p>Tel: 0903642358</p>
      </>
    );
  }

  return (
    <>
      <p>MASFLO – International Pumping System</p>
      <p>133 Av. Jean Jaurès, 75019 Paris, France</p>
      <p>Tel: +33 175 379 736</p>
    </>
  );
}
