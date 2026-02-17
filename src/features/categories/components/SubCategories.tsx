import {  getAllCategories} from "@/features/categories/server/categories.action";
// import Image from "next/image";
import Link from "next/link";

export default async function SubCategories() {

    const response = await getAllCategories();

    return (
        <section className="py-10" id="categories">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {response?.data.map((category) => (
                        <Link
                            href={`/categories/${category._id}`}
                            key={category._id}
                            className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition"
                        >
                            <div className="h-20 w-20 overflow-hidden bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                                {/* <Image
                                    width={300}
                                    height={300}
                                    src={category.updatedAt}
                                    alt={category.name}
                                    className="w-full h-full object-cover"
                                /> */}
                            </div>

                            <h3 className="mt-3 font-medium">
                                {category.name}
                            </h3>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
