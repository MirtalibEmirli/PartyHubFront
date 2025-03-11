import React from "react";
import logo from "/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import search from "../assets/search-md.png";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  /** bura filterde elave edmek olar */
  const navItems = [
    { label: "Discover", href: "#" },
    { label: "Event Places", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <nav
      className="sticky top-0 z-50 py-3 backdrop-blur-md border-b
     border-neutral-700/80 bg-[#030813]"
    >
      <div className="container px-4 mx-auto relative text-sm  ">
        <div className="flex justify-between items-center   ">
          <div className="flex items-center justify-center flex-shrink-0 ml-10 mr-4  ">
            <img
              className="lg:w-[130px] lg:h-[90px] object-contain mr-2 rounded-lg"
              src={logo}
              alt="Partyhub Logo"
            />

            {/* searchbar */}
            <div
              className="bg-[#FFFFFF33] flex items-center lg:w-[246px] lg:h-[42px]
             rounded-sm border border-white/30 px-4"
            >
              <input
                type="text"
                placeholder="Search Events"
                className="bg-transparent text-white/70 placeholder-white/50 outline-none flex-grow"
              />

              <button
                onClick={async () => {
                  try {
                    const response = await fetch(
                      "https://localhost:7218/api/EventCategoryHandler",
                      {
                        method: "GET",
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    );

                    if (!response.ok) {
                      throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const data = await response.json();
                    console.log(data);
                  } catch (error) {
                    console.error("Fetch error:", error);
                  }
                }}
              >
                <img className="w-4 h-4" src={search} alt="Search Icon" />
              </button>
            </div>
          </div>

          <ul className="hidden lg:flex ml-14 gap-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-gray-300 font-semibold transition-colors duration-500 text-white/60"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center lg:w-[200x] lg:h-[40px] gap-12 items-center">
            <button
              className="border-black border
           lg:w-[85px] h-[40px] mt-2 mr-3 mb-2 ml-3 rounded-sm text-white gap-2 bg-gradient-to-r
            from-[#FF006E] via-[#AA26C4} to-[#8338EC]  font-medium text-[15px]
            hover:border-white transition-colors duration-500"
            >
              Sign up
            </button>

            <button
              className="border-[0.5px] hover:border-black transition-colors duration-500
lg:w-[71px] h-[40px] mt-2 mr-3 mb-2 ml-3 rounded-sm text-white gap-2  font-medium text-[15px]"
            >
              Log in
            </button>
          </div>

          {/* <a
              href=""
              className="hover:border-black transition-colors duration-500 py-2 px-3 border rounded-md"
            >
              Sign In
            </a>
            <a
              href=""
              className="bg-gradient-to-r from-neutral-500 to-orange-800 py-2 px-3
              rounded-md  hover:text-white transition-all duration-500"
            >
              Create an Account
            </a> */}

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X></X> : <Menu></Menu>}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div
            className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col 
          justify-center items-center lg:hidden"
          >
            <ul className="mb-3 gap-2 flex flex-col">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-gray-300 transition-all duration-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex space-x-6">
              <a
                href="#"
                className="hover:border-black transition-colors duration-500 py-2 px-3 border rounded-md"
              >
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500
              to-orange-800   hover:text-black transition-all duration-500"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
