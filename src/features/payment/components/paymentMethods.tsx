'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faCheck, faCreditCard, faWallet, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

interface PaymentMethodsProps{
    onChange: (method: "cash" | "card") => void;
    selected: "cash" | "card";
}
export default function PaymentMethods({onChange, selected } :PaymentMethodsProps) {
    
    return <>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <FontAwesomeIcon icon={faWallet} />
                    Payment Method
                </h2>
                <p className="text-gray-100 text-sm mt-1">
                    Choose how you d like to pay
                </p>
            </div>

            <div className="p-6 space-y-4">
                <button className={`w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group border-gray-200 hover:border-green-200 hover:bg-gray-50 ${
                    selected === "cash"
                    ? "border-green-500 bg-linear-to-r from-gray-50 to-blue-50 shadow-sm"
                    :"border-gray-200 hover:border-green-200 hover:bg-gray-50"
                    } `}
                    onClick={() => {
                        onChange("cash");
                    }} type="button">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                         selected === "cash"
                    ? "bg-linear-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/30" 
                    :"bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                        }`}>
                        <FontAwesomeIcon icon={faMoneyBill} className="text-xl"/>
                    </div>
                    <div className="flex-1 text-left">
                        <h3 className={`font-bold text-gray-900`}>Cash on delivery</h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                            Pay when your order arrives at your doorstep
                        </p>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        selected === "cash"
                        ? "bg-green-600 text-white" 
                        :"border-2 border-gray-200"
                        }`}>
                        {selected === "cash" && (
                            <FontAwesomeIcon icon={faCheck} className="text-xs"/>
                        )}
                    </div>
                </button>

                <button type="button" onClick={() => {
                    onChange("card");
                }}
                    className={`w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group ${
                        selected === "card"
                        ? "border-green-500 lg-linear-to-r from-green-50 to-blue-50 shadow-sm" 
                        :"bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                        }`}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                         selected === "card"
                    ? "bg-linear-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/30" 
                    :"bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                        }`}>
                        <FontAwesomeIcon icon={faCreditCard} className="text-xl"/>
                    </div>
                    <div className="flex-1 text-left">
                        <h3 className={`font-bold text-gray-900`}>Pay Online</h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                            Secure payment with creadit card via strip
                        </p>
                        <div className="flex items-center gap-2 mt-2">

                        </div>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        selected === "card"
                    ? "bg-green-600 text-white" 
                        :"border-2 border-gray-200"
                        }`}>
                        {selected === "card" && (
                            <FontAwesomeIcon icon={faCheck} className="text-xs"/>
                        )}
                    </div>
                </button>
                
                <div className="flex items-center gap-3 p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-xl border border-gray-100">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-green-600" />
                    <div>
                    <p className="text-sm font-medium text-green-800">
                        Secure & Encrypted
                    </p>
                    <p className="text-xs text-green-600 mt-0.5">
                        your payment info is protected with 256-bit SSL encryption
                    </p>
                </div>
                </div>
                
            </div>
        </div>
    </>
}
