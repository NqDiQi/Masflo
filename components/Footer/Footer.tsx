import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ===== TOP ===== */}
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
            <div>133 Av. Jean Jaurès, 75019 Paris, France</div>
            <div>Tel: +33 175 379 736</div>
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
          <h4>Resources</h4>
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/solutions">Solutions</Link>
        </div>

        {/* HELP */}
        <div className={styles.col}>
          <h4>Help</h4>
          <Link href="/contact">Contact Us</Link>
          <Link href="/support">Support</Link>
          <Link href="/warranty">Warranty</Link>
        </div>
      </div>

      {/* ===== BOTTOM ===== */}
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Masflo. All rights reserved.</span>

        <div className={styles.bottomLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
