import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import flag from "../assets/english.png";
import { FaAngleDown } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openServiceMenu, setOpenServiceMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [openSpecialMenu, setOpenSpecialMenu] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (path) => {
    if (path === "/news" && (location.pathname.startsWith("/news") || location.pathname.startsWith("/subblog"))) {
      return "text-gray-200 border-b-2 border-white";
    }
    return location.pathname === path
      ? "text-gray-200 border-b-2 border-white"
      : "text-gray-200 hover:text-gray-100 transition duration-300 delay-70";
  };

  return (
    <nav
      className={`transition-transform duration-300 z-50 fixed w-full ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-[100vw] bg-cyan-600 mx-auto flex items-center justify-between px-10 py-3">
        {/* Logo */}
        <div>
          <Link to={"/"} className="flex items-center space-x-2">
            <img src={logo} alt="Kingkong Logo" className="w-7" />
            <div className="text-gray-100">
              <h1 className="font-bold text-lg">Kingkong</h1>
              <p className="text-xs">Aviation Cambodia</p>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-semibold">
          <li><Link to="/" className={linkClass("/")}>HOME</Link></li>
          <li><Link to="/about" className={linkClass("/about")}>ABOUT US</Link></li>

          {/* Desktop Services Dropdown with Animation */}
          <li className="relative group font-semibold" onClick={() => setOpen(false)}>
            <div className="flex items-center gap-2 cursor-pointer">
              <Link to="/services" className={linkClass("/services")}>
                SERVICES
              </Link>
              <FaAngleDown className="text-gray-100" />
            </div>

            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-full bg-white shadow-lg text-gray-800 rounded-md w-60 -ml-20 opacity-0 translate-y-[-10px] pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-in-out">
              <li><HashLink smooth to="/services#csa" className="block px-4 py-2 hover:bg-cyan-600 hover:text-white">CSA</HashLink></li>
              <li><HashLink smooth to="/services#gssa" className="block px-4 py-2 hover:bg-cyan-600 hover:text-white">GSSA/GSA</HashLink></li>
              <li><HashLink smooth to="/services#cargo" className="block px-4 py-2 hover:bg-cyan-600 hover:text-white">Cargo Charter</HashLink></li>
              <li><HashLink smooth to="/services#lam" className="block px-4 py-2 hover:bg-cyan-600 hover:text-white">Land Air Mode</HashLink></li>
              <li><HashLink smooth to="/services#rvg" className="block px-4 py-2 hover:bg-cyan-600 hover:text-white">Redoc Via Gateway</HashLink></li>
              <li className="relative group/submenu">
                <div className="flex items-center justify-between px-4 py-2 hover:bg-cyan-600 hover:text-white cursor-pointer">
                  <span><HashLink smooth to="/services#special">Special Cargo Handling</HashLink></span>
                  <FaAngleDown className="text-gray-600 group-hover/submenu:text-white transition" />
                </div>

                {/* Submenu */}
                <ul className="absolute left-full -top-30 bg-white shadow-lg text-gray-800 rounded-md w-60 opacity-0 translate-x-[-10px] pointer-events-none group-hover/submenu:opacity-100 group-hover/submenu:translate-x-0 group-hover/submenu:pointer-events-auto transition-all duration-300 ease-in-out">
                  <li><HashLink smooth to="/services#dg" className="block px-4 py-2 hover:bg-cyan-600 hover:text-white">Dangerous Goods</HashLink></li>
                  <li><HashLink smooth to="/services#per" className="block px-4 py-2 hover:bg-cyan-600 hover:text-white">Perishable Goods</HashLink></li>
                  <li><HashLink smooth to="/services#avi" className="block px-4 py-2 hover:bg-cyan-600 hover:text-white">Live Animals</HashLink></li>
                  <li><HashLink smooth to="/services#hum" className="block px-4 py-2 hover:bg-cyan-600 hover:text-white">Human Remains</HashLink></li>
                </ul>
              </li>
            </ul>
          </li>

          <li><Link to="/news" className={linkClass("/news")}>NEWS</Link></li>
          <li><Link to="/careers" className={linkClass("/careers")}>CAREERS</Link></li>
          <li><Link to="/contact" className={linkClass("/contact")}>CONTACT US</Link></li>
        </ul>

        {/* Language + Hamburger */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2">
            <span className="font-semibold text-gray-100">LANGUAGES</span>
            <button className="bg-gray-300 w-6 h-6 rounded-md">
              <img src={flag} alt="English" className="w-full h-full object-cover rounded-md" />
            </button>
          </div>
          <button
            className="lg:hidden text-gray-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-cyan-700 text-gray-100 px-3 py-6 overflow-y-auto max-h-[80vh] overscroll-none">
          <ul className="flex flex-col space-y-4 font-semibold">
            <li><Link to="/" className={linkClass("/")} onClick={() => setOpen(false)}>HOME</Link></li>
            <li><Link to="/about" className={linkClass("/about")} onClick={() => setOpen(false)}>ABOUT US</Link></li>

            {/* ✅ Mobile Dropdown with Animation */}
            <li>
              <button
                onClick={() => setOpenServiceMenu(!openServiceMenu)}
                className="flex justify-between items-center w-full"
              >
                <span className={linkClass("/services")}>SERVICES</span>
                <FaAngleDown
                  className={`transform transition-transform duration-300 ${
                    openServiceMenu ? "rotate-180" : ""
                  }`}
                />
              </button>
              <ul
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openServiceMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <li><HashLink smooth to="/services#csa" className="block px-4 py-2 hover:bg-cyan-600 hover:text-white">CSA</HashLink></li>
                <li><HashLink smooth to="/services#gssa" className="block px-4 py-2 hover:bg-cyan-600 hover:text-white">GSSA/GSA</HashLink></li>
                <li><HashLink smooth to="/services#cargo" className="block px-4 py-2 hover:bg-cyan-600 hover:text-white">Cargo Charter</HashLink></li>
                <li><HashLink smooth to="/services#lam" className="block px-4 py-2 hover:bg-cyan-600 hover:text-white">Land Air Mode</HashLink></li>
                <li><HashLink smooth to="/services#rvg" className="block px-4 py-2 hover:bg-cyan-600 hover:text-white">Redoc Via Gateway</HashLink></li>
                <li>
                    <button
                      onClick={() => setOpenSpecialMenu(!openSpecialMenu)}
                      className="flex justify-between items-center w-full px-4 py-2 hover:bg-cyan-600 hover:text-white"
                    >
                      <span>Special Cargo Handling</span>
                      <FaAngleDown
                        className={`transform transition-transform duration-300 ${
                          openSpecialMenu ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Nested submenu */}
                    <ul
                      className={`transition-all duration-500 ease-in-out ${
                        openSpecialMenu
                          ? "max-h-[13vh] opacity-100 overflow-y-auto overscroll-y-auto touch-pan-y scrollbar-thin scrollbar-thumb-gray-400"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    > 
                      <li>
                        <HashLink
                          smooth
                          to="/services#dg"
                          className="block px-6 py-2 hover:bg-cyan-600 hover:text-white"
                        >
                          Dangerous Goods
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          smooth
                          to="/services#per"
                          className="block px-6 py-2 hover:bg-cyan-600 hover:text-white"
                        >
                          Perishable Goods
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          smooth
                          to="/services#avi"
                          className="block px-6 py-2 hover:bg-cyan-600 hover:text-white"
                        >
                          Live Animals
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          smooth
                          to="/services#hum"
                          className="block px-6 py-2 hover:bg-cyan-600 hover:text-white"
                        >
                          Human Remains
                        </HashLink>
                      </li>
                    </ul>
                </li>
              </ul>
            </li>

            <li><Link to="/news" className={linkClass("/news")} onClick={() => setOpen(false)}>NEWS</Link></li>
            <li><Link to="/careers" className={linkClass("/careers")} onClick={() => setOpen(false)}>CAREERS</Link></li>
            <li><Link to="/contact" className={linkClass("/contact")} onClick={() => setOpen(false)}>CONTACT US</Link></li>
          </ul>

          <div className="mt-4 flex items-center space-x-2">
            <span className="font-semibold">LANGUAGES</span>
            <button className="bg-gray-300 w-6 h-6 rounded-md">
              <img src={flag} alt="English" className="w-full h-full object-cover rounded-md" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
