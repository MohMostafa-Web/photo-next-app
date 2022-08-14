import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const navRef = useRef();

  /* Create function to change Navbar Colors according to scrollY of Window */
  const handleNavColors = () => {
    // console.log(window.scrollY); // debug
    if (window.scrollY > 90) {
      navRef.current.style.backgroundColor = "white";
      navRef.current.style.color = "black";
    } else {
      navRef.current.style.backgroundColor = "transparent";
      navRef.current.style.color = "white";
    }
  };

  /* Create function to toggle Mobile Navbar */
  const toggleMobileNav = () => setMobileNav(!mobileNav);

  /* using usEffect() to run Function "handleNavColors" at intial render, and when the window is scrolled */
  useEffect(() => {
    handleNavColors();
    window.addEventListener("scroll", handleNavColors);
  }, []);

  return (
    <nav
      className="w-screen fixed top-0 left-0 z-10 text-white transition-colors ease-in duration-300"
      ref={navRef}
    >
      <div className="max-w-[1240px] p-4 m-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="font-bold text-4xl">Captur</a>
        </Link>
        {/* Main Links */}
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">
              <a className="hover:text-gray-400">Home</a>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">
              <a className="hover:text-gray-400">Gallery</a>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/work">
              <a className="hover:text-gray-400">Work</a>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/contact">
              <a className="hover:text-gray-400">Contact</a>
            </Link>
          </li>
        </ul>
        {/* Mobile Toggle Button */}
        <button
          className="block sm:hidden text-xl z-10 relative right-4 hover:text-gray-400"
          onClick={toggleMobileNav}
        >
          {!mobileNav ? (
            <AiOutlineMenu />
          ) : (
            <AiOutlineClose style={{ color: "white" }} />
          )}
        </button>
        {/* Mobile Menu */}
        <div
          className={`sm:hidden absolute top-0 ${
            mobileNav ? "left-0" : "left-[-100%]"
          } w-full h-screen bg-black flex justify-center items-center linear duration-300`}
        >
          <ul className="text-white text-2xl text-center">
            <li className="p-4">
              <Link href="/">
                <a className="hover:text-gray-500" onClick={toggleMobileNav}>
                  Home
                </a>
              </Link>
            </li>
            <li className="p-4">
              <Link href="/#gallery">
                <a className="hover:text-gray-500" onClick={toggleMobileNav}>
                  Gallery
                </a>
              </Link>
            </li>
            <li className="p-4">
              <Link href="/work">
                <a className="hover:text-gray-500" onClick={toggleMobileNav}>
                  Work
                </a>
              </Link>
            </li>
            <li className="p-4">
              <Link href="/contact">
                <a className="hover:text-gray-500" onClick={toggleMobileNav}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
