"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/og-image.png"
            alt="TR Rankings"
            width={45}
            height={45}
            priority
            className="object-contain"
          />

          <span className="text-xl font-bold text-blue-900">
            TRRankings
          </span>
        </Link>

        {/* Desktop Menu */}
        <div
          className="
            hidden
            lg:flex
            items-center
            gap-5
            xl:gap-8
            font-medium
            text-gray-700
          "
        >
          <NavLink href="/">Home</NavLink>

          <NavLink href="/rankings/world">
            World Rankings
          </NavLink>

          <NavLink href="/methodology">
            Methodology
          </NavLink>

          <NavLink href="/news">
            News
          </NavLink>

          <NavLink href="/about">
            About
          </NavLink>

          <NavLink href="/contact">
            Contact
          </NavLink>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Rajyalakshmi-tr/tr-rankings"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-2xl
              text-gray-700
              hover:text-blue-700
              transition-colors
            "
            aria-label="GitHub Repository"
          >
            <FaGithub />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            text-3xl
            text-blue-900
          "
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            lg:hidden
            px-6
            pb-6
            pt-2
            space-y-5
            bg-white
            border-t
          "
        >
          <NavLink href="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink
            href="/rankings/world"
            onClick={() => setMenuOpen(false)}
          >
            World Rankings
          </NavLink>

          <NavLink
            href="/methodology"
            onClick={() => setMenuOpen(false)}
          >
            Methodology
          </NavLink>

          <NavLink
            href="/news"
            onClick={() => setMenuOpen(false)}
          >
            News
          </NavLink>

          <NavLink
            href="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          {/* GitHub */}
          <a
            href="https://github.com/Rajyalakshmi-tr/tr-rankings"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              text-gray-700
              hover:text-blue-700
            "
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        block
        hover:text-blue-700
        transition-colors
      "
    >
      {children}
    </Link>
  );
}