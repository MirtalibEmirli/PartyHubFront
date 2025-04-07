import React from 'react';

export default function Navbar() {
  return (
    <div className="bg-[#020617] px-8 py-6 flex items-center justify-between text-white">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Party Hub" className="w-28" />
        <div className="relative">
          <input
            type="text"
            placeholder="Search Events"
            className="px-4 py-2 rounded-full text-black w-64"
          />
          <button className="absolute right-2 top-2">🔍</button>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-pink-500">Discover</a>
        <a href="#" className="hover:text-pink-500">Venues</a>
        <a href="#" className="hover:text-pink-500">Contact us</a>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md">Sign up</button>
        <button className="bg-white text-black px-4 py-2 rounded-md">Log in</button>
      </div>
    </div>
  );
}