import { AllCategories } from "@/features/categories/server/categories.action";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default async function OurCategories() {

    const response = await AllCategories();
    return <>
        <section className="py-10" id="categories">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3 my-8">
                        <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-gray-800">Shop By
                                <span className="text-emerald-600 ms-2">Category</span>
                                </h2>
                        </div>{""}
                        <Link href={`/categories`} className="text-green-600 hover:text-green-700 font-medium flex items-center cursor-pointer">
                            View All Categories
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {response?.data.map((category) => (
                            <Link href={`/categories/${category._id}`}
                                key={category._id}
                                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer">
                                <div className="h-20 w-20 overflow-hidden bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-medium">{ category.name}</h3>
                                </Link>
                        ))}
                    </div>
                </div>
        </section>
    </>
}
