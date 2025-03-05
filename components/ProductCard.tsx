import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type ProductCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  price: string;
  href: string;
};

const ProductCard = ({
  title,
  description,
  imageSrc,
  price,
  href,
}: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">{price}</span>
          <Link href={href}>
            <Button
              size="sm"
              className="rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
