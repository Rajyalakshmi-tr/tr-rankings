"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
      max-w-7xl
      mx-auto
      px-6
      py-4
      flex
      justify-between
      items-center
      ">


        {/* Logo */}

        <Link
href="/"
className="flex items-center gap-3"
>

<Image
src="/logo.png"
alt="TR Rankings Logo"
width={55}
height={55}
/>


<span className="
text-2xl
font-bold
text-blue-900
">

TR
<span className="text-yellow-500">
Rankings
</span>

</span>


</Link>




        {/* Desktop Menu */}

        <div className="
        hidden
        md:flex
        items-center
        gap-7
        font-medium
        text-gray-700
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


        </div>





        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
          md:hidden
          text-2xl
          "
        >

          ☰

        </button>


      </div>





      {/* Mobile Menu */}

      {menuOpen && (

        <div className="
        md:hidden
        px-6
        pb-6
        space-y-4
        bg-white
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
hover:text-blue-700
transition-colors
"
>
{children}
</Link>

);

}