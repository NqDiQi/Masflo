import { products } from "@/data/products";
import { productCategories } from "@/data/productCategories";
import ProductCard from "@/components/ProductCard";
import CategoryBannerTitle from "@/components/CategoryBannerTitle";

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
      {/* ✅ BANNER */}
      <section
        className="banner"
        style={{ backgroundImage: `url(${category.background})` }}
      >
        <div className="section-title">
          <CategoryBannerTitle
            title={category.title}
            titleVI={category.titleVI}
          />
        </div>
      </section>

      {/* ✅ PRODUCT GRID */}
      <main className="hero">
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <div
            className="products-grid"
            style={{
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
      </main>
    </>
  );
}
