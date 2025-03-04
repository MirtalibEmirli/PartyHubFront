import React from "react";
import logo from "/PartyHub.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const navItems = [
    { label: "Features", href: "#" },
    { label: "Workflow", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Testimonials", href: "#" },
  ];
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-md border-b
     border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              className="max-h-16 w-16 mr-2 rounded-lg"
              src={logo}
              alt="VirtualR Logo"
            />
            <span className="text-xl tracking-tight">PartyHub</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-gray-300 transition-all duration-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="" className="hover:border-black transition-colors duration-500 py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href=""
              className="bg-gradient-to-r from-neutral-500 to-orange-800 py-2 px-3
              rounded-md  hover:text-white transition-all duration-500"
            >
              Create an Account
            </a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>{mobileDrawerOpen ?<X></X> :<Menu></Menu>}</button>

          </div>
        </div>
        {mobileDrawerOpen &&(
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col 
          justify-center items-center lg:hidden">
          <ul className="mb-3 gap-2 flex flex-col">
            {navItems.map((item,index)=>(
              <li key={index}>
                <a href={item.href} className="hover:text-gray-300 transition-all duration-500">{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="flex space-x-6">
              <a href="#" className="hover:border-black transition-colors duration-500 py-2 px-3 border rounded-md">Sign In</a>
              <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500
              to-orange-800   hover:text-black transition-all duration-500">Create an Account</a>
          </div>
          </div>
          
        )}
      </div>
    </nav>
  );
};

export default Navbar;