import banner1 from '../../assets/Banner/banner1.jpg';

function Banner() {
    return (
        <div
            className="h-[482px] bg-cover bg-center relative flex items-center px-6"
            style={{ backgroundImage: `url(${banner1})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative w-[580px] text-white justify-evenly px-13 ">
                <h2 className="mb-5 text-5xl font-bold ">Get the best quality products at the lowest prices</h2>
                <p className="mb-5">
                    We have prepared special discounts for you on grocery
                    products. Don't miss these opportunities...
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-bold text-[14px] ">
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default Banner;
