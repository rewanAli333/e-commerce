import {  faClock, faClockRotateLeft, faShieldAlt, faShoppingBag, faTag, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function CartSummary({ totalCartPrice, numOfCartItems }: { totalCartPrice: number, numOfCartItems: number }) {
    
    const subtotal = totalCartPrice;
    const shipping = subtotal > 500 ? 0 : 50;
    const total = Math.round(shipping + subtotal)

    return <>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
        <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FontAwesomeIcon icon={faShoppingBag} />
                Order Summary
            </h2>
            <p className="text-gray-100 text-sm mt-1">
                you have {numOfCartItems} {numOfCartItems === 1 ? "item" : "items"} in your cart
            </p>
        </div>
            
        <div className="p-6 space-y-5">
            {shipping > 0 && (
                <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon icon={faTruck} className="text-orange-500" />
                        <span className="text-sm font-medium text-gray-700">
                            Add {500 - subtotal} EGP for free shipping
                        </span>
                    </div>
                    <div className="h-2 bg-orang-100 rounded-full overflow-hidden">
                        <div className="h-full bg-linear-to-r from-orange-400 to-amber-400 rounded-full transition-colors"
                            style={{ width: `${(subtotal / 500) * 100}%` }}></div>
                    </div>
                </div>
            )}
            {shipping === 0 && (
                <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <FontAwesomeIcon icon={faTruck} className="text-green-600" />
                        </div>

                        <div>
                            <p className="font-semibold text-green-700">Free shipping</p>
                            <p className="text-sm text-green-600">
                                You qualify for free delivery
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">{subtotal}EGP</span>
                </div>

                <div className="flex justify-between text-gray-600">
                    <span>shipping</span>
                    {shipping === 0 ? (
                        <span className="font-medium text-green-600">Free</span>
                    ) : (
                        <span className="font-medium text-gray-900">50</span>
                    )}
                </div>

                <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between items-baseline">
                        <span className="text-gray-900 font-semibold">Total</span>
                        <div className="text-right">
                            <span className="text-2xl font-bold text-gray-900">{total}</span>
                            <span className="text-sm text-gray-500 ml-1">EGP</span>
                        </div>
                    </div>
                </div>
            </div>
        
            <button className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl">
                <FontAwesomeIcon icon={faTag} />
                <span className="text-sm font-medium">Apply promo code</span>
            </button>
            
            <Link href={'/payment'}
                className="w-full flex items-center justify-center bg-linear-to-r from-green-600 to-green-700 text-white py-4 px-6">
                <FontAwesomeIcon icon={faClock} />
                <span>Secure Checkout</span>
            </Link>
        
            <div className="flex items-center justify-center gap-4 py-2">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-green-500" />
                    <span>Secure Payment</span>
                </div>
                <div className="w-px h-4 bg-gray-200"></div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                    <FontAwesomeIcon icon={faClockRotateLeft} className="text-orange-500" />
                    <span>Easy Return</span>
                    </div>
                    <div className="w-px h-4 bg-gray-200"></div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                    <FontAwesomeIcon icon={faTruck} className="text-blue-500" />
                    <span>Fast Delivery</span>
                    </div>
            </div>
            </div>
            </div>
</>
}



