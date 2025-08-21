import useAuth from "../../Hook/useAuth";
import { useState, useEffect } from "react";

function Profile() {
  const { user } = useAuth();
  const [deliveryLocation, setDeliveryLocation] = useState("");

  // ধরে নিচ্ছি deliveryLocation কোনো API বা localStorage থেকে আসবে
  useEffect(() => {
    // উদাহরণ: localStorage থেকে location নেওয়া
    const location = localStorage.getItem("deliveryLocation") || "No location selected";
    setDeliveryLocation(location);
  }, []);

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        {/* Profile Photo */}
        <div className="flex justify-center mb-4">
          <img
            src={user?.photoURL || "https://via.placeholder.com/100"}
            alt={user?.displayName || "User"}
            className="w-24 h-24 rounded-full border-2 border-purple-600"
          />
        </div>

        {/* User Name */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {user?.displayName || "Anonymous User"}
        </h2>

        {/* Email */}
        <p className="text-gray-600 mb-2">{user?.email || "No email provided"}</p>

        {/* Delivery Location */}
        <p className="text-gray-600 mb-4">
          <strong>Delivery Location:</strong> {deliveryLocation}
        </p>

        {/* Some actions */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
            Edit Profile
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
