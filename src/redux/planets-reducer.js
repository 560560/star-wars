import {planetsApi} from "../api/api";

const SET_PLANET_LIST = "planets-reducer/SET-PLANET-LIST"
const SET_PLANET_DESCRIPTION = "planets-reducer/SET-PLANET-DESCRIPTION"
const SET_FILM_DATA = "planets-reducer/SET-FILM-DATA"
const SET_RESIDENT_DATA = "planets-reducer/SET-RESIDENT-DATA"
const CLEAR_FILM_DATA = "planets-reducer/CLEAR-FILM-DATA"
const CLEAR_RESIDENT_DATA = "planets-reducer/CLEAR-RESIDENT-DATA"
const SET_IS_FETCHING = "planets-reducer/SET-IS-FETCHING "


let initialState = {
    planets: null,
    nextPage: "",
    prevPage: "",
    pageCount: "",
    planet: null,
    selectedPlanetFilmsDescription: [],
    isFetching: false,
    selectedPlanetResidentsDescription: [],
    currentPage: null

}

const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLANET_LIST:
            return {
                ...state,
                planets: action.planets,
                nextPage: action.nextPage,
                prevPage: action.prevPage,
                pageCount: action.pageCount,
                currentPage: action.pageNumber,
                isFetching: false

            }
        case SET_PLANET_DESCRIPTION:
            return {
                ...state,
                planet: action.data
            }
        case SET_FILM_DATA:
            return {
                ...state,
                selectedPlanetFilmsDescription: [...state.selectedPlanetFilmsDescription, action.data]
            }
        case CLEAR_FILM_DATA:
            return {
                ...state,
                selectedPlanetFilmsDescription: []
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.state
            }
        case SET_RESIDENT_DATA:
            return {
                ...state,
                selectedPlanetResidentsDescription: [...state.selectedPlanetResidentsDescription, action.data]
            }
        case CLEAR_RESIDENT_DATA:
            return {
                ...state,
                selectedPlanetResidentsDescription: []
            }

        default:
            return state

    }
}


/* ACTION CREATORS  */
const setPlanetsList = (data, pageNumber) => {
    return {type: SET_PLANET_LIST, planets: data.results, nextPage: data.next, prevPage: data.previous, pageCount: data.count, pageNumber}

}


const setPlanetDescription = (data) => {
    return {type: SET_PLANET_DESCRIPTION, data}
}


const setFilmData = (data) => {
    return {type: SET_FILM_DATA, data}
}

export const clearFilmData = () => {
    return {type: CLEAR_FILM_DATA}
}


const setResidentData = (data) => {
    return {type: SET_RESIDENT_DATA, data}
}

export const clearResidentData = () => {
    return {type: CLEAR_RESIDENT_DATA}
}

export const setIsFetching = (state) => {
    return {type: SET_IS_FETCHING, state}
}


/* THUNK CREATORS  */

export const getPlanetsList = (pageNumber) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let response = await planetsApi.getPlanets(pageNumber)
    dispatch(setPlanetsList(response.data, pageNumber))
}


export const getPlanetDescription = (planetId) => async (dispatch, getState) => {
    dispatch(setIsFetching(true))
    let response = await planetsApi.getPlanetDescription(planetId)
    dispatch(setPlanetDescription(response.data))
    getState().planetsPage.planet.films.forEach(item => {
        dispatch(getFilmData(item))
    })
    getState().planetsPage.planet.residents.forEach(item => {
        dispatch(getResidentData(item))
    })
    if (getState().planetsPage.planet.residents.length === getState().planetsPage.selectedPlanetResidentsDescription.length
        && getState().planetsPage.planet.films.length === getState().planetsPage.selectedPlanetFilmsDescription.length) {
        dispatch(setIsFetching(false))
    }

}


export const getFilmData = (filmUrl) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let response = await planetsApi.getFilmData(filmUrl)
    dispatch(setFilmData(response.data))
}

export const getResidentData = (residentUrl) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let response = await planetsApi.getResidentData(residentUrl)
    dispatch(setResidentData(response.data))
}

export default planetsReducer