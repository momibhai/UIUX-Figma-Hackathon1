"use client"; // Required for client-side hooks

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext"; // Adjust the path as needed

const MainNav = () => {
  const { state } = useCart(); // Access the cart state

  return (
    <div className="w-full border-b border-gray-200">
      <div className="flex items-center justify-between px-4 md:px-24 py-4">
        {/* Left Section: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger Icon (Visible on Mobile) */}
          <div className="block md:hidden">
            <Image
              src="/icons/hamburger.png" // Replace with your hamburger icon
              alt="Menu"
              width={24}
              height={24}
            />
          </div>

          {/* Logo */}
          <div
            className="text-[32px] font-bold leading-[38.4px] tracking-tight"
            style={{ fontFamily: "Integral CF", width: "160px", height: "22px" }}
          >
           <Link href={'/'}> SHOP.CO </Link>
          </div>
        </div>

        {/* Center Section: Navigation Links (Hidden on Mobile) */}
        <div
          className="hidden md:flex gap-8 text-[16px] leading-[21.6px] font-normal tracking-tight"
          style={{ fontFamily: "Satoshi" }}
        >
          <Link href="#" className="hover:text-gray-600">
            Shop
          </Link>
          <Link href="#on_sell" className="hover:text-gray-600">
            On Sale
          </Link>
          <Link href="#new_arrival" className="hover:text-gray-600">
            New Arrivals
          </Link>
          <Link href="#" className="hover:text-gray-600">
            Brands
          </Link>
          <Link href="/CategoryPage" className="hover:text-gray-600">
            Categories
          </Link>
        </div>

        {/* Right Section: Search Bar and Icons */}
        <div className="flex items-center gap-4">
          {/* Search Bar (Hidden on Mobile) */}
          <input
            type="text"
            placeholder="Search for products..."
            className="hidden md:block w-72 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-gray-300"
          />

          {/* Cart Icon with Count */}
          <Link href="/CartPage" className="relative">
            <Image
              src="/icons/cart.png" // Replace with your cart icon path
              alt="Cart"
              width={20.25}
              height={20.25}
            />
            {/* Cart Count Badge */}
            {state.cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {state.cartItems.length}
              </span>
            )}
          </Link>

          {/* User Icon */}
          <Image
            src="/icons/user.png" // Replace with your user icon path
            alt="User"
            width={20.25}
            height={20.25}
          />
        </div>
      </div>
    </div>
  );
};

export default MainNav;




