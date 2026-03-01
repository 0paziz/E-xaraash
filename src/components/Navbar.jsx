import React from "react";
import { ShoppingCart, HeartIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="w-full  p-4 ">
        <div className="flex justify-between w-6xl mx-auto items-center">
          <div id="logo">
            <Link to="/">
              <h2 className="font-bold text-2xl text-pink-700">E-xaraash</h2>
            </Link>
          </div>
          <nav className="gap-x-10 flex items-center font-semibold ">
            <Link className="hover:text-gray-400" to="/">
              Home
            </Link>
             <Link className="hover:text-gray-400" to="/contact">
              Contact
            </Link>
            <Link className="hover:text-gray-400" to="/about">
              About
            </Link>
            <Link className="hover:text-gray-400" to="/signup">
              Sign Up
            </Link>
          </nav>
          <div className="flex gap-x-4 items-center">

            <form className="flex items-center bg-gray-100 p-2 rounded gap-1">
              <input type="text" name="text" placeholder="what are you looking for?" className="outline-0 text-[14px] px-2" />
              <img src="/search.png" width="25" alt="search icon" className="pr-2 cursor-pointer" />
            </form>

            <Link to="/cart">
              <ShoppingCart  />
            </Link>
            <Link to="fav">
              <HeartIcon  />
            </Link>

          </div>
        </div>
      </header>
    </>
  );
}
