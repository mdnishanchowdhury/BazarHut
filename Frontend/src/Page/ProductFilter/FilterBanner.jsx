import img from '../../assets/filterBanner/banner1.jpg'

function FilterBanner() {
    return (
        <div
            className="h-[276px] bg-cover bg-center relative flex items-center px-6"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="relative w-[580px] text-black justify-evenly px-6 md:px-13">
                <div className='bg-[#FFEDD5] rounded-[30px] w-[85px] h-[22px] flex flex-col items-center justify-center'>
                    <h2 className='text-[10px] font-semibold text-[#7C2D12] text-center'>Only This Week</h2>
                </div>

                <h2 className="mb-5 text-3xl font-bold">
                    Grocery store with different treasures
                </h2>
                <p className="mb-5">
                    We have prepared special discounts for you on grocery
                    products...
                </p>

                <div className='flex gap-5 items-center'>
                    <button className="bg-[#634C9F] hover:bg-blue-700 px-6 py-2 rounded text-white font-bold text-[14px]">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FilterBanner