import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ContentListLoader } from '../../common/ContentLoader'
import { Preloader } from '../../common/Preloader'
import { planetsExtras } from '../constants'

import { useGetResourcesByUrlsQuery } from '@/api/baseApi'
import { useGetPlanetQuery } from '@/api/planetsApi'
import { ErrorMessage } from '@/components/common/ErrorMessage'
import { TransitionLink } from '@/components/common/TransitionLink'
import { useViewTransition } from '@/hooks/useViewTransition'
import { formatPopulation } from '@/utils/formatNumber'

const getPageId = (url: string): number => parseInt(url.replace(/[^\d]/g, ''))

const PlanetItem = () => {
  const { planetId } = useParams<{ planetId?: string }>()
  const { goBack } = useViewTransition()

  const images = planetsExtras

  const {
    data: planet,
    isLoading,
    isError,
  } = useGetPlanetQuery(planetId ? parseInt(planetId) : 0)

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
    goBack()
  }

  if (isLoading) {
    return <Preloader />
  }

  if (isError || !planet) {
    return <ErrorMessage />
  }

  const planetImg = images.find((item) => item.name === planet.name)
  const planetImgSrc =
    planetImg?.imgSrc || images.find((item) => item.name === 'unknown')?.imgSrc

  return (
    <div className="sectionsContainer mx-auto max-w-[1000px] w-full">
      <div
        className={
          isLoading
            ? 'foggy text-center planetItemContainer container mx-auto px-4'
            : 'text-center planetItemContainer container mx-auto px-4'
        }
      >
        <div className="flex flex-wrap gap-x-8  pt-5 mb-[62px]">
          <div className="w-[220px] justify-items-end sm:pb-0">
            <img alt={planet.name} src={planetImgSrc} />
          </div>
          <div className="flex flex-col justify-center text-left sm:text-center text-2xl">
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
            {formatPopulation(planet.population)}
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
                    className="w-full md:w-4/12 sm:w-6/12  mt-1 mb-1"
                  >
                    <TransitionLink
                      className="link"
                      to={`/resident/${getPageId(resident.url)}`}
                    >
                      {'name' in resident ? resident.name : ''}
                    </TransitionLink>
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
                    className="w-full md:w-4/12 sm:w-6/12 mb-1"
                  >
                    <TransitionLink
                      className="link"
                      to={`/films/${getPageId(film.url)}`}
                    >
                      {'title' in film ? film.title : ''}
                    </TransitionLink>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <button className="backButton my-10" onClick={handleBack}>
          Go back
        </button>
      </div>
    </div>
  )
}

export default PlanetItem
