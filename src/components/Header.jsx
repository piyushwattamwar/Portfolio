// Header.jsx
import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-crimson">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Piyush Wattamwar
          </Link>
        </h1>
        <nav className="space-x-6 hidden md:block">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-crimson hover:underline transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-crimson hover:underline transition-all duration-200"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-crimson hover:underline transition-all duration-200"
          >
            Projects
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-crimson hover:underline transition-all duration-200"
          >
            About
          </Link>
          <Link
            to="certifications"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-crimson hover:underline transition-all duration-200"
          >
            Certification
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-crimson hover:underline transition-all duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
