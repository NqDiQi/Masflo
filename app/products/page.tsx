"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"az" | "za">("az");

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sort === "az"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "96px 32px",
        display: "block", // ❗ cắt flex/global
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          fontWeight: 600,
          color: "#0A2540",
        }}
      >
        All Products
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
              padding: "10px 20px 10px 48px", // ⬅ padding trái lớn hơn
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
          <option value="az">Sort A–Z</option>
          <option value="za">Sort Z–A</option>
        </select>
      </div>

      {/* 🔥 PRODUCT GRID – ÉP CỨNG */}
      <div
        style={{
          marginTop: "80px",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          columnGap: "56px", // khoảng cách ngang
          rowGap: "80px", // khoảng cách dọc
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
