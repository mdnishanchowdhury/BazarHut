const BillingForm = () => {
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 transition hover:shadow-xl">
      {/* Coupon notice */}
      <div className="bg-gray-100 border border-gray-200 p-3 rounded-lg mb-4">
        <p className="text-sm text-gray-700">
          <span className="text-purple-600 cursor-pointer hover:underline">
            Have a coupon? Click here to enter your code
          </span>
        </p>
      </div>

      {/* Free shipping banner */}
      <div className="bg-red-50 border border-red-300 text-red-700 p-3 rounded-lg mb-6 text-sm font-medium">
        🚚 Add <strong>$299.71</strong> to cart and get free shipping!
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Billing details
      </h2>

      <form className="space-y-4">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First name *
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last name *
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country *
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Building / House No / Floor / Street *
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Colony / Suburb / Locality / Landmark *
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Region
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* City / Area / Address */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City *
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Area *
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address *
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address *
          </label>
          <input
            type="email"
            className="border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Order notes (optional)
          </label>
          <textarea
            rows={4}
            className="border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-purple-500 outline-none"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;
