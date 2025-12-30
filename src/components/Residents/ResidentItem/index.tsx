import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import emptyImg from '../../../assets/images/empty_img.png'
import { ContentListLoader } from '../../common/ContentLoader'
import { Preloader } from '../../common/Preloader'

import {
  useGetResourceByUrlQuery,
  useGetResourcesByUrlsQuery,
} from '@/api/baseApi'
import { useGetPersonQuery } from '@/api/peopleApi'
import { useViewTransition } from '@/hooks/useViewTransition'

const getPageId = (url: string): number => parseInt(url.replace(/[^\d]/g, ''))

const ResidentItem = () => {
  const { residentId } = useParams<{ residentId?: string }>()
  const { goBack } = useViewTransition()

  const { data: person, isLoading } = useGetPersonQuery(
    residentId ? parseInt(residentId) : 0,
  )

  const { data: homePlanet, isLoading: isHomePlanetLoading } =
    useGetResourceByUrlQuery(person?.homeworld || '', {
      skip: !person?.homeworld,
    })

  const { data: films, isLoading: isFilmsLoading } = useGetResourcesByUrlsQuery(
    person?.films,
    { skip: !person },
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    goBack()
  }

  if (isLoading || !person) {
    return <Preloader />
  }

  return (
    <div className="sectionsContainer mx-auto max-w-[1000px] w-full">
      <div
        className={
          isLoading
            ? 'foggy text-center residentItemContainer container mx-auto px-4'
            : 'text-center residentItemContainer container mx-auto px-4'
        }
      >
        <div className="flex flex-wrap gap-x-8 pt-5 mb-[62px]">
          <div className="w-[220px] justify-items-end sm:pb-0">
            <img alt={person.name} src={emptyImg} width={200} />
          </div>
          <div className="flex flex-col justify-center text-left sm:text-center text-2xl">
            <h1>{person.name.toLowerCase()}</h1>
            <h2>{person.name.toLowerCase()}</h2>
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Name:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {person.name}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Height:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {person.height}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Mass:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {person.mass}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Hair color:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {person.hair_color}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Skin color:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {person.skin_color}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Eye color:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {person.eye_color}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Birth year:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {person.birth_year}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Gender:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {person.gender}
          </div>
        </div>
        <div className="flex flex-wrap mb-3">
          <div className="w-4/12 px-3 text-right descriptionTitle">
            <h5>Homeworld:</h5>
          </div>
          <div className="w-8/12 px-3 text-left descriptionText">
            {isHomePlanetLoading || !homePlanet ? (
              <ContentListLoader />
            ) : (
              <NavLink
                className="link"
                to={`/planet/${getPageId(homePlanet.url)}`}
              >
                {'name' in homePlanet ? homePlanet.name : ''}
              </NavLink>
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
        <button className="backButton my-10" onClick={handleBack}>
          Go back
        </button>
      </div>
    </div>
  )
}

export default ResidentItem
