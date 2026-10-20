import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {Logoutbtn} from "../index";
const links = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
    const authStatus = useSelector((state) => state.auth.Status);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white">
      <nav className="flex w-full items-center gap-6 px-5 py-4 md:gap-10 lg:px-12">
        <Link
          to="/"
          className="shrink-0 text-xl font-bold tracking-tight text-gray-900"
        >
          ShopZone
        </Link>

        {/* Links */}
        <ul className="hidden shrink-0 items-center gap-7 text-sm font-medium text-gray-800 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link to={l.to} className="transition hover:text-gray-500">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search */}
        <div className="relative ml-auto min-w-0 flex-1 md:max-w-md">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm opacity-50">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full rounded-md bg-gray-100 py-2.5 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>

        {/* Icons */}
        <div className="flex shrink-0 items-center gap-5 text-xl">
          <div className="relative">
            {/* Button: click to open / close */}
            <button onClick={() => setOpen(!open)} aria-label="Account">
              👤
            </button>

            {open && (
              <>
                {/* Invisible layer: click outside = close */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setOpen(false)}
                />

                {/* Dropdown */}
               
                <div className="absolute right-0 top-9 z-50 w-40 overflow-hidden rounded-md border border-gray-100 bg-white text-sm shadow-lg">
                  
                   {!authStatus ?
                   <div>
                   <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-50">
                      Login
                  </Link>

                   <Link
                    to="/signup"
                    onClick={() => setOpen(false)}
                    className="block border-t border-gray-100 px-4 py-3 hover:bg-gray-50"
                  >
                    Sign Up
                  </Link></div>: <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="block border-t border-gray-100 px-4 py-3 hover:bg-gray-50"
                  >
                    <Logoutbtn />
                  </Link> }
                  
                 
                </div>
              </>
            )}
          </div>

          <Link to="/cart" aria-label="Cart">
            🛍️
          </Link>
        </div>
      </nav>
    </header>
    
  );
}