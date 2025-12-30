import React from 'react'
import { NavLink } from 'react-router-dom'

import { sectionsExtras } from './constants'

export const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="sectionsContainer container mx-auto px-4 text-center">
        <span className="sectionTitle text-center pt-5 mb-10">
          Welcome to the Star Wars universe
        </span>
        <div className="grid grid-cols-[repeat(3,_300px)] gap-4 justify-center justify-items-center mt-10">
          {sectionsExtras.map(({ name, imgSrc }) => (
            <div key={name} className="sectionCard m-3 p-0">
              <img
                alt={name}
                className="h-[150px] w-[150px] mx-auto mt-3 mb-2"
                src={imgSrc}
              />
              <div className="p-4">
                <div className="card-title mb-4 text-center">
                  <NavLink
                    className="descriptionButton sections"
                    to={`/${name}`}
                  >
                    {name.toLowerCase()}
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
