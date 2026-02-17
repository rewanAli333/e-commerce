'use client'

import { AppState, useAppSelector } from "@/store/store";
import { faArrowLeftLong, faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSelector } from "react-redux";
import CartItem from "../components/cartItem";
import CartSummary from "../components/cartSummary";



export default function CartScreen() {
    const { numOfCartItems, products, totalCartPrice } = useAppSelector((state) => state.cart);



    return <>
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Link href={'/'} className="hover:text-green-600 transition">
                            Home
                        </Link>
                        <span>/</span>
                        <Link href={'/cart'} className="hover:text-green-600 transition">
                            Shopping cart
                        </Link>
                    </nav>

                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                                <span className="bg-linear-to-r from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                                    <FontAwesomeIcon icon={faShoppingCart}/>
                                </span>
                                Shopping Cart
                            </h1>
                            <p className="text-gray-500 mt-2">
                                You have {""}
                                <span className="font-semibold text-green-600">
                                    {numOfCartItems}
                                    {numOfCartItems === 1? "item" :"items"}
                                </span>
                                {""} in your cart
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
                    <div className="space-y-4">
                        {products.map((product) => <CartItem key={product._id} info={product} />)}
                    </div>
                        <div className="mt-6 pt-6 border-gray-200 flex items-center justify-between">
                            <Link href={'/'} className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-2">
                                
                                <FontAwesomeIcon icon={faArrowLeftLong} className="me-0.5" />
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                    <CartSummary totalCartPrice={totalCartPrice}  numOfCartItems={numOfCartItems}/>
                </div>
                </div>
                
                
            </div>
        </div>
    </>
}