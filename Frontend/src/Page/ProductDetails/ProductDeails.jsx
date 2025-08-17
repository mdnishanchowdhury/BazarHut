import { Rating } from "@smastrom/react-rating";
import { Minus, Plus } from "lucide-react";
import { useLoaderData } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";
import { IoGitCompareOutline } from "react-icons/io5";

function ProductDetails() {
  const data = useLoaderData();
  const { name, thumbnail, discount, rating, reviewsCount, summary, price, category, quantity, details, specialOfferCountdown, paymentInfo, warrantyInfo } = data;

  const discountPercent = parseFloat(discount);
  const discountedPrice = +(price - (price * discountPercent) / 100).toFixed(2);

  return (
    <div className="flex items-center ">
      <div>
        <img src={thumbnail} alt="" className="w-660px h-[660px]" />
      </div>
      <div className="">
        <h2 className="text-[38px] font-bold">{name}</h2>
        {/* Rating + Reviews */}
        <div className="flex gap-2 py-5 items-center">
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          <span className="text-gray-500 text-sm">({reviewsCount})</span>
        </div>
        <p className="text-[14px] text-[#4B5563] font-normal pb-5 ">{summary.shortDescription}</p>
        {/* Prices */}
        <div className="flex items-center gap-2 pt-2.5">
          <span className="text-red-600 text-3xl font-bold">${discountedPrice}</span>
          <span className="text-gray-400 line-through text-xl font-medium">${price}</span>
        </div>
        <div className="py-5">
          <button className="btn btn-wide bg-[#16A34A] w-[167] h-[46px] text-white text-[14px] font-bold">Order on WhatsApp</button>
        </div>

        <div className="w-[660px] h-[66px] bg-[#FFEDD5] flex items-center px-4 rounded-md">
          <span className="text-[13px] font-bold text-[#EA580C] pr-4">Special Offer :</span>

          <div className="flex gap-1">
            <span className="bg-[#FFEDD5] border border-[#FED7AA] text-[#C2410C] w-[34px] h-[34px] flex items-center justify-center rounded-md">50</span>
            <span className="bg-[#FFEDD5] border border-[#FED7AA] text-[#C2410C] w-[34px] h-[34px] flex items-center justify-center rounded-md">02</span>
            <span className="bg-[#FFEDD5] border border-[#FED7AA] text-[#C2410C] w-[34px] h-[34px] flex items-center justify-center rounded-md">5</span>
            <span className="text-[#C2410C] flex items-center justify-center">:</span>
            <span className="bg-[#FFEDD5] border border-[#FED7AA] text-[#C2410C] w-[34px] h-[34px] flex items-center justify-center rounded-md">02</span>
          </div>

          <span className="text-xs font-normal text-[#6B7280] pl-4">Remains until the end of the offer.</span>
        </div>

        {/* button */}
        <div className="space-x-2.5 mt-5 flex">
          {/* Quantity UI (static) */}
          <div className="flex items-center space-x-3 border border-[#E5E7EB] w-[160px] h-[46px] rounded-md px-2">
            <button className="border rounded-md p-2 hover:bg-gray-100">
              <Minus size={16} />
            </button>
            <span className="text-lg font-semibold">1</span>
            <button className="border rounded-md p-2 hover:bg-gray-100">
              <Plus size={16} />
            </button>
          </div>
          <button className="btn btn-wide bg-[#16A34A] w-[160] h-[46px] text-white text-[14px] font-bold">Add to cart</button>
          <button className="btn btn-wide bg-[#212529] w-[160] h-[46px] text-white text-[14px] font-bold">Buy Nowp</button>
        </div>

        {/* Extra Info */}
        <div className="w-[660px] border border-[#E5E7EB] rounded-md mt-8">
          <div className="text-sm text-gray-600 px-4 py-3">
            <p className="flex gap-2">
              <MdOutlinePayment className="w-[26px] h-[26px]" /> <strong>Payment:</strong> {details.paymentInfo}
            </p>
          </div>

          <div className="border-t border-[#E5E7EB]"></div>

          <div className="text-sm text-gray-600 px-4 py-3">
            <p className="flex gap-2">
              <MdOutlineVerifiedUser className="w-[26px] h-[26px]" /> <strong>Warranty:</strong> {details.warrantyInfo}
            </p>
          </div>
        </div>
        {/* Links */}
        <div className="flex space-x-6 text-sm text-gray-500 pt-7">
          {/* Wishlist */}
          <button className="flex items-center gap-2 px-3 py-2 border border-[#E5E7EB] rounded-md hover:text-black">
            <CiHeart size={18} />
            <span className="text-[13px] font-medium">Add to wishlist</span>
          </button>

          {/* Share */}
          <button className="flex items-center gap-2 px-3 py-2 border border-[#E5E7EB] rounded-md hover:text-black">
            <RiShare2Line size={18} />
            <span>Share this Product</span>
          </button>

          {/* Compare */}
          <button className="flex items-center gap-2 px-3 py-2 border border-[#E5E7EB] rounded-md hover:text-black">
            <IoGitCompareOutline size={18} />
            <span>Compare</span>
          </button>
        </div>




      </div>
    </div>
  );
}

export default ProductDetails;
