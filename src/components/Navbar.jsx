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
          <nav className="gap-x-4 flex items-center ">
            <Link className="hover:text-gray-400" to="/">
              Home
            </Link>
            <Link className="hover:text-gray-400" to="/about">
              About
            </Link>
            <Link className="hover:text-gray-400" to="/products">
              Products
            </Link>
          </nav>
          <div className="flex gap-x-4">
            <Link to="/cart">
              <ShoppingCart fill="green" color="green" />
            </Link>
            <Link to="fav">
              <HeartIcon fill="red" color="red" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
