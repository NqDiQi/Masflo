import { products } from "@/data/products";
import Image from "next/image";
import {
  Factory,
  Home,
  Droplets,
  Waves,
  Droplet,
  LucideIcon,
  Cylinder,
  Filter,
  Atom,
  RefreshCw,
  FireExtinguisher,
  Building2,
  Snowflake,
  GlassWater,
  HousePlug,
  Fuel,
  Scroll,
} from "lucide-react";

/* ===== APPLICATION ICON MAP ===== */
const applicationIconMap: Record<string, LucideIcon> = {
  Industry: Factory,
  "Industrial and domestic pressure boosting": Home,
  "Water supply in buildings and irrigation": Droplet,
  "Boiler feed": Cylinder,
  "Sprinkler irrigation systems": Droplets,
  "Fire fighting systems": FireExtinguisher,
  "Hot & cold water and coolant circulation": RefreshCw,
  "DM plant": Atom,
  "Reverse osmosis (RO)": Filter,
  "Industrial washing": Waves,
  "Residential buildings": Building2,
  "Cooling water": Snowflake,
  "Drinking water facilities": GlassWater,
  "Energy facilities": HousePlug,
  "Chemical and petrochemical plants": Fuel,
  "Paper industry": Scroll,
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
    slug: p.slug, // ⚠️ slug URL ONLY
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { group, slug } = await params;

  const product = products.find(
    (p) => p.slug === slug && p.category.includes(group),
  );

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
            {/* ===== TITLE (DISPLAY SLUG) ===== */}
            <h1
              style={{
                fontSize: "36px",
                marginBottom: "12px",
                whiteSpace: "pre-line",
              }}
            >
              {product.name}
            </h1>

            {/* ===== USAGE ===== */}
            {product.usage && (
              <p
                style={{
                  color: "#475569",
                  lineHeight: "1.7",
                  whiteSpace: "pre-line",
                  marginTop: "12px",
                  maxWidth: "520px",
                }}
              >
                {product.usage}
              </p>
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

            <div
              className={`applications-carousel ${
                product.applications.length > 5 ? "auto-scroll" : ""
              }`}
            >
              <div className="applications-track">
                {[...product.applications, ...product.applications].map(
                  (a, i) => {
                    const Icon = getApplicationIcon(a);
                    return (
                      <div className="application-card" key={`${a}-${i}`}>
                        <div className="application-icon">
                          <Icon size={36} strokeWidth={1.6} />
                        </div>
                        <p>{a}</p>
                      </div>
                    );
                  },
                )}
              </div>
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

      {/* ===== OPERATING RANGES ===== */}
      {product.operatingRanges && (
        <section
          style={{
            maxWidth: "1200px",
            margin: "64px auto",
            padding: "0 32px",
          }}
        >
          <h2>Operating Ranges</h2>
          <table className="spec-table">
            <tbody>
              {product.operatingRanges.map((item) => (
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

          {/* SIMPLE */}
          {product.material.mode === "simple" && (
            <table className="spec-table">
              <tbody>
                {product.material.items.map((item) => (
                  <tr key={item.part}>
                    <td>{item.part}</td>
                    <td>{item.material}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* TYPED C / S / N */}
          {product.material.mode === "typed" && (
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Part</th>
                  <th>Type C</th>
                  <th>Type S</th>
                  <th>Type N</th>
                </tr>
              </thead>
              <tbody>
                {product.material.items.map((item) => (
                  <tr key={item.part}>
                    <td>{item.part}</td>
                    <td>{item.typeC}</td>
                    <td>{item.typeS}</td>
                    <td>{item.typeN}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {/* ===== VERSIONED MATERIAL ===== */}
          {product.material &&
            product.material.mode === "versioned" &&
            "versions" in product.material &&
            (() => {
              const versionedMaterial = product.material as {
                mode: "versioned";
                versions: string[];
                items: Array<{ part: string; values: Record<string, string> }>;
              };
              return (
                <table className="spec-table">
                  <thead>
                    <tr>
                      <th>Component</th>
                      {versionedMaterial.versions.map((v: string) => (
                        <th key={v}>{v}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {versionedMaterial.items.map((item) => (
                      <tr key={item.part}>
                        <td>{item.part}</td>
                        {versionedMaterial.versions.map((v: string) => (
                          <td key={v}>{item.values[v]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              );
            })()}
        </section>
      )}
    </div>
  );
}
