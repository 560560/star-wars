import {filmsApi} from "../api/api";


const SET_FILMS_LIST = "films-reducer/SET-FILMS-LIST"
const CLEAR_FILMS_LIST = "films-reducer/CLEAR-FILMS-LIST"
const SET_IS_FETCHING = "films-reducer/SET-IS-FETCHING"
const SET_CHOSEN_FILM = "films-reducer/SET_CHOSEN_FILM"
const SET_VEHICLES_DATA = "films-reducer/SET-VEHICLES-DATA"
const CLEAR_VEHICLES_DATA = "films-reducer/CLEAR-VEHICLES-DATA"
const SET_CHARACTERS_DATA = "films-reducer/SET-CHARACTERS-DATA"
const CLEAR_CHARACTERS_DATA = "films-reducer/CLEAR-CHARACTERS-DATA"
const SET_PLANET_DATA = "films-reducer/SET-PLANET-DATA"
const CLEAR_PLANET_DATA = "films-reducer/CLEAR-PLANET-DATA"
const SET_STARSHIPS_DATA = "films-reducer/SET-STARSHIPS-DATA"
const CLEAR_STARSHIPS_DATA = "films-reducer/CLEAR-STARSHIPS-DATA"
const SET_SPECIES_DATA = "films-reducer/SET-SPECIES-DATA"
const CLEAR_SPECIES_DATA = "films-reducer/CLEAR-SPECIES-DATA"
const SET_DESCRIPTIONS_STRUCTURE = "films-reducer/SET-DESCRIPTIONS-STRUCTURE"
const CLEAR_ITERATION = "films-reducer/CLEAR-ITERATION"


let initialState = {
    films: null,
    chosenFilm: null,
    selectedFilmPlanetsDescription: [],
    selectedFilmCharactersDescription: [],
    selectedFilmStarshipsDescription: [],
    selectedFilmVehiclesDescription: [],
    selectedFilmSpeciesDescription: [],
    gettingPlanetIterations: 0,
    gettingCharactersIterations: 0,
    gettingStarshipsIterations: 0,
    gettingVehiclesIterations: 0,
    gettingSpeciesIterations: 0,


}

const filmsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FILMS_LIST:

            return {
                ...state,
                films: action.data
            }
        case CLEAR_FILMS_LIST:
            return {
                ...state,
                films: null
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.state
            }
        case SET_CHOSEN_FILM:
            return {
                ...state,
                chosenFilm: action.chosenFilm
            }

        case SET_PLANET_DATA:
            return {
                ...state,
                ...state.selectedFilmPlanetsDescription[action.filmIndex].push(action.data),
                gettingPlanetIterations: state.gettingPlanetIterations + 1
            }

        case CLEAR_PLANET_DATA:
            return {
                ...state,
                selectedFilmPlanetsDescription: []
            }

        case SET_CHARACTERS_DATA:
            return {
                ...state,
                ...state.selectedFilmCharactersDescription[action.filmIndex].push(action.data)
            }

        case CLEAR_CHARACTERS_DATA:
            return {
                ...state,
                selectedFilmCharactersDescription: []
            }

        case SET_STARSHIPS_DATA:
            return {
                ...state,
                ...state.selectedFilmStarshipsDescription[action.filmIndex].push(action.data)
            }
        case CLEAR_STARSHIPS_DATA:
            return {
                ...state,
                selectedFilmStarshipsDescription: []
            }

        case SET_SPECIES_DATA:

            return {
                ...state,
                ...state.selectedFilmSpeciesDescription[action.filmIndex].push(action.data)
            }
        case CLEAR_SPECIES_DATA:
            return {
                ...state,
                selectedFilmSpeciesDescription: []
            }

        case SET_VEHICLES_DATA:
            return {
                ...state,
                ...state.selectedFilmVehiclesDescription[action.filmIndex].push(action.data)
            }
        case CLEAR_VEHICLES_DATA:
            return {
                ...state,
                selectedFilmVehiclesDescription: []
            }

        case SET_DESCRIPTIONS_STRUCTURE:
            return {
                ...state,
                selectedFilmPlanetsDescription: [...state.selectedFilmPlanetsDescription, []],
                selectedFilmCharactersDescription: [...state.selectedFilmCharactersDescription, []],
                selectedFilmStarshipsDescription: [...state.selectedFilmStarshipsDescription, []],
                selectedFilmVehiclesDescription: [...state.selectedFilmVehiclesDescription, []],
                selectedFilmSpeciesDescription: [...state.selectedFilmSpeciesDescription, []]
            }

        case CLEAR_ITERATION:
            return {
                ...state,
                [action.nameOfCounter]: 0
            }

        default:
            return state

    }

}

/* ACTION CREATORS  */
const setFilmsList = (data) => {
    return {type: SET_FILMS_LIST, data}
}

export const clearFilmsList = () => {
    return {type: CLEAR_FILMS_LIST}
}


export const setIsFetching = (state) => {
    return {type: SET_IS_FETCHING, state}
}

export const setChosenFilm = (chosenFilm) => {
    return {type: SET_CHOSEN_FILM, chosenFilm}
}

const setPlanetData = (data = "", filmIndex) => {
    return {type: SET_PLANET_DATA, data, filmIndex}
}

export const clearPlanetData = () => {
    return {type: CLEAR_PLANET_DATA}
}

const setCharactersData = (data = "", filmIndex) => {
    return {type: SET_CHARACTERS_DATA, data, filmIndex}
}

export const clearCharactersData = () => {
    return {type: CLEAR_CHARACTERS_DATA}

}


const setStarshipsData = (data = "", filmIndex) => {
    return {type: SET_STARSHIPS_DATA, data, filmIndex}
}

export const clearStarshipsData = () => {
    return {type: CLEAR_STARSHIPS_DATA}
}


const setVehiclesData = (data = "", filmIndex) => {
    return {type: SET_VEHICLES_DATA, data, filmIndex}
}

export const clearVehiclesData = () => {
    return {type: CLEAR_VEHICLES_DATA}
}

const setSpeciesData = (data = "", filmIndex) => {
    return {type: SET_SPECIES_DATA, data, filmIndex}
}

export const clearSpeciesData = () => {
    return {type: CLEAR_SPECIES_DATA}
}

const setDescriptionStructure = (filmIndex) => {
    return {type: SET_DESCRIPTIONS_STRUCTURE, filmIndex}
}

const clearIterations = (nameOfCounter) => {
    return {type: CLEAR_ITERATION, nameOfCounter}
}


/* THUNK CREATORS  */
export const getFilmsList = () => async (dispatch, getState) => {
    dispatch(setIsFetching(true))
    let response = await filmsApi.getFilms()

    if (response.status === 200) {
        dispatch(setFilmsList(response.data.results))
        getState().filmsPage.films.forEach((film, i) => {
            dispatch(setDescriptionStructure(i))
            film.planets.forEach(url => {
                dispatch(getPlanetData(url, i))
            })


            film.characters.forEach(url => {
                dispatch(getCharactersData(url, i))
            })
            film.starships.forEach(url => {
                dispatch(getStarshipsData(url, i))
            })
            film.vehicles.forEach(url => {
                dispatch(getVehiclesData(url, i))
            })
            film.species.forEach(url => {
                dispatch(getSpeciesData(url, i))
            })

        })
    }


}

export const getPlanetData = (planetUrl, filmIndex) => async (dispatch, getState) => {
    let urlsCount = 0;
    getState().filmsPage.films.forEach(film => {
        urlsCount += film.planets.length
    })
    let response = await filmsApi.getDescriptionData(planetUrl)
    dispatch(setPlanetData(response.data, filmIndex))
    if (urlsCount === getState().filmsPage.gettingPlanetIterations) {
        dispatch(setIsFetching(false))
        dispatch(clearIterations("gettingPlanetIterations"))
    }
}

export const getCharactersData = (characterUrl, filmIndex) => async (dispatch, getState) => {
    /*    let urlsCount = 0;
        getState().filmsPage.films.forEach(film => {
            urlsCount += film.characters.length

        })*/
    let response = await filmsApi.getDescriptionData(characterUrl)

    dispatch(setCharactersData(response.data, filmIndex))
    /*    if (urlsCount === getState().filmsPage.gettingCharactersIterations) {
            debugger
            dispatch(setIsFetching(false))
            dispatch(clearIterations("gettingCharactersIterations"))
        }*/
}


export const getStarshipsData = (starshipsUrl, filmIndex) => async (dispatch) => {
    let response = await filmsApi.getDescriptionData(starshipsUrl)
    dispatch(setStarshipsData(response.data, filmIndex))

}

export const getVehiclesData = (vehiclesUrl, filmIndex) => async (dispatch) => {
    let response = await filmsApi.getDescriptionData(vehiclesUrl)
    dispatch(setVehiclesData(response.data, filmIndex))

}
export const getSpeciesData = (speciesUrl, filmIndex) => async (dispatch) => {
    let response = await filmsApi.getDescriptionData(speciesUrl)
    dispatch(setSpeciesData(response.data, filmIndex))

}


export default filmsReducer