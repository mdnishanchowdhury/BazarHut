import { useState, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { IoCart, IoHeart, IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAuth from "../../Hook/useAuth";
import useFavoritedCards from "../../Hook/useFavoritedCards";

function Card({ item }) {
    const { _id, thumbnail, name, rating, price, reviewsCount, discount, quantity } = item;
    const [isFavorite, setIsFavorite] = useState(false);
    const axiosPublic = useAxiosPublic();
    const discountPercent = parseFloat(discount);
    const { user } = useAuth();
    const [favorites, refetch] = useFavoritedCards();  

    // Calculate discounted price
    const discountedPrice = +(price - (price * discountPercent) / 100).toFixed(2);

    // Stock status
    const stockStatus = quantity > 0 ? "In Stock" : "Stock Out";
    const stockColor = quantity > 0 ? "text-green-600" : "text-red-600";


    useEffect(() => {
        if (favorites) {
            const alreadyFav = favorites.some(fav => fav.favoritId === _id && fav.email === user?.email);
            setIsFavorite(alreadyFav);
        }
    }, [favorites, _id, user]);

    // btn Favorite 
    const handleCardSave = () => {
        if (!isFavorite) {
            const favorit = {
                favoritId: _id,
                email: user.email,
                name, rating, price, reviewsCount, discount, quantity
            };
            axiosPublic.post('/favorites', favorit)
                .then(() => {
                    alert('success add');
                    refetch(); 
                });
        } else {
            axiosPublic.delete(`/favorites/${_id}?email=${user.email}`)
                .then(() => {
                    alert('deleted');
                    refetch();
                });
        }
    };

    return (
        <div className="w-full md:w-[209px] h-[360px] border border-[#E5E7EB] rounded-lg my-2 
                        transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ">
            <div className="flex flex-col justify-center pt-6 relative items-center">

                {/* Discount */}
                <div className="absolute top-3 left-3 w-[38px] h-[24px] rounded-[14px_40px_40px_14px] 
                                    bg-[#DC2626] text-white text-xs flex items-center justify-center
                                    animate-pulse">
                    {discount}%
                </div>

                {/* Favorite Button */}
                <button
                    onClick={handleCardSave}
                    className="absolute top-3 right-3 text-gray-600 hover:text-orange-300 transition-transform transform hover:scale-110"
                >
                    {isFavorite ? <IoHeart size={24} className="text-red-500" /> : <IoHeartOutline size={24} />}
                </button>

                {/* Product Image */}
                <img
                    src={thumbnail}
                    alt={name}
                    className="w-[151px] h-[151px] object-cover pt-5 
                               transition-transform duration-300 hover:scale-110"/>

                {/* Product Info */}
                <div className="pt-5 pl-3.5 transition-opacity duration-300 hover:opacity-90">
                    <h2 className="text-sm font-medium">{name}</h2>

                    {/* Rating + Reviews */}
                    <div className="flex gap-2 pt-2.5 items-center">
                        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                        <span className="text-gray-500 text-sm">({reviewsCount})</span>
                    </div>

                    {/* Prices */}
                    <div className="flex items-center gap-2 pt-2.5">
                        <span className="text-red-600 text-[22px] font-bold">${discountedPrice}</span>
                        <span className="text-gray-400 line-through text-sm text-[16px] font-medium">${price}</span>
                    </div>

                    {/* button */}
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
            </div>
        </div>
    );
}

export default Card;
