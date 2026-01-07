"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const isVI = language === "vi";

  return (
    <footer className={styles.footer}>
      {/* TOP */}
      <div className={styles.container}>
        {/* COMPANY */}
        <div className={styles.brand}>
          <Image
            src="/images/banners/logo.jpg"
            alt="Masflo"
            width={150}
            height={42}
          />

          <div className={styles.companyName}>
            MASFLO – International Pumping System
          </div>

          <div className={styles.companyInfo}>
            {isVI ? (
              <>
                <div>
                  590/2/4 Phan Văn Trị, Phường Hạnh Thông, TP. Hồ Chí Minh
                </div>
                <div>Tel: 0903642358</div>
              </>
            ) : (
              <>
                <div>133 Av. Jean Jaurès, 75019 Paris, France</div>
                <div>Tel: +33 175 379 736</div>
              </>
            )}
            <div>Email: info@masflo.com</div>
            <div>Web: www.masflo.com</div>
          </div>

          {/* CERTIFICATION */}
          <div className={styles.cert}>
            <Image
              src="/images/hero/certification.png"
              alt="Certifications"
              width={180}
              height={32}
            />
          </div>
        </div>

        {/* RESOURCES */}
        <div className={styles.col}>
          <h4>{isVI ? "Tài nguyên" : "Resources"}</h4>
          <Link href="/about">{isVI ? "Giới thiệu" : "About Us"}</Link>
          <Link href="/products">{isVI ? "Sản phẩm" : "Products"}</Link>
          <Link href="/solutions">{isVI ? "Giải pháp" : "Solutions"}</Link>
        </div>

        {/* HELP */}
        <div className={styles.col}>
          <h4>{isVI ? "Hỗ trợ" : "Help"}</h4>
          <Link href="/contact">{isVI ? "Liên hệ" : "Contact Us"}</Link>
          <Link href="/support">{isVI ? "Hỗ trợ kỹ thuật" : "Support"}</Link>
          <Link href="/warranty">{isVI ? "Bảo hành" : "Warranty"}</Link>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Masflo. All rights reserved.</span>

        <div className={styles.bottomLinks}>
          <Link href="/privacy-policy">
            {isVI ? "Chính sách bảo mật" : "Privacy Policy"}
          </Link>
          <Link href="/terms-of-use">
            {isVI ? "Điều khoản sử dụng" : "Terms of Use"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
