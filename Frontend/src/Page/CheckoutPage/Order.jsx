const Order = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 transition hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Your order</h2>

            {/* Header row */}
            <div className="border-b border-gray-200 pb-3 mb-4">
                <div className="flex justify-between text-sm font-medium text-gray-600">
                    <span>Product</span>
                    <span>Subtotal</span>
                </div>
            </div>

            {/* Product row */}
            <div className="flex justify-between text-sm text-gray-700 mb-2">
                <span>Refurbished Fresh Organic Bananas, Bunch 3-1</span>
                <span>$9.09</span>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between text-sm text-gray-700 mb-2">
                <span>Subtotal</span>
                <span>$9.09</span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between text-sm text-gray-700 mb-2">
                <span>Shipping</span>
                <span className="text-gray-600">Flat rate: $10.00</span>
            </div>

            {/* Total */}
            <div className="flex justify-between text-base font-bold border-t border-gray-200 pt-3 text-gray-800">
                <span>Total</span>
                <span>$19.09</span>
            </div>

            {/* Payment Options */}
            <div className="mt-6 space-y-4 text-sm">
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="radio"
                        name="payment"
                        defaultChecked
                        className="mt-1 h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span>
                        <span className="font-medium text-gray-800">Direct Bank Transfer</span>
                        <p className="text-gray-500 text-xs mt-1 leading-snug">
                            Make your payment directly into our bank account. Please use your Order
                            ID as the payment reference.
                        </p>
                    </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                    <input
                        type="radio"
                        name="payment"
                        className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span className="text-gray-800">Check Payments</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                    <input
                        type="radio"
                        name="payment"
                        className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span className="text-gray-800">Cash on Delivery</span>
                </label>
            </div>

            {/* Terms & Conditions */}
            <div className="mt-6">
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                        type="checkbox"
                        className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    I have read and agree to the website{" "}
                    <span className="text-purple-600 underline cursor-pointer">
                        terms and conditions *
                    </span>
                </label>
            </div>

            {/* Place Order Button */}
            <button className="w-full mt-6  bg-green-600 h-[46px]  text-sm  hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
                Place order
            </button>
        </div>
    );
};

export default Order;
