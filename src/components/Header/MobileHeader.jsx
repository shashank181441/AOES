import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchButton from '../SearchButton'
import { Menu, X } from 'lucide-react'

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = ['Home', 'Projects', 'Blogs', 'Contacts', 'Services', 'About Us']

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 md:hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://files.catbox.moe/76j4ey.svg"
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-10 inset-x-0 bg-white border-b border-gray-200 transition transform origin-top">
          <div className="container mx-auto px-4">
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                      className="block py-2 text-gray-700 hover:text-gray-500 transition duration-200"
                      onClick={toggleMenu}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4 flex gap-6">
              <span>Search </span>
              <SearchButton />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}