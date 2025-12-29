import React from 'react'
import { NavLink } from 'react-router-dom'

import { sectionsExtras } from './constants'

export const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="container mx-auto px-4 sectionsContainer">
        <h1 className="text-center pt-5 mb-5">Welcome to Star Wars universe</h1>
        <div className="flex flex-wrap justify-center -mx-3">
          {sectionsExtras.map(({ name, imgSrc }) => (
            <div
              key={name}
              className="sectionCard text-center m-3 p-0 w-full sm:w-[calc(41.66%-1.5rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <img alt={name} className="mx-auto mt-3 mb-2" src={imgSrc} />
              <div className="p-4">
                <div className="card-title mb-4">
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
