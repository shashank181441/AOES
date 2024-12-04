import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchButton from "../SearchButton";

export default function Header() {
  const location = useLocation();

  // Navigation items with slugs
  const navItems = [
    { name: "Home", slug: "/" },
    { name: "Projects", slug: "/projects" },
    { name: "Blogs", slug: "/blogs" },
    { name: "Contacts", slug: "/contacts" },
    { name: "Services", slug: "/services" },
    { name: "About Us", slug: "/about-us" },
  ];

  console.log(location);

  return (
    <>
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 hidden md:flex h-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between sm:h-14">
            {/* Logo Section */}
            <div>
              <Link to="/" className="flex items-center">
                <img
                  src="https://files.catbox.moe/76j4ey.svg"
                  alt="Logo"
                  className="h-4 w-auto sm:h-8"
                />
              </Link>
            </div>

            {/* Navigation Section */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-4 lg:space-x-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.slug}
                      className={`text-gray-700 text-sm transition duration-200 ${
                        location.pathname === item.slug
                          ? "text-red-700 underline underline-offset-8 font-extrabold decoration-2"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Search Button */}
            <div className="hidden md:block">
              <SearchButton />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
