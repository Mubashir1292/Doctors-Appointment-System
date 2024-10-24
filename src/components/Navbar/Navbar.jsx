import { useState } from "react";
import { assets } from "../../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="mt-2 flex justify-between items-center py-4 mb-5 border-b border-b-gray-400 text-sm">
      {/* Logo */}
      <img
        className="w-40 cursor-pointer"
        src={assets.logo}
        alt="AppointmentLogo"
      />

      {/* Navigation Links */}
      {/* creating the navbar as hidden for the mobile view and available for the medium and large devices as the following Tailwindcss classes */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <li className="py-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold " : "text-black"
            }
          >
            HOME
          </NavLink>
          <hr className="bg-primary w-3/6 h-0.5 m-auto outline-none border-none hidden" />
        </li>
        <li className="py-1">
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold " : "text-black"
            }
          >
            Doctors
          </NavLink>
          <hr className="bg-primary w-3/6 h-0.5 m-auto outline-none border-none hidden" />
        </li>
        <li className="py-1">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold " : "text-black"
            }
          >
            About
          </NavLink>
          <hr className="bg-primary w-3/6 h-0.5 m-auto outline-none border-none hidden" />
        </li>
        <li className="py-1">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold " : "text-black"
            }
          >
            Contact
          </NavLink>
          <hr className="bg-primary w-3/6 h-0.5 m-auto outline-none border-none hidden" />
        </li>
      </ul>
      <div>
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              src={assets.profile_pic}
              alt="profile Picture of the Logged in user"
              className="w-8 h-8 rounded-full"
            />
            <img
              src={assets.dropdown_icon}
              alt="Dropdown icon"
              className="w-2.5 "
            />
            {/* Dropdown Menu */}
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 opacity-0 transform translate-y-2 transition-all duration-300 ease-in-out hidden z-20 group-hover:block group-hover:opacity-100 group-hover:translate-y-0">
              <div className="w-48 bg-white p-3 shadow-lg rounded-md ">
                <p className="py-1 px-2 rounded hover:text-black cursor-pointer">
                  My Profile
                </p>
                <p className="py-1  px-2 rounded hover:text-black cursor-pointer">
                  My Appointments
                </p>
                <p className="py-1 px-2 rounded hover:text-red-600 hover:font-bold cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <button className="bg-primary hidden md:block px-5 py-3 rounded-full text-white text-sm">
              Create Account
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
