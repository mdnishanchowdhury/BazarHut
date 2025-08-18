import { useLoaderData } from "react-router-dom";
import { MdOutlinePayment, MdOutlineVerifiedUser } from "react-icons/md";
import RelatedProduct from "../../Components/CardDetails/RelatedProduct";
import DetailTabs from "../../Components/CardDetails/DetailTabs";
import LinkSharedDetails from "../../Components/CardDetails/LinkSharedDetails";
import ActionsDetails from "../../Components/CardDetails/ActionsDetails";
import DetailOffers from "../../Components/CardDetails/DetailOffers";
import DetailRatings from "../../Components/CardDetails/DetailRatings";

function CardDetails() {
  const data = useLoaderData();
  const { name, thumbnail, discount, summary, price, details } = data;
  const discountPercent = parseFloat(discount);
  const discountedPrice = +(price - (price * discountPercent) / 100).toFixed(2);

  return (
    <div className="max-w-[1360px] mx-auto px-3 md:px-6">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Image */}
        <div className="flex-1">
          <img src={thumbnail} alt={name}
            className="w-full h-auto max-h-[500px] object-contain rounded-lg"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-bold">{name}</h2>

          {/* Rating + Reviews */}
          <DetailRatings data={data}></DetailRatings>

          {/* Short Description */}
          <p className="text-sm md:text-base text-gray-600 pb-4">{summary.shortDescription}</p>

          {/* Prices */}
          <div className="flex items-center gap-2">
            <span className="text-red-600 text-2xl md:text-3xl font-bold">${discountedPrice}</span>
            <span className="text-gray-400 line-through text-lg md:text-xl">${price}</span>
          </div>

          {/* WhatsApp Button */}
          <div className="py-5">
            <button className="w-full md:w-auto px-6 py-3 bg-green-600 text-white text-sm font-bold rounded-md hover:bg-green-700">
              Order on WhatsApp
            </button>
          </div>

          {/* Special Offer */}
          <DetailOffers></DetailOffers>
          {/* Quantity + Actions */}
          <ActionsDetails></ActionsDetails>

          {/* Extra Info */}
          <div className="w-full border border-gray-200 rounded-md mt-8">
            <div className="text-sm text-gray-600 px-4 py-3 flex gap-2">
              <MdOutlinePayment className="w-6 h-6" />
              <p>
                <strong>Payment:</strong> {details.paymentInfo}
              </p>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="text-sm text-gray-600 px-4 py-3 flex gap-2">
              <MdOutlineVerifiedUser className="w-6 h-6" />
              <p>
                <strong>Warranty:</strong> {details.warrantyInfo}
              </p>
            </div>
          </div>
          {/* Links */}
          <LinkSharedDetails></LinkSharedDetails>
        </div>
      </div>
      {/* Tabs */}
      <DetailTabs data={data}></DetailTabs>

      <RelatedProduct></RelatedProduct>
    </div>
  );
}

export default CardDetails;
