import { products } from "@/data/products";
import { productCategories } from "@/data/productCategories";
import ProductCard from "@/components/ProductCard";

type PageProps = {
  params: Promise<{ group: string }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({
    group: category.key,
  }));
}

export default async function ProductGroupPage({ params }: PageProps) {
  const { group } = await params;

  const category = productCategories.find((c) => c.key === group);
  const filteredProducts = products.filter((p) => p.category === group);

  if (!category) {
    return (
      <main className="hero">
        <h1>Category not found</h1>
      </main>
    );
  }

  return (
    <>
      {/* ✅ BANNER – CHỈ THÊM, KHÔNG ĐỤNG LOGIC */}
      <section
        className="banner"
        style={{ backgroundImage: `url(${category.background})` }}
      >
        <div className="section-title">
          <span>{category.title}</span>
        </div>
      </section>

      {/* ✅ PHẦN CŨ – GIỮ NGUYÊN */}
      <main className="hero">
        <div
          style={{
            marginTop: "56px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "32px",
          }}
        >
          {filteredProducts.map((p) => {
            const slug = p.slug || p.name.toLowerCase().replace(/\s+/g, "-");

            return (
              <ProductCard
                key={p.name}
                name={p.name}
                image={p.image}
                href={`/products/${group}/${slug}`}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
