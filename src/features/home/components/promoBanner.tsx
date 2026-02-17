import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faHeadphones, faShieldHalved, faTruckFast } from "@fortawesome/free-solid-svg-icons";

export default function promoBanner() {
    return <>
        <section className="py-8 bg-gray-50">
            <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-4 bg-white rounded-xl shadow-sm hover:shadow-lg p-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 ">
                        <FontAwesomeIcon icon={faTruckFast} className="text-xl text-blue-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800 text-sm">Free Delivery</h3>
                        <p className="text-xs text-gray-500">Orders $50 or more</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-xl shadow-sm hover:shadow-lg p-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-100 ">
                        <FontAwesomeIcon icon={faClockRotateLeft} className="text-xl text-green-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800 text-sm">30 Days Return</h3>
                        <p className="text-xs text-gray-500">Satisfaction guaranteed</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-xl shadow-sm hover:shadow-lg p-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-100 ">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-xl text-orange-500" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800 text-sm">Secure Payment</h3>
                        <p className="text-xs text-gray-500">100% protected checkout</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-xl shadow-sm hover:shadow-lg p-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-100 ">
                        <FontAwesomeIcon icon={faHeadphones} className="text-xl text-purple-700" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800 text-sm">24/7 Support</h3>
                        <p className="text-xs text-gray-500">Dedicated support team</p>
                    </div>
                </div>
                </div>
                </div>
        </section>
    </>
}
