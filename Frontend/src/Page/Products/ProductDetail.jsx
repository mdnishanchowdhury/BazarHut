import { useState } from "react";
import { Minus, Plus, ShoppingCart, Zap } from "lucide-react";

function ProductDetailUI() {
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Banana_Bunch.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Banana_on_white_background.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-6xl mx-auto">
      {/* Left: Product Images */}
      <div className="flex flex-col space-y-4">
        {/* Main Image */}
        <div className="relative border rounded-2xl overflow-hidden shadow-md">
          <img
            src={mainImage}
            alt="Bananas"
            className="w-full h-auto object-cover"
          />
          <span className="absolute top-3 left-3 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
            56% OFF
          </span>
          <span className="absolute top-3 right-3 bg-green-600 text-white text-sm font-bold px-2 py-1 rounded">
            ORGANIC
          </span>
        </div>

        {/* Thumbnail Images */}
        <div className="flex space-x-2">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumbnail ${i}`}
              className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                mainImage === img ? "border-green-600" : "border-gray-200"
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold">
          Marketside Fresh Organic Bananas, Bunch
        </h2>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500">★★★☆☆</span>
          <span className="text-gray-600 text-sm">(2 reviews)</span>
        </div>

        {/* Description */}
        <p className="text-gray-600">
          Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
          malesuada tincidunt.
        </p>

        {/* Price */}
        <div className="flex items-baseline space-x-3">
          <span className="text-2xl font-bold text-red-600">$0.89</span>
          <span className="text-gray-400 line-through">$1.99</span>
        </div>

        {/* Countdown */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-red-600">Special Offer :</span>
          <div className="flex space-x-2 text-white text-sm font-semibold">
            {["81", "06", "50", "02"].map((time, i) => (
              <span key={i} className="bg-gray-800 px-2 py-1 rounded-lg">
                {time}
              </span>
            ))}
          </div>
        </div>

        {/* Quantity UI (static) */}
        <div className="flex items-center space-x-3">
          <button className="border rounded-md p-2 hover:bg-gray-100">
            <Minus size={16} />
          </button>
          <span className="text-lg font-semibold">1</span>
          <button className="border rounded-md p-2 hover:bg-gray-100">
            <Plus size={16} />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow">
            <ShoppingCart size={18} /> <span>Add to Cart</span>
          </button>
          <button className="flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg shadow">
            <Zap size={18} /> <span>Buy Now</span>
          </button>
        </div>

        {/* Extra Info */}
        <div className="text-sm text-gray-600 space-y-1 border-t pt-3">
          <p>
            <strong>Payment:</strong> Payment upon receipt of goods, Google Pay,
            Online card, +5% discount in case of payment
          </p>
          <p>
            <strong>Warranty:</strong> The Consumer Protection Act does not
            provide for the return of this product of proper quality.
          </p>
        </div>

        {/* Links */}
        <div className="flex space-x-4 text-sm text-gray-500 pt-3">
          <button className="hover:text-black">♡ Add to wishlist</button>
          <button className="hover:text-black">↗ Share this Product</button>
          <button className="hover:text-black">⇄ Compare</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailUI;
