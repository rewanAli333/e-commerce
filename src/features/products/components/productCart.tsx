'use client'

import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Product } from "../types/products.type";
import Image from "next/image";
import Rating from "./ui/rating";
import { addProductToCart, getLoggedUserCart } from "@/features/cart/server/cart.action";
import { toast } from "react-toastify";
import { setCartInfo } from "@/features/cart/store/cart.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";

export default function ProductCart({ info }: { info: Product }) {
    const { _id, category, title, imageCover, ratingsAverage, ratingsQuantity, price, priceAfterDiscount } = info;
    
    const onSale = priceAfterDiscount ? priceAfterDiscount < price : false;
    const disccountPercentage = priceAfterDiscount ? Math.round(((price - priceAfterDiscount) / price) * 100) : 0;
    const dispatch = useDispatch<AppDispatch>();
    const handleAddToCart = async () => {
        try {
            const response = await addProductToCart({ productId: _id });
            console.log(response);
            if (response.status === 'success') { 
                toast.success(response.message);
                const cartInfo = await getLoggedUserCart();
                dispatch(setCartInfo(cartInfo)); 
            }
        } catch (error) {
            toast.error("Failed to add product to cart"); 
        }
    };

    return <>
        <div id="product0cart"
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hver:shadow-md transition">
            <div className="relative">
                <Image className="w-full h-60 object-contain bg-white"
                    src={imageCover}
                    alt={title}
                    width={200}
                    height={60}
                />
                <div className="absolute top-3 left-3">
                    {
                        onSale&&<span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -{disccountPercentage}%
                    </span>
                    }
                </div>
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                    <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600">
                        <FontAwesomeIcon icon={ faHeart} />
                    </button>
                    <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600">
                        <FontAwesomeIcon icon={ faArrowsRotate} />
                    </button>
                    <Link href={`/products/${_id}`} className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600">
                        <FontAwesomeIcon icon={ faEye} />
                    </Link>
                </div>
            </div>
            <div className="p-4">
                <div className="text-xs text-gray-500 mb-1">{category.name}</div>
                <h3 className="font-medium mb-1 cursor-pointer">
                    <Link className="line-clamp-2" href={``}>
                        {title}
                    </Link>
                </h3>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex text-amber-400 mr-2">
                        <Rating rating={ratingsAverage}/>
                    </div>
                    <span className="text-xs text-gray-500">
                        {ratingsAverage} ({ratingsQuantity} reviews)
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-lg font-bold text-green-600">
                            {priceAfterDiscount || price}EGP
                        </span>
                        {onSale && <span className="text-sm text-gray-500 line-through ml-2">
                            {price}EGP
                        </span>}
                    </div>
                    <button className="bg-green-600 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-green-700"
                        onClick={handleAddToCart}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
            </div>
        </div>
    </>
}
