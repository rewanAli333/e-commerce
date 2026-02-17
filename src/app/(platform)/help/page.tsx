'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faEnvelope, faPhone, faHeadset } from "@fortawesome/free-solid-svg-icons";

export default function HelpSupport() {
  return (
    <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-16">
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="h-10 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></span>
          <h1 className="text-4xl font-bold text-gray-800">
            Help & <span className="text-emerald-600">Support</span>
          </h1>
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          We are here to assist you! Browse our help sections or contact our support team for any inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-green-600" />
              FAQ
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Find answers to the most commonly asked questions about orders, shipping, returns, and payments.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-green-600" />
              Email Support
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Contact our support team via email at <span className="text-green-600 font-medium">support@example.com</span> and receive a response within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
              <FontAwesomeIcon icon={faPhone} className="text-green-600" />
              Call Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Speak directly with our support agents at <span className="text-green-600 font-medium">+20 123 456 789</span> for immediate assistance.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
              <FontAwesomeIcon icon={faHeadset} className="text-green-600" />
              Live Chat
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Start a live chat with our customer support to get quick answers to your questions in real-time.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
