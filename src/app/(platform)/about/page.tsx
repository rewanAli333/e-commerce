'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faLightbulb, faHandshake } from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="h-10 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></span>
          <h1 className="text-4xl font-bold text-gray-800">
            About <span className="text-emerald-600">Us</span>
          </h1>
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          We are a team of passionate individuals dedicated to delivering the best e-commerce experience. 
          Our mission is to make online shopping secure, fast, and enjoyable for everyone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-lg transition">
            <div className="bg-linear-to-r from-green-500 to-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Team</h3>
            <p className="text-gray-500 text-sm">
              A skilled and motivated team working together to provide top-notch solutions and support.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-lg transition">
            <div className="bg-linear-to-r from-green-500 to-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-500 text-sm">
              We constantly improve our platform with new ideas and technologies to enhance your shopping experience.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-lg transition">
            <div className="bg-linear-to-r from-green-500 to-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Trust & Security</h3>
            <p className="text-gray-500 text-sm">
              Your security is our top priority. Shop confidently with SSL encryption and safe payment options.
            </p>
          </div>

        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Stay updated with our latest products, offers, and tips for a seamless shopping experience.
          </p>
        </div>
      </div>
    </div>
  )
}
