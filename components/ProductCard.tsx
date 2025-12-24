import Link from "next/link";
import Image from "next/image";

type Props = {
  name: string;
  image: string;
  href: string;
};

export default function ProductCard({ name, image, href }: Props) {
  return (
    <Link
      href={href}
      className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition block bg-white"
    >
      {/* Khung ảnh nhỏ gọn */}
      <div className="flex items-center justify-center p-4 bg-gray-50">
        <Image
          src={image}
          alt={name}
          width={href.includes("/fire/") ? 220 : 180} // nếu là fire thì to hơn
          height={href.includes("/fire/") ? 160 : 150}
          className="object-contain"
        />
      </div>
      {/* Tên bơm */}
      <div className="p-4 text-center">
        <h3 className="font-semibold text-sm">{name}</h3>
      </div>
    </Link>
  );
}
