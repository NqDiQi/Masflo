import { productCategories } from "../../data/productCategories";

export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto px-10 py-24">
      <h1 className="text-4xl font-semibold text-[#0A2540]">Products</h1>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {productCategories.map((c) => (
          <a
            key={c.key}
            href={`/products/${c.key}`}
            className="border rounded-xl p-8 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-medium text-[#0A2540]">{c.title}</h3>
          </a>
        ))}
      </div>
    </main>
  );
}
