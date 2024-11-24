import React from "react";

export default function Services() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="container mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center bg-white p-10 rounded-md shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Shipping Policy</h1>
          <p className="text-gray-600 leading-relaxed">
            Welcome to <span className="font-semibold">Mapbyruby</span>! We’re
            dedicated to providing you with an excellent shopping experience, including
            a reliable and efficient shipping process.
          </p>
        </section>

        {/* Service Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Shipping Destinations */}
          <div className="bg-white p-6 rounded-md shadow-md">
            
            <h2 className="text-lg font-semibold mb-5">Shipping Destinations</h2>
            <ul className="tracking-wider leading-relaxed text-gray-600">
              <li>We ship within Nigeria and worldwide.</li>
              <li>Orders within Lagos may have expedited delivery options.</li>
            </ul>
          </div>

          {/* Shipping Rates */}
          <div className="bg-white p-6 rounded-md shadow-md">
            
            <h2 className="text-lg font-semibold mb-5">Shipping Rates</h2>
            <ul className="tracking-wider leading-relaxed text-gray-600">
              <li>Standard Shipping: ₦3500 (Free for orders over ₦300,000)</li>
              <li>Express Shipping: ₦7000 (Lagos only)</li>
              <li>
                International Shipping: Calculated at checkout based on location and order size.
              </li>
            </ul>
          </div>

          {/* Processing Time */}
          <div className="bg-white p-6 rounded-md shadow-md">
            
            <h2 className="text-lg font-semibold mb-5">Processing Time</h2>
            <ul className="tracking-wider leading-relaxed text-gray-600">
              <li>Orders are processed within 5-7 business days.</li>
              <li>
                Orders placed after 3 PM on Friday or during holidays will be processed on the next business day.
              </li>
            </ul>
          </div>

          {/* Delivery Time Estimates */}
          <div className="bg-white p-6 rounded-md shadow-md">
           
            <h2 className="text-lg font-semibold mb-5">Delivery Time Estimates</h2>
            <ul className="tracking-wider leading-relaxed text-gray-600">
              <li>Standard Shipping: 3-7 business days (within Lagos).</li>
              <li>Express Shipping: 3-5 business days.</li>
              <li>
                International Shipping: 10-21 business days (depending on the destination).
              </li>
            </ul>
          </div>

          {/* Order Tracking */}
          <div className="bg-white p-6 rounded-md shadow-md">
           
            <h2 className="text-lg font-semibold mb-5">Order Tracking</h2>
            <ul className="tracking-wider leading-relaxed text-gray-600">
              <li>
                You’ll receive a confirmation email with tracking details once your order ships.
              </li>
              <li>
                Use the tracking number to follow your order’s progress on the carrier’s website.
              </li>
            </ul>
          </div>

          {/* Customs, Duties, and Taxes */}
          <div className="bg-white p-6 rounded-md shadow-md">
           
            <h2 className="text-lg font-semibold mb-5">Customs, Duties, and Taxes</h2>
            <ul className="tracking-wider leading-relaxed text-gray-600">
              <li>
                For international orders, customers are responsible for customs fees, duties, and taxes.
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-10 bg-white p-6 rounded-md shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="tracking-wider text-gray-600">
            Have questions or concerns? Contact us at{" "}
            <a
              href="mailto:mapbyruby@gmail.com"
              className="text-green-600 font-semibold"
            >
              mapbyruby@gmail.com
            </a>{" "}
            or call us at <span className="font-semibold">+2347056881825</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
