import Link from "next/link";
import { productCategories } from "@/data/productCategories";

export default function ProductMenu() {
  return (
    <nav className="bg-gray-100 p-4 rounded">
      <ul className="space-y-2">
        {productCategories.map((c) => (
          <li key={c.key}>
            <Link
              href={`/products/${c.key}`}
              className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
            >
              {c.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
