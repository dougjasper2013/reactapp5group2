"use client";

import Link from "next/link";

export default function Navbar() {

  return (

    <nav className="bottom-navbar">

      {/* HOME */}

      <Link href="/" className="nav-item">
        <span>🏠</span>
        <p>Home</p>
      </Link>

      {/* PRODUCTS */}

      <Link href="/products" className="nav-item">
        <span>🛍️</span>
        <p>Products</p>
      </Link>

      {/* ABOUT */}

      <Link href="/about" className="nav-item">
        <span>ℹ️</span>
        <p>About</p>
      </Link>

      {/* CART */}

      <Link href="/cart" className="nav-item">
        <span>🛒</span>
        <p>Cart</p>
      </Link>

      {/* CONTACT */}

      <Link href="/contact" className="nav-item">
        <span>👤</span>
        <p>Contact</p>
      </Link>

    </nav>

  );
}
