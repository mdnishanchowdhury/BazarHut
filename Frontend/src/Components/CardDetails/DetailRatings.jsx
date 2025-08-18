import { Rating } from "@smastrom/react-rating";

function DetailRatings({ data }) {
    const { rating, reviewsCount } = data;
    return (
        <div className="flex gap-2 py-4 items-center">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            <span className="text-gray-500 text-sm">({reviewsCount})</span>
        </div>
    )
}

export default DetailRatings;