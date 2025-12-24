import Image from "next/image";
import Link from "next/link";

const pumps = [
  {
    title: "Industrial Pumps",
    image: "/products/industrial-pump.png",
    href: "/products/industrial",
  },
  {
    title: "Booster Pumps",
    image: "/products/booster-pump.png",
    href: "/products/booster",
  },
  {
    title: "Fire Pump Sets",
    image: "/products/fire-pump.png",
    href: "/products/fire",
  },
  {
    title: "Sewage Pumps",
    image: "/products/sewage-pump.png",
    href: "/products/sewage",
  },
];

export default function ExplorePumps() {
  return (
    <section style={{ padding: "100px 24px", background: "#f8fafc" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: 600,
          color: "#0A2540",
        }}
      >
        Explore Our Pumps
      </h2>

      <div
        style={{
          marginTop: "56px",
          maxWidth: "1200px",
          marginInline: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "28px",
        }}
      >
        {pumps.map((pump) => (
          <Link
            key={pump.title}
            href={pump.href}
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "24px", // 👈 GIẢM
              textAlign: "center",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
            }}
          >
            <Image
              src={pump.image}
              alt={pump.title}
              width={250} // 👈 GIẢM
              height={180} // 👈 GIẢM
              style={{ margin: "0 auto 20px" }}
            />

            <div
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#0A2540",
              }}
            >
              {pump.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
