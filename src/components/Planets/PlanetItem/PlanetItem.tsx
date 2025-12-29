import React, { useEffect } from 'react'
import { NavLink, useHistory, useParams } from 'react-router-dom'

import { ContentListLoader } from '../../Common/ContentLoader'
import { Preloader } from '../../Common/Preloader/Preloader'
import { planetsExtras } from '../constants'

import { useGetResourcesByUrlsQuery } from '@/api/baseApi'
import { useGetPlanetQuery } from '@/api/planetsApi'

const getPageId = (url: string): number => parseInt(url.replace(/[^\d]/g, ''))

const PlanetItem = () => {
  const { planetId } = useParams<{ planetId?: string }>()
  const history = useHistory()

  const images = planetsExtras

  const { data: planet, isLoading } = useGetPlanetQuery(
    planetId ? parseInt(planetId) : 0,
  )

  const { data: residents, isLoading: isResidentsLoading } =
    useGetResourcesByUrlsQuery(planet?.residents, { skip: !planet })

  const { data: films, isLoading: isFilmsLoading } = useGetResourcesByUrlsQuery(
    planet?.films,
    { skip: !planet },
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    history.goBack()
  }

  if (isLoading || !planet) {
    return <Preloader />
  }

  const planetImg = images.find((item) => item.name === planet.name)
  const planetImgSrc =
    planetImg?.imgSrc || images.find((item) => item.name === 'unknown')?.imgSrc

  return (
    <div className="planetItemWrapper">
      <div
        className={
          isLoading
            ? 'foggy text-center planetItemContainer container mx-auto px-4'
            : 'text-center planetItemContainer container mx-auto px-4'
        }
      >
        <div className="flex flex-wrap pt-5 mb-5 items-center">
          <div className="w-full sm:w-5/12 px-3 text-center sm:text-right pl-sm-5 pb-3 sm:pb-0">
            <img alt={planet.name} src={planetImgSrc} />
          </div>
          <div className="w-full sm:w-6/12 px-3 text-left sm:text-center">
            <h1>{planet.name.toLowerCase()}</h1>
            <h2>{planet.name.toLowerCase()}</h2>
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Rotation period:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {planet.rotation_period}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Orbital period:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {planet.orbital_period}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Diameter:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {planet.diameter}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Climate:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {planet.climate}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Gravity:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {planet.gravity}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Terrain:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {planet.terrain}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Surface water:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {planet.surface_water}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Population:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {planet.population}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Residents:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {isResidentsLoading || !residents ? (
              <ContentListLoader />
            ) : (
              <div className="flex flex-wrap">
                {residents.map((resident) => (
                  <div
                    key={resident.url}
                    className="w-full md:w-4/12 sm:w-6/12 px-3 mt-1 mb-1"
                  >
                    <NavLink
                      className="link"
                      to={`/resident/${getPageId(resident.url)}`}
                    >
                      {'name' in resident ? resident.name : ''}
                    </NavLink>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Films:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {isFilmsLoading || !films ? (
              <ContentListLoader />
            ) : (
              <div className="flex flex-wrap">
                {films.map((film) => (
                  <div
                    key={film.url}
                    className="w-full md:w-4/12 sm:w-6/12 px-3 mb-1"
                  >
                    <NavLink
                      className="link"
                      to={`/films/${getPageId(film.url)}`}
                    >
                      {'title' in film ? film.title : ''}
                    </NavLink>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <button
          className="backToPlanetsButton mb-3 w-full"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default PlanetItem
