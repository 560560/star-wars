import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import moment from 'moment'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ContentListLoader } from '../Common/ContentLoader'
import { Preloader } from '../Common/Preloader/Preloader'
import { filmsExtras } from './constants'
import { List } from './List'

import { useGetResourcesByUrlsQuery } from '@/api/baseApi'
import { useGetFilmsQuery } from '@/api/filmsApi'

const screenHeight = window.innerHeight
const style = { minHeight: `${screenHeight}px` }

export const Films = React.memo(() => {
  const history = useHistory()
  const { filmId } = useParams<{ filmId?: string }>()
  const [index, setIndex] = useState(0)
  const [internalRouting, setInternalRouting] = useState(false)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  // Fetch all films
  const { data: films, isLoading: isFilmsLoading } = useGetFilmsQuery()

  const currentFilm = films?.[index]

  // Fetch related resources - RTK Query automatically handles skip and caching
  const { data: characters, isLoading: isCharactersLoading } =
    useGetResourcesByUrlsQuery(currentFilm?.characters, { skip: !currentFilm })

  const { data: planets, isLoading: isPlanetsLoading } =
    useGetResourcesByUrlsQuery(currentFilm?.planets, { skip: !currentFilm })

  const { data: starships, isLoading: isStarshipsLoading } =
    useGetResourcesByUrlsQuery(currentFilm?.starships, { skip: !currentFilm })

  const { data: vehicles, isLoading: isVehiclesLoading } =
    useGetResourcesByUrlsQuery(currentFilm?.vehicles, { skip: !currentFilm })

  const { data: species, isLoading: isSpeciesLoading } =
    useGetResourcesByUrlsQuery(currentFilm?.species, { skip: !currentFilm })

  // Sync URL param with state
  useEffect(() => {
    if (filmId && !internalRouting) {
      const chosenFilm = parseInt(filmId) - 1
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIndex((prevIndex) =>
        prevIndex !== chosenFilm ? chosenFilm : prevIndex,
      )
      if (swiperInstance && swiperInstance.activeIndex !== chosenFilm) {
        swiperInstance.slideTo(chosenFilm)
      }
    }
  }, [filmId, internalRouting, swiperInstance])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSlideChange = useCallback(
    (swiper: SwiperType) => {
      const selectedIndex = swiper.activeIndex
      setIndex(selectedIndex)
      history.push(`/films/${selectedIndex + 1}`)
      setInternalRouting(true)
    },
    [history],
  )

  if (isFilmsLoading || !films) {
    return <Preloader />
  }

  return (
    <div className="filmsWrapper" style={style}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center carousel-wrapper">
          <Swiper
            navigation
            className="pb-5 w-full"
            initialSlide={index}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={0}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiperInstance}
          >
            {filmsExtras.map(({ episode_id, imgSrc }) => (
              <SwiperSlide key={episode_id}>
                <div className="relative">
                  <img
                    alt={String(episode_id)}
                    className="block w-full"
                    src={imgSrc}
                  />
                  <div className="absolute bottom-5 left-0 right-0 text-center text-white">
                    <h1>STAR WARS: episode {episode_id}</h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h1 className="text-center mt-4 sm:mt-4 mb-3 sm:mb-5">
          {films[index].title}
        </h1>
        <div className="flex flex-wrap mb-4 pt-2">
          <div className="w-full sm:w-4/12 px-3 text-left sm:text-right descriptionTitle">
            <h5>Description:</h5>
          </div>
          <div className="w-full sm:w-8/12 px-3 text-left descriptionText">
            {films[index].opening_crawl}
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-4/12 px-3 text-left sm:text-right descriptionTitle">
            <h5>Director:</h5>
          </div>
          <div className="w-full sm:w-8/12 px-3 text-left descriptionText">
            {films[index].director}
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-4/12 px-3 text-left sm:text-right descriptionTitle">
            <h5>Producer:</h5>
          </div>
          <div className="w-full sm:w-8/12 px-3 text-left descriptionText">
            {films[index].producer}
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-4/12 px-3 text-left sm:text-right descriptionTitle">
            <h5>Release date:</h5>
          </div>
          <div className="w-full sm:w-8/12 px-3 text-left descriptionText">
            {moment(films[index].release_date).format('DD.MM.YYYY')}
          </div>
        </div>

        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-4/12 px-3 text-left sm:text-right descriptionTitle">
            <h5>Characters:</h5>
          </div>
          <div className="w-full sm:w-8/12 px-3 text-left descriptionText">
            {isCharactersLoading ? (
              <ContentListLoader />
            ) : (
              <List items={characters} to={'resident'} />
            )}
          </div>
        </div>

        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-4/12 px-3 text-left sm:text-right descriptionTitle">
            <h5>Planets:</h5>
          </div>
          <div className="w-full sm:w-8/12 px-3 text-left descriptionText">
            {isPlanetsLoading ? (
              <ContentListLoader />
            ) : (
              <List items={planets} to={'planet'} />
            )}
          </div>
        </div>

        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-4/12 px-3 text-left sm:text-right descriptionTitle">
            <h5>Starships:</h5>
          </div>
          <div className="w-full sm:w-8/12 px-3 text-left descriptionText">
            {isStarshipsLoading ? (
              <ContentListLoader />
            ) : (
              <List items={starships} to={'starship'} />
            )}
          </div>
        </div>

        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-4/12 px-3 text-left sm:text-right descriptionTitle">
            <h5>Vehicles:</h5>
          </div>
          <div className="w-full sm:w-8/12 px-3 text-left descriptionText">
            {isVehiclesLoading ? (
              <ContentListLoader />
            ) : (
              <List items={vehicles} to={'vehicle'} />
            )}
          </div>
        </div>

        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-4/12 px-3 text-left sm:text-right descriptionTitle">
            <h5>Species:</h5>
          </div>
          <div className="w-full sm:w-8/12 px-3 text-left descriptionText">
            {isSpeciesLoading ? (
              <ContentListLoader />
            ) : (
              <List items={species} to={'specie'} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
})
