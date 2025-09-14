



import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import logo from "../assets/download.png";

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // Login page navigation

  const handleSearch = () => {
    onSearch(query);
  };

  const handleLoginClick = () => {
    navigate("/login"); // LOGIN button click => Login page
  };

  return (
    <div className="w-full bg-white">
      {/* --- Top info bar --- */}
      <div className="w-full bg-white text-black text-sm border-b border-gray-200">
        <div className="max-w-[1470px] mx-auto px-4 py-2 flex justify-between items-center gap-6">
          {/* Left: Language dropdown + Email & Helpline */}
          <div className="flex items-center gap-5">
            <select
              id="lang"
              className="bg-white text-black rounded hover:bg-gray-100 hover:rounded-full px-2 py-1"
            >
              <option value="en">English</option>
              <option value="pt">Português</option>
            </select>

            {/* Mail & Helpline - hide on mobile */}
            <div className="items-center gap-2 text-gray-700 hidden sm:flex">
              <TfiEmail />
              <a href="mailto:webzedcontact@gmail.com">Mail: webzedcontact@gmail.com</a>
              <span className="px-2">|</span>
              <a href="tel:45343456565">Helpline: 45343456565</a>
            </div>
          </div>

          {/* Right: Login button */}
          <div>
            <button
              onClick={handleLoginClick} // Navigation on click
              className="flex items-center gap-1 bg-white text-black px-3 py-1 rounded hover:bg-gray-100 transition"
            >
              <IoMdLogIn size={18} /> LOGIN
            </button>
          </div>
        </div>
      </div>

      {/* --- Main navbar --- */}
      <div className="max-w-[1470px] mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Logo */}
       <div className="flex justify-start items-center gap-3 w-full sm:w-auto">
  <img src={logo} alt="Logo" className="h-[35px]" />
</div>


        {/* Search bar */}
        <div className="flex-1 max-w-[1190px] relative w-full  sm:mt-0">
          <input
            type="text"
            placeholder="Search Here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-4 pr-12 py-2 rounded-xl border-b bg-[#F2F5F3] outline-none focus:ring-1 focus:ring-[#470096]"
          />
          <button
            onClick={handleSearch}
            className="absolute top-1/2 right-0 -translate-y-1/2 rounded-r-xl bg-[#470096] text-white p-3 hover:bg-gray-600 transition"
          >
            <FiSearch size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
