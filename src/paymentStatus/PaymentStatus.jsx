import React from 'react'

export default function PaymentStatus() {
  return (
    <div className="flex justify-center items-center h-[60vh] bg-gray-50">
  <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-lg">
    <h2 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h2>
    <p className="text-lg text-gray-700 mb-2">
      Your order will be ready within the next 3–7 working days.
    </p>
    <p className="text-lg text-gray-700 mb-6">
      Thank you for patronizing <span className="font-bold">MapByRuby</span>.
    </p>
    <button
      onClick={() => window.location.href = '/'}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300"
    >
      Continue Shopping
    </button>
  </div>
</div>

  )
}
