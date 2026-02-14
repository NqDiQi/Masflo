"use client";

import { products as productsEn } from "@/data/products.en";
import { products as productsVi } from "@/data/products.vi";
import { applicationLabels, ApplicationKey } from "@/data/applicationLabels";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { language } = useLanguage();
  const params = useParams();

  const group = params.group as string;
  const slug = params.slug as string;

  const productList = language === "vi" ? productsVi : productsEn;

  const product = productList.find(
    (p) => p.slug === slug && p.category.includes(group),
  );

  if (!product) {
    return (
      <main className="hero">
        <h1>
          {language === "vi" ? "Không tìm thấy sản phẩm" : "Product not found"}
        </h1>
      </main>
    );
  }

  const material = product.material;

  return (
    <div className="product-detail-page">
      {/* ================= HERO ================= */}
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
            <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>
              {product.name}
            </h1>

            {product.usage && (
              <p style={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>
                {product.usage}
              </p>
            )}
          </div>
        </div>
      </main>

      {/* ================= APPLICATIONS ================= */}
      {product.applications && product.applications.length > 0 && (
        <section style={{ background: "#eaf6fc" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "64px 32px",
            }}
          >
            <h2 style={{ color: "#0b5ed7", marginBottom: "48px" }}>
              {language === "vi" ? "Ứng dụng" : "Applications"}
            </h2>

            <div
              className={`applications-carousel ${
                product.applications.length > 6 ? "auto-scroll" : ""
              }`}
            >
              <div className="applications-track">
                {Array.from(new Set(product.applications)).map((key, i) => {
                  const data = applicationLabels[key as ApplicationKey];
                  if (!data) return null;

                  const Icon = data.icon;

                  return (
                    <div className="application-card" key={`${key}-${i}`}>
                      <div className="application-icon">
                        <Icon size={36} strokeWidth={1.6} />
                      </div>
                      <p>{language === "vi" ? data.vi : data.en}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= FEATURES ================= */}
      {product.specs && product.specs.length > 0 && (
        <section
          style={{
            maxWidth: "1200px",
            margin: "64px auto 0",
            padding: "0 32px",
          }}
        >
          <div className="features-box">
            <h3 className="features-title">
              {language === "vi" ? "Tính năng" : "Features"}
            </h3>
            <ul className="features-list">
              {product.specs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ================= SPECIFICATIONS ================= */}
      {product.specifications && product.specifications.length > 0 && (
        <section
          style={{
            maxWidth: "1200px",
            margin: "64px auto",
            padding: "0 32px",
          }}
        >
          <h2 style={{ marginBottom: "32px" }}>
            {language === "vi" ? "Thông số kỹ thuật" : "Specifications"}
          </h2>

          <table className="spec-table">
            <tbody>
              {product.specifications.map((item) => (
                <tr key={item.label}>
                  <td style={{ fontWeight: 500 }}>{item.label}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* ================= MATERIAL ================= */}
      {material?.mode === "simple" && (
        <section
          style={{ maxWidth: "1200px", margin: "64px auto", padding: "0 32px" }}
        >
          <h2>
            {language === "vi" ? "Vật liệu chế tạo" : "Material Construction"}
          </h2>
          <table className="spec-table">
            <tbody>
              {material.items.map((item) => (
                <tr key={item.part}>
                  <td>{item.part}</td>
                  <td>{item.material ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {material?.mode === "typed" && (
        <section
          style={{ maxWidth: "1200px", margin: "64px auto", padding: "0 32px" }}
        >
          <h2>
            {language === "vi" ? "Vật liệu chế tạo" : "Material Construction"}
          </h2>
          <table className="spec-table">
            <thead>
              <tr>
                <th>{language === "vi" ? "Bộ phận" : "Part"}</th>
                <th>Type C</th>
                <th>Type S</th>
                <th>Type N</th>
              </tr>
            </thead>
            <tbody>
              {material.items.map((item) => (
                <tr key={item.part}>
                  <td>{item.part}</td>
                  <td>{item.typeC ?? "-"}</td>
                  <td>{item.typeS ?? "-"}</td>
                  <td>{item.typeN ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {material?.mode === "versioned" && (
        <section
          style={{ maxWidth: "1200px", margin: "64px auto", padding: "0 32px" }}
        >
          <h2>
            {language === "vi" ? "Vật liệu chế tạo" : "Material Construction"}
          </h2>
          <table className="spec-table">
            <thead>
              <tr>
                <th>{language === "vi" ? "Bộ phận" : "Component"}</th>
                {material.versions.map((v: string) => (
                  <th key={v}>{v}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {material.items.map((item) => (
                <tr key={item.part}>
                  <td>{item.part}</td>
                  {material.versions.map((v: string) => (
                    <td key={v}>{item.values?.[v] ?? "-"}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}
