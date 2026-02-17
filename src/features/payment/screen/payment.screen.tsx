'use client'

import { faArrowLeft, faBox, faReceipt, faShieldAlt, faShoppingBag, faTruck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { shippingAddressSchema, shippingAddressValues } from "../schema/payment.schema";
import ShippingForm from "../components/shippingForm";
import PaymentMethods from "../components/paymentMethods";
import { useState } from "react";
import { CreateCashOrder, CreateOnlineOrder } from "../server/payment.action";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { toast } from "react-toastify";
import {useRouter} from "next/navigation";
import { clearCart } from "@/features/cart/store/cart.slice";



export default function PaymentScreen() {
    const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card'>('cash');
    const { cartId } = useAppSelector((state) => state.cart);
    const router = useRouter();
    const totalPrice = useAppSelector((state) => state.cart.totalCartPrice);
    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            details: '',
            phone: '',
            city: ''
        },
        resolver: zodResolver(shippingAddressSchema)
    });

    const onSubmit: SubmitHandler<shippingAddressValues> = async (values) => {
        try {
            if (!cartId) {
                return;
            }
            if (paymentMethod === 'cash') {
                const response = await CreateCashOrder({ cartId, shippingAddress: values });
                console.log(response);
                if (response.status === 'success') {
                     dispatch(clearCart());
                    toast.success('Order created successfully');
                    setTimeout(() => { router.push("/") }, 2000);
                        
                }
            } else {
                const response = await CreateOnlineOrder({ cartId, shippingAddress: values, url:location.origin });
                console.log("ONLINE RESPONSE:", response);
                if (response.status === 'success') {
                    dispatch(clearCart());
                    toast.loading('Redirecting to payment gateway');
                    setTimeout(() => {
                        location.href = response.session.url
                     }, 2000);
                }
            }
        } catch (error) {
            console.log("ERROR:", error);
    
        }
    }



    return <>
        <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-8">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                        <Link href={`/`} className="hover:text-green-600 transition">Home</Link>
                        <span className="text-gray-300">/</span>
                        <Link href={`cart`} className="hover:text-green-600 transition">Cart</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-900 font-medium">Payment</span>
                    </nav>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                                <span className="bg-linear-to-br from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center">
                                    <FontAwesomeIcon icon={faReceipt}/>
                                </span>
                                Complete your order
                            </h1>
                            <p className="text-gray-500 mt-2">
                                Review your items and complete your purchase
                            </p>
                        </div>
                        <Link href={`/cart`} className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-lg">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            Back to cart
                        </Link>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            
                            <ShippingForm register={register} errors={errors} />
                            <PaymentMethods selected={paymentMethod} onChange={setPaymentMethod}/>
                            
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
                                <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                        Order Summary
                                    </h2>
                                    <p className="text-gray-100 text-sm mt-1">

                                    </p>
                                </div>

                                <div className="p-1">
                                    <div className="space-y-3 max-h-56 overflow-y-auto mb-1 pr-1">
                                        <div className="flex flex-col items-center gap-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">

                                            {/* <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate">

                                                </p>
                                            </div> */}
                                            <hr className="border-gray-100 my-4" />
                                            <div className="space-y-2 flex items-center flex-col">
                                                <div className="flex justify-between text-gray-600">
                                                    <span>Subtotal</span>
                                                    <span className="font-medium">EGP</span>
                                                </div>
                                                <div className="flex justify-between text-gray-600">
                                                    <span className="flex items-center gap-2">
                                                        <FontAwesomeIcon icon={faTruck} className="text-gray-400" />
                                                        Shipping
                                                    </span>
                                                    {true?(
                                                    <span className="text-green-600 font-semibold">
                                                        Free
                                                    </span>):(
                                                        <span className="font-medium">EGP</span>
                                                    )}
                                                </div>

                                                <hr className="border-gray-100" />
                                                <div className="flex justify-between items-center">
                                                    <span className="text-lg font-bold text-gray-900">
                                                        Total
                                                    </span>
                                                    
                                                    <div className="text-right">
                                                        <span className="text-2xl font-bold text-green-600">
                                                            {totalPrice.toLocaleString()}
                                                        </span>
                                                        <span className="text-sm text-gray-500 ml-1">EGP</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <button type="submit" className="w-full mt-6 bg-linear-to-r from-green-600 to-green-700 text-white py-4 rounded-xl">
                                                <>
                                                <FontAwesomeIcon icon={faShieldAlt} />
                                                    Proceed to Payment
                                                    </>
                                            </button>

                                            <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
                                                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="text-green-500" />
                                                    <span>Secure</span>
                                                </div>
                                                <div className="w-px h-4 bg-gray-200"></div>
                                                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                    <FontAwesomeIcon icon={faTruck} className="text-blue-500" />
                                                    <span>Fast Delivery</span>
                                                </div>
                                                <div className="w-px h-4 bg-gray-200"></div>
                                                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                    <FontAwesomeIcon icon={faBox} className="text-orange-500" />
                                                    <span>Easy Returns</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}
