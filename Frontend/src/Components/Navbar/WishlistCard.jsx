import { MdStar } from 'react-icons/md'
import { IoCart } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function WishlistCard({ item }) {
  const { _id, name, price, discount, quantity, reviewsCount, rating } = item;

  // Stock status
  const stockStatus = quantity > 0 ? "In Stock" : "Stock Out";
  const stockColor = quantity > 0 ? "text-green-600" : "text-red-600";

  return (
    <div className="border border-[#E5E7EB] rounded-lg p-3 mb-3 shadow-sm hover:shadow-md transition flex flex-col gap-2">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-sm">{name}</h3>
        <span className="text-gray-500 text-xs">Qty: {quantity}</span>
      </div>

      {/* Price & discount */}
      <p className="text-gray-500 text-xs">Price: ${price}</p>
      <p className="text-gray-500 text-xs">Discount: {discount}%</p>

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-500 text-sm">
        {Array.from({ length: rating }).map((_, idx) => (
          <MdStar key={idx} />
        ))}
        <span className="text-gray-400 text-xs">({reviewsCount})</span>
      </div>

      {/* Add to cart button & stock status */}
      <div className="flex items-center gap-2 mt-3">
        <Link to={`/detail/${_id}`}>
          <button className="bg-green-600 p-2 rounded-md hover:bg-green-700 transition-transform transform hover:scale-110">
            <IoCart size={20} className="text-white" />
          </button>
        </Link>
        <span className={`text-sm font-bold ${stockColor}`}>
          {stockStatus}
        </span>
      </div>
    </div>
  )
}
export default WishlistCard;
