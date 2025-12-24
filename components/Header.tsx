"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

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
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* NAV */}
        <nav className="main-nav">
          <Link href="/">Home</Link>

          {/* PRODUCTS */}
          <div className={`product-wrapper ${open ? "open" : ""}`}>
            <button className="product-btn" onClick={() => setOpen(!open)}>
              Products
            </button>

            <div className="product-dropdown">
              <Link href="/products/industrial">Industrial Pumps</Link>
              <Link href="/products/booster">Booster & Pressure</Link>
              <Link href="/products/fire">Fire Fighting</Link>
              <Link href="/products/sewage">Sewage & Wastewater</Link>
              <Link href="/products/vertical-inline">Vertical & Inline</Link>
              <Link href="/products/submersible">Submersible Pumps</Link>
            </div>
          </div>

          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
