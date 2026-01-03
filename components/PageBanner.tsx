import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  image: string;
};

export default function PageBanner({ title, subtitle, image }: Props) {
  return (
    <section
      style={{
        position: "relative",
        height: "360px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Image
        src={image}
        alt={title}
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}
        >
          <h1 style={{ color: "#fff", fontSize: "48px", fontWeight: 600 }}>
            {title}
          </h1>
          <p style={{ color: "#e5e7eb", marginTop: "12px", fontSize: "18px" }}>
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
