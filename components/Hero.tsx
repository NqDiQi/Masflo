import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        height: "520px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <Image
        src="/images/hero/hero-pumps.jpg"
        alt="Premium Pump Solutions"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.7)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          margin: "0 auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontWeight: 300,
            color: "#0A2540",
            maxWidth: "760px",
            lineHeight: 1.3,
          }}
        >
          Premium Pump Solutions <br />
          for Industry & Agriculture
        </h1>

        <p
          style={{
            marginTop: "16px",
            fontSize: "20px",
            color: "#475569",
            maxWidth: "560px",
          }}
        >
          Masflo delivers durable, efficient, and elegant pumping solutions
          trusted across generations.
        </p>
      </div>
    </section>
  );
}
