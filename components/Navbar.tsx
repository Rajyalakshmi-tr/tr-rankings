"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="
    fixed
    top-0
    left-0
    right-0
    bg-white/95
    backdrop-blur-md
    shadow-lg
    border-b
    z-50
    ">


<div className="
max-w-full
mx-auto
px-6
lg:px-8
py-4
flex
items-center
justify-between
">

        {/* Logo */}

  <Link
  href="/"
  className="flex items-center gap-2 mr-8"
>
  <img
  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logos/logo.png`}
  alt="TR Rankings Logo"
  width={70}
  height={70}
  className="rounded-lg"
  style={{ width: "70px", height: "70px" }}
/>


  <span className="text-2xl font-bold text-blue-900">
    TR<span className="text-yellow-700">Rankings</span>
  </span>
</Link>





        {/* Desktop Menu */}

<div className="
hidden
lg:flex
items-center
gap-5
xl:gap-8
font-medium
text-gray-700
">
          <NavLink href="/">
            Home
          </NavLink>


          <NavLink href="/rankings/world">
            World Rankings
          </NavLink>
<NavLink href="/compare">
  Compare
</NavLink>

          <NavLink href="/rankings/country">
            Country Rankings
          </NavLink>


          <NavLink href="/rankings/subject">
            Subject Rankings
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
<a
  href="https://github.com/Rajyalakshmi-tr/tr-rankings"
  target="_blank"
  rel="noopener noreferrer"
  className="text-2xl text-gray-700 hover:text-blue-700 transition-colors"
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
     >

          ☰

        </button>


      </div>





      {/* Mobile Menu */}

      {menuOpen && (

<div className="
lg:hidden
px-6
pb-6
space-y-5
bg-white
border-t
">

          <NavLink href="/">
            Home
          </NavLink>


          <NavLink href="/rankings/world">
            World Rankings
          </NavLink>


          <NavLink href="/rankings/country">
            Country Rankings
          </NavLink>


          <NavLink href="/rankings/subject">
            Subject Rankings
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
          <a
  href="https://github.com/Rajyalakshmi-tr/tr-rankings"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-gray-700 hover:text-blue-700"
>
  <FaGithub />
  GitHub
</a>
        </div>

      )}


    </nav>

  );
}





function NavLink({
  href,
  children
}:{
  href:string;
  children:React.ReactNode;
}) {

return (

<Link
href={href}
className="
px-2
py-1
text-[15px]
font-medium
text-gray-700
hover:text-blue-700
transition-colors
"
>
{children}
</Link>

);

}