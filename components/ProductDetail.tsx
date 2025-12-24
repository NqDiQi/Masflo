import Image from "next/image";
import { Product } from "@/data/products";

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">{product.name}</h1>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          {product.usage && (
            <p className="text-gray-700 text-lg mb-4">{product.usage}</p>
          )}

          {product.specs && product.specs.length > 0 && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Key Features</h2>
              <ul className="list-disc list-inside text-gray-700">
                {product.specs.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={520}
            height={360}
            className="rounded-xl bg-white object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
