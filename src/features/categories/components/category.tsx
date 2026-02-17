
import { getProductsByCategory } from "@/features/categories/server/categories.action";
import { Product } from "@/features/products/types/products.type";
import Image from "next/image";

type CategoryProps = {
  categoryId: string
}

export default async function Category({ categoryId }: CategoryProps) {
  const response = await getProductsByCategory(categoryId);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Category Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {response?.data.map((product: Product) => (
          <div key={product._id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <Image
              src={product.imageCover}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-3 font-semibold">{product.title}</h3>
            <p className="text-green-600 font-bold">{product.price} EGP</p>
          </div>
        ))}
      </div>
    </div>
  );
}

