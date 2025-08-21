import { MdFavorite } from "react-icons/md";
import useFavoritedCards from "../../Hook/useFavoritedCards";
import WishlistCard from "./WishlistCard";
function Wishlist({ }) {
    const [favoritCart] = useFavoritedCards();

    return (
        <div className="relative cursor-pointer dropdown dropdown-end">
            {/* Trigger button */}
            <label tabIndex={0} className="btn btn-ghost btn-circle relative">
                <MdFavorite className="w-6 h-6 text-red-500" />
                {favoritCart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                        {favoritCart.length}
                    </span>
                )}
            </label>

            {/* Dropdown menu */}
            <div
                tabIndex={0}
                className="dropdown-content bg-base-100 rounded-box z-10 w-80 max-h-96 overflow-y-auto p-3 shadow-lg"
            >
                {favoritCart.length === 0 ? (
                    <p className="text-gray-400 text-sm text-center">No items in your wishlist</p>
                ) : (
                    favoritCart.map((item, index) => (
                        <WishlistCard key={index} item={item}></WishlistCard>
                    ))
                )}
            </div>
        </div>
    );
}
export default Wishlist;
