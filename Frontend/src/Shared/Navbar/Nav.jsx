import { Link } from "react-router-dom";
import LanguageChange from "../../Components/Navbar/LanguageChange";
import CurrencyChange from "../../Components/Navbar/CurrencyChange";
import DarkModeChange from "../../Components/Navbar/DarkModeChange";

function Nav() {
 
    return (
        <div className="w-full bg-white h-auto md:h-10 flex flex-col md:flex-row md:items-center justify-center md:justify-between px-4 md:px-20 py-2 md:py-0 text-xs">

            {/* Left links */}
            <ul className="flex bg-none justify-center md:flex-row items-center gap-2 md:gap-6 text-[#6B7280] font-inter">
                <li className=" opacity-80 font-medium text-xs"><Link>About Us</Link></li>
                <li className="opacity-80 font-medium text-xs"><Link>My Account</Link></li>
                <h2 className="opacity-80 font-medium text-xs text-center md:text-left">
                    We deliver to you every day from <span className="text-[#514d47]">7:00 to 23:00</span>
                </h2>
            </ul>

            <div className="flex justify-center gap-2">
                {/* Language selection */}
                <LanguageChange></LanguageChange>

                {/* currency selection */}
                <CurrencyChange></CurrencyChange>

                {/* dark mode */}
                <DarkModeChange></DarkModeChange>
            </div>
        </div>
    );
}

export default Nav;
