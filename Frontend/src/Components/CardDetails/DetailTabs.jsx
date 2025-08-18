import { useState } from "react";

function DetailTabs({ data }) {
    const [activeTab, setActiveTab] = useState("description");
    const { details, reviewsCount } = data;
    return (
        <div className="mt-8">
            {/* Buttons */}
            <div className="flex space-x-4">
                <button
                    onClick={() => setActiveTab("description")}
                    className={`px-4 py-2 rounded-md ${activeTab === "description" ? "bg-gray-900 text-white" : "bg-gray-100"
                        }`}
                >
                    Description
                </button>
                <button
                    onClick={() => setActiveTab("reviews")}
                    className={`px-4 py-2 rounded-md ${activeTab === "reviews" ? "bg-gray-900 text-white" : "bg-gray-100"
                        }`}
                >
                    Reviews ({reviewsCount})
                </button>
            </div>

            {/* Content */}
            <div className="mt-4 p-4 border border-gray-200 rounded-md">
                {activeTab === "description" && (
                    <p className="text-sm text-gray-700">{details.description}</p>
                )}
                {activeTab === "reviews" && (
                    <div>
                        {reviewsCount > 0 ? (
                            <p className="text-sm text-gray-700">Showing {reviewsCount} reviews...</p>
                        ) : (
                            <p className="text-sm text-gray-500">No reviews yet.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DetailTabs;