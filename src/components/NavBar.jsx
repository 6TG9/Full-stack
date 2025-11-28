import React, { useState } from "react";
import { Link } from "react-router-dom";
import burg from "../../public/Frame 35.png"

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-8 py-6">
      <div className="flex justify-between text-[#C7C7C7] items-center">
        {/* Name */}
        <h2 className="navh font-normal tracking-tighter text-[33px]">
          <Link to="/" className="cursor-pointer">
            GEORGE OLUWATOBI.
          </Link>
        </h2>

        {/* Desktop Nav */}
        <div className="nava hidden md:flex gap-8">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
        <img src={burg} alt="" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="flex flex-col md:hidden mt-4 gap-4 text-[#C7C7C7]">
          <a href="#work" onClick={() => setOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
