import React from "react";
import { MdFavorite } from "react-icons/md";

function FavoriteBtn({ favoritCart }) {
    return (
        <div className="relative cursor-pointer dropdown dropdown-bottom">
            {/* Trigger button */}
            <label tabIndex={0} className="btn btn-ghost btn-circle relative">
                <MdFavorite className="w-6 h-6 text-red-500" />

                {/* Badge for count */}
                {favoritCart?.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                        {favoritCart.length}
                    </span>
                )}
            </label>

            {/* Dropdown menu */}
            <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
            >
                {
                    favoritCart.map(store => (
                        <li><a>{store.name}</a></li>
                    ))
                }
            </ul>
        </div>
    );
}

export default FavoriteBtn;
