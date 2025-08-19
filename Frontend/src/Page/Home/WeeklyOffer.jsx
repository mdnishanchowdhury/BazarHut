import weekly1 from '../../assets/weeklyBanner/weekly1.jpg'
import weekly2 from '../../assets/weeklyBanner/weekly2.jpg'

function WeeklyOffer() {
    return (
        <div className='mt-12 w-full  px-2 md:px-0 '>
              <h2 className='text-xl font-bold pb-6'>Weekly Offers</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
           
            {/* Card 1 */}
            <div
                className="h-[200px] sm:h-[240px] md:h-[276px] w-full bg-cover bg-center relative flex items-center px-4 md:px-6 rounded-md"
                style={{ backgroundImage: `url(${weekly1})` }}
            >
                <div className="relative max-w-sm text-black space-y-2 sm:space-y-3">
                    <div className="bg-[#FFEDD5] rounded-full px-3 py-1 w-fit">
                        <h2 className="text-[10px] sm:text-xs font-semibold text-[#7C2D12]">
                            Only This Week
                        </h2>
                    </div>

                    <h2 className="text-lg sm:text-xl md:text-3xl font-bold leading-snug">
                        Grocery store with different treasures
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base">
                        We have prepared special discounts for you on grocery products...
                    </p>

                    <button className="bg-[#634C9F] hover:bg-blue-700 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded text-white font-bold text-xs sm:text-sm md:text-[14px]">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Card 2 */}
            <div
                className="h-[200px] sm:h-[240px] md:h-[276px] w-full bg-cover bg-center relative flex items-center px-4 md:px-6 rounded-md"
                style={{ backgroundImage: `url(${weekly2})` }}
            >
                <div className="relative max-w-sm text-black space-y-2 sm:space-y-3">
                    <div className="bg-[#FFEDD5] rounded-full px-3 py-1 w-fit">
                        <h2 className="text-[10px] sm:text-xs font-semibold text-[#7C2D12]">
                            Only This Week
                        </h2>
                    </div>

                    <h2 className="text-lg sm:text-xl md:text-3xl font-bold leading-snug">
                        Grocery store with different treasures
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base">
                        We have prepared special discounts for you on grocery products...
                    </p>

                    <button className="bg-[#634C9F] hover:bg-blue-700 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded text-white font-bold text-xs sm:text-sm md:text-[14px]">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
        </div>
    )
}

export default WeeklyOffer
