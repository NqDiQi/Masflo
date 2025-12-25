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
    <section className="explore-section">
      <h2 className="explore-title">Explore Our Pumps</h2>

      <div className="explore-grid">
        {pumps.map((pump) => (
          <Link key={pump.title} href={pump.href} className="explore-card">
            <Image src={pump.image} alt={pump.title} width={250} height={180} />

            <div className="explore-card-title">{pump.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
