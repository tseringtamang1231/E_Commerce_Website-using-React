import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-wrap gap-8 justify-between">

          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold">ShopZone</h2>
            <p className="mt-1 text-xs text-gray-400">Better Style. Better You.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link className="hover:text-white" to="/">Home</Link></li>
              <li><Link className="hover:text-white" to="/products">Shop</Link></li>
              <li><Link className="hover:text-white" to="/about">About</Link></li>
              <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="YouTube">▶️</a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <p className="mt-8 border-t border-slate-700 pt-4 text-xs text-gray-400">
          &copy; 2025 ShopZone. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer