import React from 'react'

function DetailOffers() {
  return (
   <div className="w-full bg-orange-100 flex flex-wrap md:flex-nowrap items-center px-4 py-3 rounded-md">
            <span className="text-sm font-bold text-orange-600 pr-3">Special Offer:</span>
            <div className="flex gap-1">
              {["50", "02", "5", ":", "02"].map((val, idx) => (
                <span
                  key={idx}
                  className={`${
                    val === ":" ? "bg-transparent border-none text-lg" : "bg-orange-100 border border-orange-200 text-orange-700 w-9 h-9"
                  } flex items-center justify-center rounded-md`}
                >
                  {val}
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500 pl-3 mt-2 md:mt-0">
              Remains until the end of the offer.
            </span>
          </div>

  )
}

export default DetailOffers;