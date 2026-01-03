import styles from "./LegalBanner.module.css";

type LegalBannerProps = {
  title: string;
  subtitle?: string;
};

export default function LegalBanner({ title, subtitle }: LegalBannerProps) {
  return (
    <section className={styles.legalBanner}>
      <div className={styles.legalBannerInner}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
