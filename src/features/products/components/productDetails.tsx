'use client'

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCartShopping, faMinus, faShareNodes, faTruckFast, faBolt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../types/products.type"
import Rating from "./ui/rating";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import { useState } from "react";
import { addProductToCart, getLoggedUserCart } from "@/features/cart/server/cart.action";
import { setCartInfo } from "@/features/cart/store/cart.slice";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { AppDispatch } from "@/store/store";

export default function ProductDetails({ product }: { product: Product }) {
    const { _id, title, description, images, category, ratingsAverage, ratingsQuantity, price, priceAfterDiscount, quantity, brand } = product;

    const onSale = priceAfterDiscount ? priceAfterDiscount < price : false;
    const discountPercentage = priceAfterDiscount ? Math.round((price - priceAfterDiscount) / price * 100) : 0;
    const [count, setCount] = useState(1);
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
        <section className="py-10" id="product-details">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/4" id="product-images">
                        <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">
                            <ImageGallery items={images.map((image) => {
                                return {
                                    original: image,
                                    thumbnail: image
                                }
                            })}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                showNav={false}
                            />
                        </div>
                    </div>
                    <div id="product-info" className="lg:w-3/4">
                        <div className="bg-white rounded-xl shadow-sm p-6">

                            <div className="flex flex-wrap gap-2 mb-4">
                                <Link href={'/categories'} className="bg-gray-50 text-sm px-3 py-1.5 rounded-full hover:bg-gray-100 transition">
                                    {category?.name}
                                </Link>
                                <span className="bg-gray-100 text-gray-700 text-xs px-1.5 rounded-full flex items-center justify-center ">
                                    {brand?.name}
                                </span>
                            </div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                                {title}
                            </h1>
                            <div className="flex items-center  flex-nowrap gap-2 mb-4">
                                <Rating rating={ratingsAverage} />
                                <span className="text-sm text-gray-600 felex">
                                    {ratingsAverage} ({ratingsQuantity} reviews)
                                </span>
                            </div>
                            <div className="flex items-center flex-wrap gap-3 mb-6">
                                <span className="text-3xl font-bold text-gray-900">
                                    {priceAfterDiscount || price}EGP
                                </span>
                                {onSale && (
                                    <>
                                        <span className="text-lg text-gray-400 line-through">
                                            {price}
                                        </span>
                                        <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                                            save{discountPercentage}
                                        </span>
                                    </>
                                )}
                            </div>

                            <div className="border-t border-gray-100 pt-5 mb-6">
                                <p className="text-gray-600 leading-relaxed">
                                    {description}
                                </p>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Quantity
                                </label>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center  border-2 border-gray-200 rounded-lg overflow-hidden">
                                        <button id="increase-qty" onClick={()=>{setCount(count-1)}}
                                            className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition disabled:opacity-5">
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <input type="number" min={1} value={count} onChange={(e)=>{setCount(+e.target.value)}}
                                            className="w-16 text-center border-0 focus-ring-0 foucs-outline-none text-lg font-medium"
                                        id="quantity"/>
                                        <button id="increase-qty" onClick={()=>{setCount(count+1)}}
                                            className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition disabled:opacity-5">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                    <span className="text-sm text-gray-500">
                                        {quantity} available
                                    </span>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Total Price: </span>
                                    <span className="text-2xl font-bold text-green-600">
                                        {count * (priceAfterDiscount || price)} EGP
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                <button id="add-to-cart" className={`flex-1 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-green-700 active:scale-[0.98] transition  bg-green-600`} onClick={handleAddToCart}>
                                    <>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                        Add to Cart
                                    </>
                                </button>
                                <button id="buy-now" className=" border border-gray-300 flex-1 text-gray-900 py-3.5 px-6 rounded-xl font-medium hover:text-white hover:bg-gray-900 active:scale-[0.98] transition">
                                    <>
                                        <FontAwesomeIcon icon={faBolt} />
                                        Buy Now
                                    </>
                                </button>
                            </div>
                            <div className="flex gap-3 mb-6">
                                <button id="wishlist-button" className={`flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2
                                    border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-600`}>
                                    <FontAwesomeIcon icon={faHeart}/>
                                </button>
                                <button className="border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-green-300 hover:text-green-600">
                                    <FontAwesomeIcon icon={faShareNodes}/>
                                </button>
                            </div>
                            <div className="border-t border-gray-100 pt-6">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className=" flex h-10 w-10 bg-gray-100 text-green-600 rounded-full items-center justify-center">
                                            <FontAwesomeIcon icon={faTruckFast} />
                                        </div>
                                    
                            </div>
                                </div>
                                
                            </div>
                </div>
                </div>
                </div>
                </div>
        </section>
    </>
}