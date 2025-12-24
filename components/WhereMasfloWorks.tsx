import Image from "next/image";

const items = [
  { title: "Industrial", image: "/applications/industrial.jpg" },
  { title: "Agriculture", image: "/applications/agriculture.jpg" },
  { title: "Fire Protection", image: "/applications/fire.jpg" },
  { title: "Water Supply", image: "/applications/water.jpg" },
];

export default function WhereMasfloWorks() {
  return (
    <section style={{ padding: "100px 24px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: 600,
          color: "#0A2540",
        }}
      >
        Where Masflo Works
      </h2>

      <div
        style={{
          marginTop: "56px",
          maxWidth: "1200px",
          marginInline: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              height: "220px", // 👈 GIẢM Ở ĐÂY
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.35)",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                color: "#fff",
                fontSize: "16px", // 👈 chữ nhỏ lại chút
                fontWeight: 500,
              }}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
