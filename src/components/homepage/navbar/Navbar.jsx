import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import { Menu, X } from "lucide-react";
import search from "../../../assets/search-md.png";

const Navbar = ({variant = "light"}) => {
  const isDark=variant==="dark";
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);
 
  const navItems = [
    { label: "Discover", href: "#" },
    { label: "Event Places", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <nav className={`w-full top-0 left-0 py-3 z-50  border-b border-neutral-700/80 bg-[#03081366] fixed   ${isDark ? "bg-[#0f0f1f] text-white" : "backdrop-blur-md" }`}>
      <div className="container px-4 mx-auto relative text-sm flex items-center justify-between">

        <div className="flex items-center space-x-4">
          <img className="w-[130px] h-[90px] object-contain rounded-lg" src={logo} alt="Partyhub Logo" />
          
         
          <div className="hidden sm:flex bg-[#FFFFFF33] items-center w-[246px] h-[42px] rounded-sm border border-white/30 px-4">
            <input
              type="text"
              placeholder="Search Events"
              className="bg-transparent text-white/70 placeholder-white/50 outline-none flex-grow"
            />
            <button>
              <img className="w-4 h-4" src={search} alt="Search Icon" />
            </button>
          </div>
        </div>

    
        <ul className="hidden lg:flex gap-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-gray-300 font-semibold transition-colors duration-500 text-white/60">
                {item.label}
              </a>
            </li>
          ))}
        </ul>


        <div className="hidden lg:flex gap-4">
          <button className="border border-black lg:w-[85px] h-[40px] rounded-sm text-white bg-gradient-to-r from-[#FF006E] via-[#AA26C4] to-[#8338EC] font-medium text-[15px] hover:border-white transition-colors duration-500">
            Sign up
          </button>
          <button className="border border-white hover:border-black transition-colors duration-500 w-[71px] h-[40px]
           rounded-sm text-white font-medium text-[15px]">
            Log in
          </button>
        </div>

 
        <button onClick={toggleNavbar} className="lg:hidden">
          {mobileDrawerOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {mobileDrawerOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-neutral-900 z-20 flex flex-col justify-center items-center lg:hidden">
          <button className="absolute top-5 right-5 text-white" onClick={toggleNavbar}>
            <X className="w-8 h-8" />
          </button>

          <ul className="space-y-6 text-white text-lg">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-gray-300 transition-all duration-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 mt-6 w-3/4">
            <button className="border border-white py-2 rounded-md text-white font-medium text-[15px]">
              Sign up
            </button>
            <button className="border border-black bg-gradient-to-r from-[#FF006E] via-[#AA26C4] to-[#8338EC] py-2 rounded-md text-white font-medium text-[15px]">
              Log in
            </button>
          </div>
        </div> 
      )}
    </nav>
  );
};

export default Navbar;
