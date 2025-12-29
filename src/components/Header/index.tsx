import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4">
        <div className="flex h-16 gap-x-8">
          <div className="flex items-center">
            <Link className="mr-5 headerLogo no-underline" to="/">
              STAR WARS
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline"
              to="/"
            >
              Sections
            </Link>
            <Link
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline"
              to="/films/1"
            >
              Films
            </Link>
            <Link
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline"
              to="/planets"
            >
              Planets
            </Link>
            <Link
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline"
              to="/people"
            >
              People
            </Link>
            <Link
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline"
              to="/species"
            >
              Species
            </Link>
            <Link
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline"
              to="/vehicles"
            >
              Vehicles
            </Link>
            <Link
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline"
              to="/starships"
            >
              Starships
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              aria-controls="responsive-navbar-nav"
              aria-expanded={isOpen}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        id="responsive-navbar-nav"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 text-right">
          <Link
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
            to="/"
          >
            Sections
          </Link>
          <Link
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
            to="/films/1"
          >
            Films
          </Link>
          <Link
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
            to="/planets"
          >
            Planets
          </Link>
          <Link
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
            to="/people"
          >
            People
          </Link>
          <Link
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
            to="/species"
          >
            Species
          </Link>
          <Link
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
            to="/vehicles"
          >
            Vehicles
          </Link>
          <Link
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
            to="/starships"
          >
            Starships
          </Link>
        </div>
      </div>
    </nav>
  )
}
