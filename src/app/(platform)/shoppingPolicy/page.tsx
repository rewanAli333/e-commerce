'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faBoxOpen, faUndoAlt, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

export default function ShoppingPolicy() {
  return (
    <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-16">
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="h-10 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></span>
          <h1 className="text-4xl font-bold text-gray-800">
            Shopping <span className="text-emerald-600">Policy</span>
          </h1>
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Learn about our shopping policies, including shipping, returns, and security to ensure a smooth and safe shopping experience.
        </p>

        <div className="space-y-8">

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
              <FontAwesomeIcon icon={faTruckFast} className="text-green-600" />
              Shipping Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We offer fast and reliable shipping. Orders are processed within 1-2 business days and delivered depending on your location. Free shipping on orders above a certain value.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
              <FontAwesomeIcon icon={faBoxOpen} className="text-green-600" />
              Packaging & Delivery
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All products are carefully packed to prevent damage during transit. You will receive a tracking number to follow your order’s progress.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
              <FontAwesomeIcon icon={faUndoAlt} className="text-green-600" />
              Return & Refund
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you are not satisfied with your purchase, you can return it within 7 days. Refunds will be processed within 3-5 business days after receiving the returned item.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
              <FontAwesomeIcon icon={faShieldAlt} className="text-green-600" />
              Security & Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We prioritize your security. All transactions are protected with 256-bit SSL encryption. Your personal information is never shared with third parties.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
