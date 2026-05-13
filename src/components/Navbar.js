"use client";

import Link from "next/link";

export default function Navbar() {

  return (

    <header className="top-navbar">

      {/* LOGO */}

      <div className="logo-box">

        <Link href="/">

          <img
            src="/logo.png"
            alt="Gadget Genie Logo"
            className="floating-logo"
          />

        </Link>

      </div>



      {/* NAV LINKS */}

      <nav className="nav-links">

        <Link href="/">Home</Link>

        <Link href="/products">Products</Link>

        <Link href="/about">About</Link>

        <Link href="/cart">Cart</Link>

        <Link href="/contact">Contact</Link>

      </nav>



      {/* RIGHT ICONS */}

      <div className="nav-icons">

        <span>🔍</span>

        <span>🛒</span>

        <span>👤</span>

      </div>

    </header>

  );
}