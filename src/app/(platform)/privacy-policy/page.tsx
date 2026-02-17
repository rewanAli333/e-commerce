'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faFileContract } from "@fortawesome/free-solid-svg-icons";

export default function PolicyPrivacy() {
  return (
    <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-16">
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="h-10 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></span>
          <h1 className="text-4xl font-bold text-gray-800">
            Privacy & <span className="text-emerald-600">Policy</span>
          </h1>
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Your privacy is important to us. Please read our policies carefully to understand how we handle your data.
        </p>

        <div className="space-y-8">
          
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
              <FontAwesomeIcon icon={faShieldAlt} className="text-green-600" />
              Data Collection
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We collect personal information such as your name, email, and address to process orders and improve your experience.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
              <FontAwesomeIcon icon={faFileContract} className="text-green-600" />
              Data Usage
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your data is used to process transactions, provide customer support, and send promotional information if you opted-in. We never sell your personal data to third parties.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
              <FontAwesomeIcon icon={faShieldAlt} className="text-green-600" />
              Security Measures
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard measures to protect your personal information, including SSL encryption and secure servers.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
              <FontAwesomeIcon icon={faFileContract} className="text-green-600" />
              Cookies & Tracking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our website uses cookies to enhance user experience, analyze traffic, and provide personalized content. You can manage your preferences in your browser settings.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
              <FontAwesomeIcon icon={faShieldAlt} className="text-green-600" />
              User Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to access, correct, or delete your personal data. Contact us via the Contact Us page for any inquiries regarding your information.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
