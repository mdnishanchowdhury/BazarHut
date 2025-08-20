import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

function Avatar() {
  const { userLogOut, user } = useContext(AuthContext);

  // Handle Logout
  const handleLoginOut = () => {
    userLogOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logged Out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="dropdown dropdown-end">
      {/* Avatar Image - Only show when logged in */}
      {user && user.email && (
        <div
          tabIndex={0}
          className="w-10 h-10 rounded-full cursor-pointer overflow-hidden border-2 border-purple-500"
        >
          <img
            src={user?.photoURL || "https://i.ibb.co/3TQZ3Q2/default-avatar.png"}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Dropdown Menu */}
      {user && user.email ? (
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow-lg bg-white rounded-xl w-52 mt-3 text-gray-700"
        >
          <li>
            <Link
              to="/profile"
              className="hover:bg-gray-100 rounded-lg px-2 py-1"
            >
            Profile
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="hover:bg-gray-100 rounded-lg px-2 py-1"
            >
              Settings
            </Link>
          </li>
          <li>
            <button
              onClick={handleLoginOut}
              className="w-full text-left text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg px-2 py-1 font-medium"
            >
               Sign Out
            </button>
          </li>
        </ul>
      ) : (
        <div className="flex gap-2 mt-2">
          <Link to="/login" className="btn btn-sm btn-outline">
            Login
          </Link>
          <Link to="/signUp" className="btn btn-sm btn-primary">
            SignUp
          </Link>
        </div>
      )}
    </div>
  );
}

export default Avatar;
