import React from 'react';
import useFavoritedCards from '../../Hook/useFavoritedCards';
import WishlistCard from '../Navbar/WishlistCard';

function Wishlists() {
    const [favoritCart] = useFavoritedCards();

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">
                My Wishlist ({favoritCart?.length || 0})
            </h2>

            {favoritCart && favoritCart.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {favoritCart.map((item, index) => (
                        <WishlistCard key={index} item={item} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">Your wishlist is empty.</p>
            )}
        </div>
    );
}

export default Wishlists;
