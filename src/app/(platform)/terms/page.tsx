
export default function TermsPage() {
  return <>
    
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4">
            <span className="h-10 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></span>
            <h1 className="text-4xl font-bold text-gray-800">
              Terms & <span className="text-emerald-600">Conditions</span>
            </h1>
          </div>

          <p className="text-gray-500 mt-4">
            Please read these terms carefully before using our website.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-8">

          <div>
            <h2 className="text-xl font-semibold text-emerald-600 mb-3">
              1. General Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using this website, you accept and agree to be 
              bound by the terms and provisions of this agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-emerald-600 mb-3">
              2. Products & Pricing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All products are subject to availability. We reserve the right 
              to change prices at any time without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-emerald-600 mb-3">
              3. Payments
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We offer secure online payments and cash on delivery. All online 
              transactions are processed through secure payment gateways.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-emerald-600 mb-3">
              4. Shipping & Delivery
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Delivery times may vary depending on your location. We are not 
              responsible for delays caused by courier services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-emerald-600 mb-3">
              5. Returns & Refunds
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Items can be returned within 14 days of receiving the order 
              provided they are unused and in original condition.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-emerald-600 mb-3">
              6. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms, please contact us.
            </p>
          </div>

        </div>
      </div>
    </section>
  </>
}
