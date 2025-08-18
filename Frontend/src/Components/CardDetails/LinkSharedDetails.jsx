import { CiHeart } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";
import { IoGitCompareOutline } from "react-icons/io5";

function LinkSharedDetails() {
    return (
        <div className="flex flex-wrap gap-3 text-sm text-gray-500 pt-6">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:text-black">
                <CiHeart size={18} />
                <span>Add to wishlist</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:text-black">
                <RiShare2Line size={18} />
                <span>Share</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:text-black">
                <IoGitCompareOutline size={18} />
                <span>Compare</span>
            </button>
        </div>
    )
}

export default LinkSharedDetails;