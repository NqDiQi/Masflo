import { products } from "@/data/products";
import Image from "next/image";
import {
  Factory,
  Home,
  Building,
  Building2,
  Wind,
  Flame,
  ShieldCheck,
  Droplets,
  Wheat,
  Tractor,
  Settings,
  Gauge,
  Waves,
  Recycle,
  Landmark,
  RefreshCw,
  Snowflake,
  Droplet,
  Shield,
  ArrowLeftRight,
  ArrowDown,
  LucideIcon,
} from "lucide-react";

/* ===== APPLICATION ICON MAP ===== */
const applicationIconMap: Record<string, LucideIcon> = {
  Industrial: Factory,
  Domestic: Home,
  Commercial: Building,
  "High-rise": Building2,

  HVAC: Wind,
  "Chilled Water": Snowflake,
  Circulation: RefreshCw,

  "Fire Fighting": Flame,
  "Fire protection": ShieldCheck,

  Irrigation: Droplets,
  Agriculture: Wheat,
  Farms: Tractor,

  Process: Settings,
  "High Pressure": Gauge,

  Drainage: Waves,
  Wastewater: Recycle,

  Municipal: Landmark,

  "Clean Water": Droplet,
  Hygienic: Shield,

  "Flood Control": Waves,
  "Large Transfer": ArrowLeftRight,
  "Deep Well": ArrowDown,
};

function getApplicationIcon(app: string) {
  return applicationIconMap[app] ?? Factory;
}

/* ===== PAGE ===== */
type PageProps = {
  params: Promise<{ group: string; slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({
    group: p.category,
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { group, slug } = await params;
  const product = products.find((p) => p.category === group && p.slug === slug);

  if (!product) {
    return (
      <main className="hero">
        <h1>Product not found</h1>
      </main>
    );
  }

  return (
    <div className="product-detail-page">
      {/* ===== HERO ===== */}
      <main className="hero">
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={550}
            height={400}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
            priority
          />

          <div>
            <h1 style={{ fontSize: "36px", marginBottom: "12px" }}>
              {product.name}
            </h1>

            {product.usage && (
              <p style={{ color: "#475569" }}>{product.usage}</p>
            )}
          </div>
        </div>
      </main>

      {/* ===== APPLICATIONS ===== */}
      {product.applications && (
        <section style={{ background: "#eaf6fc" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "64px 32px",
            }}
          >
            <h2 style={{ color: "#0b5ed7", marginBottom: "48px" }}>
              Applications
            </h2>

            <div className="applications-grid">
              {product.applications.map((a) => {
                const Icon = getApplicationIcon(a);
                return (
                  <div className="application-card" key={a}>
                    <div className="application-icon">
                      <Icon size={36} strokeWidth={1.6} />
                    </div>
                    <p>{a}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== FEATURES ===== */}
      {product.specs && (
        <section
          style={{
            maxWidth: "1200px",
            margin: "64px auto 0",
            padding: "0 32px",
          }}
        >
          <div className="features-box">
            <h3 className="features-title">Features</h3>
            <ul className="features-list">
              {product.specs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ===== SPECIFICATIONS ===== */}
      {product.specifications && (
        <section
          style={{
            maxWidth: "1200px",
            margin: "64px auto",
            padding: "0 32px",
          }}
        >
          <h2>Specifications</h2>
          <table className="spec-table">
            <tbody>
              {product.specifications.map((item) => (
                <tr key={item.label}>
                  <td>{item.label}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* ===== MATERIAL ===== */}
      {product.material && (
        <section
          style={{
            maxWidth: "1200px",
            margin: "64px auto",
            padding: "0 32px",
          }}
        >
          <h2>Material Construction</h2>
          <table className="spec-table">
            <tbody>
              {product.material.map((item) => (
                <tr key={item.part}>
                  <td>{item.part}</td>
                  <td>{item.material}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}
