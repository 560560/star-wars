import React, { useEffect } from 'react'
import { NavLink, useHistory, useParams } from 'react-router-dom'

import emptyImg from '../../../assets/images/empty_img.png'
import { ContentListLoader } from '../../Common/ContentLoader'
import { Preloader } from '../../Common/Preloader/Preloader'

import {
  useGetResourceByUrlQuery,
  useGetResourcesByUrlsQuery,
} from '@/api/baseApi'
import { useGetPersonQuery } from '@/api/peopleApi'

const getPageId = (url: string): number => parseInt(url.replace(/[^\d]/g, ''))

const ResidentItem = () => {
  const { residentId } = useParams<{ residentId?: string }>()
  const history = useHistory()

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
    history.goBack()
  }

  if (isLoading || !person) {
    return <Preloader />
  }

  return (
    <div className="planetItemWrapper">
      <div
        className={
          isLoading
            ? 'foggy text-center residentItemContainer container mx-auto px-4'
            : 'text-center residentItemContainer container mx-auto px-4'
        }
      >
        <div className="flex flex-wrap pt-5 mb-5 items-center">
          <div className="w-full sm:w-5/12 px-3 text-center sm:text-right pl-sm-5 pb-3 sm:pb-0">
            <img alt={person.name} src={emptyImg} width={200} />
          </div>
          <div className="w-full sm:w-6/12 px-3 text-left sm:text-center">
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
        <button className="backToPeopleButton mb-3 w-full" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  )
}

export default ResidentItem
