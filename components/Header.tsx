"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const isVI = language === "vi";

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* LOGO */}
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/banners/logo.jpg"
              alt="Masflo Logo"
              width={180}
              height={56}
              priority
            />
          </Link>
        </div>

        {/* NAV */}
        <nav className="main-nav">
          <Link href="/">{isVI ? "Trang chủ" : "Home"}</Link>

          <div className={`product-wrapper ${open ? "open" : ""}`}>
            <button className="product-btn" onClick={() => setOpen(!open)}>
              {isVI ? "Sản phẩm" : "Products"}
            </button>

            <div className="product-dropdown">
              <Link href="/products/industrial">
                {isVI ? "Bơm công nghiệp" : "Industrial Pumps"}
              </Link>
              <Link href="/products/booster">
                {isVI ? "Bơm tăng áp" : "Booster & Pressure"}
              </Link>
              <Link href="/products/fire">
                {isVI ? "Bơm chữa cháy" : "Fire Fighting"}
              </Link>
              <Link href="/products/sewage">
                {isVI ? "Bơm nước thải" : "Sewage & Wastewater"}
              </Link>
              <Link href="/products/submersible">
                {isVI ? "Bơm chìm" : "Submersible Pumps"}
              </Link>
            </div>
          </div>

          <Link href="/about">{isVI ? "Giới thiệu" : "About Us"}</Link>
          <Link href="/contact">{isVI ? "Liên hệ" : "Contact Us"}</Link>
        </nav>

        {/* LANGUAGE */}
        <div className="language-switch">
          {/* 🔴 SỬA ĐÚNG CHỖ NÀY */}
          <span className="language-label">
            {isVI ? "Ngôn ngữ" : "Language"}
          </span>

          <button
            onClick={() => setLanguage("en")}
            aria-label="English"
            className="lang-btn"
          >
            <Image
              src="/images/hero/English.jpg"
              alt="English"
              width={28}
              height={20}
              className={language === "en" ? "active" : ""}
            />
          </button>

          <button
            onClick={() => setLanguage("vi")}
            aria-label="Vietnamese"
            className="lang-btn"
          >
            <Image
              src="/images/hero/VietNam.jpg"
              alt="Vietnamese"
              width={28}
              height={20}
              className={language === "vi" ? "active" : ""}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
