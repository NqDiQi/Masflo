import { products } from "@/data/products";
import Image from "next/image";

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
    <main className="hero">
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={550} height={400} />
    </main>
  );
}
