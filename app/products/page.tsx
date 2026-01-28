"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductsPage() {
  const { language } = useLanguage();
  const isVI = language === "vi";

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"az" | "za">("az");

  // 👉 loại bỏ trùng theo slug, giữ lại bản cuối cùng (bạn có thể sắp xếp products trước để ưu tiên category chính)
  const uniqueProducts = Array.from(
    new Map(products.map((p) => [p.slug, p])).values(),
  );

  const filteredProducts = uniqueProducts
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sort === "az"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "96px 32px",
        display: "block",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          fontWeight: 600,
          color: "#0A2540",
        }}
      >
        {isVI ? "Toàn bộ sản phẩm" : "All Products"}
      </h1>

      {/* SEARCH + SORT */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "24px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#999",
              pointerEvents: "none",
            }}
          >
            🔍
          </span>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              border: "1px solid #ddd",
              borderRadius: "999px",
              padding: "10px 20px 10px 48px",
              width: "280px",
            }}
          />
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "az" | "za")}
          style={{
            border: "1px solid #ddd",
            borderRadius: "999px",
            padding: "10px 16px",
          }}
        >
          <option value="az">{isVI ? "Sắp xếp A–Z" : "Sort A–Z"}</option>
          <option value="za">{isVI ? "Sắp xếp Z–A" : "Sort Z–A"}</option>
        </select>
      </div>

      {/* PRODUCT GRID */}
      <div
        style={{
          marginTop: "80px",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          columnGap: "56px",
          rowGap: "80px",
        }}
      >
        {filteredProducts.map((p, i) => (
          <ProductCard
            key={p.slug}
            name={p.name}
            image={p.image}
            href={`/products/${p.category}/${p.slug}`}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
