import { Minus, Plus } from "lucide-react";
function ActionsDetails() {
    return (
        <div className="flex flex-col sm:flex-row gap-3 mt-5">
            {/* Quantity */}
            <div className="flex items-center justify-between border border-gray-300 rounded-md px-3 h-[46px] w-full sm:w-[160px]">
                <button className="border rounded-md p-2 hover:bg-gray-100">
                    <Minus size={16} />
                </button>
                <span className="text-lg font-semibold">1</span>
                <button className="border rounded-md p-2 hover:bg-gray-100">
                    <Plus size={16} />
                </button>
            </div>

            {/* Cart + Buy */}
            <button className="flex-1 bg-green-600 h-[46px] text-white text-sm font-bold rounded-md hover:bg-green-700">
                Add to cart
            </button>
            <button className="flex-1 bg-gray-900 h-[46px] text-white text-sm font-bold rounded-md hover:bg-black">
                Buy Now
            </button>
        </div>

    )
}

export default ActionsDetails;
