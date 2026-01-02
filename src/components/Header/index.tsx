import React, { useState } from 'react'

import { TransitionLink } from '@/components/common/TransitionLink'

const activeClass = 'text-sw-cyan'
const linkClass =
  'link text-gray-300 hover:text-white text-sm font-medium no-underline'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-gray-800/95 backdrop-blur-sm [view-transition-name:header]">
      <div className="mx-auto px-4">
        <div className="flex h-16 gap-x-8">
          <div className="flex items-center">
            <TransitionLink className="mr-5 headerLogo no-underline" to="/">
              STAR WARS
            </TransitionLink>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <TransitionLink
              activeClassName={activeClass}
              className={linkClass}
              to="/"
            >
              Sections
            </TransitionLink>
            <TransitionLink
              activeClassName={activeClass}
              className={linkClass}
              to="/films/1"
            >
              Films
            </TransitionLink>
            <TransitionLink
              activeClassName={activeClass}
              className={linkClass}
              to="/planets"
            >
              Planets
            </TransitionLink>
            <TransitionLink
              activeClassName={activeClass}
              className={linkClass}
              to="/people"
            >
              People
            </TransitionLink>
            <TransitionLink
              activeClassName={activeClass}
              className={linkClass}
              to="/species"
            >
              Species
            </TransitionLink>
            <TransitionLink
              activeClassName={activeClass}
              className={linkClass}
              to="/vehicles"
            >
              Vehicles
            </TransitionLink>
            <TransitionLink
              activeClassName={activeClass}
              className={linkClass}
              to="/starships"
            >
              Starships
            </TransitionLink>
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
          <TransitionLink
            activeClassName={activeClass}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
            to="/"
          >
            Sections
          </TransitionLink>
          <TransitionLink
            activeClassName={activeClass}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
            to="/films/1"
          >
            Films
          </TransitionLink>
          <TransitionLink
            activeClassName={activeClass}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
            to="/planets"
          >
            Planets
          </TransitionLink>
          <TransitionLink
            activeClassName={activeClass}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
            to="/people"
          >
            People
          </TransitionLink>
          <TransitionLink
            activeClassName={activeClass}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
            to="/species"
          >
            Species
          </TransitionLink>
          <TransitionLink
            activeClassName={activeClass}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
            to="/vehicles"
          >
            Vehicles
          </TransitionLink>
          <TransitionLink
            activeClassName={activeClass}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
            to="/starships"
          >
            Starships
          </TransitionLink>
        </div>
      </div>
    </nav>
  )
}
