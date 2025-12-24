import { ShieldCheck, Cog, Sparkles } from "lucide-react";

const items = [
  {
    title: "Engineered Excellence",
    description:
      "Precision-engineered pumps built for performance, durability, and long-term efficiency.",
    icon: Cog,
  },
  {
    title: "Trusted Across Generations",
    description:
      "Masflo solutions have powered industries and farms for decades with proven reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Elegant Design",
    description:
      "Clean, thoughtful engineering that balances form, function, and ease of maintenance.",
    icon: Sparkles,
  },
];

export default function WhyMasflo() {
  return (
    <section style={{ padding: "120px 24px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: 600,
          color: "#0A2540",
        }}
      >
        Why Masflo
      </h2>

      <div
        style={{
          marginTop: "64px",
          maxWidth: "1100px",
          marginInline: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "48px",
        }}
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} style={{ textAlign: "center" }}>
              <Icon
                size={28} // 👈 icon nhỏ lại, tinh tế
                strokeWidth={1.5}
                color="#0A2540"
              />

              <h3
                style={{
                  marginTop: "20px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#0A2540",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#475569",
                }}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
