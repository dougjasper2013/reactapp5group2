"use client";

import Link from "next/link";

export default function Navbar() {

  return (

    <nav className="bottom-navbar">

      {/* HOME */}

      <div className="nav-item">
        <span>🏠</span>
        <p>Home</p>
      </div>

      {/* PRODUCTS */}

      <Link href="/" className="nav-item active">
        <span>🛍️</span>
        <p>Products</p>
      </Link>

      {/* ABOUT */}

      <div className="nav-item">
        <span>ℹ️</span>
        <p>About</p>
      </div>

      {/* CART */}

      <div className="nav-item">
        <span>🛒</span>
        <p>Cart</p>
      </div>

      {/* CONTACT */}

      <div className="nav-item">
        <span>👤</span>
        <p>Contact</p>
      </div>

    </nav>

  );
}