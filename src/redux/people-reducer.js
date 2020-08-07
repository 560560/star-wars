import {peopleApi} from "../api/api";

const SET_PEOPLE_LIST = "people-reducer/SET-PEOPLE-LIST"
const SET_PERSON_DESCRIPTION = "people-reducer/SET-PERSON-DESCRIPTION"
const SET_FILM_DATA = "people-reducer/SET-FILM-DATA"
const CLEAR_FILM_DATA = "people-reducer/CLEAR-FILM-DATA"
const SET_IS_FETCHING = "people-reducer/SET-IS-FETCHING"
const SET_HOME_PLANET = "people-reducer/SET-HOME-PLANET"
const SET_PERSON_PAGE = "people-reducer/SET-PERSON-PAGE"


let initialState = {
    people: null,
    nextPage: "",
    prevPage: "",
    pageCount: "",
    person: null,
    isFetching: false,
    currentPage: null,
    selectedPersonFilmsDescription: [],
    homePlanet: null,
    personPage: null
}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE_LIST:
            return {
                ...state,
                people: action.people,
                nextPage: action.nextPage,
                prevPage: action.prevPage,
                pageCount: action.pageCount,
                currentPage: action.pageNumber,
                isFetching: false

            }
        case SET_PERSON_DESCRIPTION:
            return {
                ...state,
                person: action.data
            }
        case SET_FILM_DATA:
            return {
                ...state,
                selectedPersonFilmsDescription: [...state.selectedPersonFilmsDescription, action.data]
            }
        case CLEAR_FILM_DATA:
            return {
                ...state,
                selectedPersonFilmsDescription: []
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.fetchingStatatus
            }
        case SET_HOME_PLANET:
            return {
                ...state,
                homePlanet: action.data
            }
        case SET_PERSON_PAGE:
            return {
                ...state,
                personPage: action.pageNumber
            }
        default:
            return state

    }
}

/* ACTION CREATORS  */

const setPeopleList = (data, pageNumber) => {
    return {type: SET_PEOPLE_LIST, people: data.results, nextPage: data.next, prevPage: data.previous, pageCount: data.count, pageNumber}

}


const setPersonDescription = (data) => {
    return {type: SET_PERSON_DESCRIPTION, data}
}


const setFilmData = (data) => {
    return {type: SET_FILM_DATA, data}
}
export const clearFilmData = () => {
    return {type: CLEAR_FILM_DATA}
}


export const setIsFetching = (fetchingStatatus) => {
    return {type: SET_IS_FETCHING, fetchingStatatus}
}

const setHomePlanet = (data) => {
    return {type: SET_HOME_PLANET, data}
}
const setPersonPage = (pageNumber) => {
    return {type: SET_PERSON_PAGE, pageNumber}
}


/* THUNK CREATORS  */

export const getPeopleList = (pageNumber) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let response = await peopleApi.getPeople(pageNumber)
    dispatch(setPeopleList(response.data, pageNumber))
}


export const getPersonDescription = (personId, lastLocationPath = "") => async (dispatch, getState) => {
    dispatch(setIsFetching(true))
    dispatch(setPersonPage(personId))
    if (getState().peoplePage.people && lastLocationPath.includes("/people/")) {
        const pageID = (url) => (parseInt((url).replace(/[^\d]/g, '')))
        let personIndex = getState().peoplePage.people
            .map((person, index) => (pageID(person.url) === pageID(personId)) ? index : undefined)
            .filter(item => item !== undefined)

        let person = getState().peoplePage.people[personIndex]
        dispatch(setPersonDescription(person))

    } else {
        let response = await peopleApi.getPeopleDescription(personId)
        if (response.status === 200) {
            dispatch(setPersonDescription(response.data))
            dispatch(getHomePlanet(response.data.homeworld))
        }

    }

    getState().peoplePage.person.films.forEach(item => {
        dispatch(getFilmData(item))
    })


}


export const getFilmData = (filmUrl) => async (dispatch) => {
    /*dispatch(setIsFetching(true))*/
    let response = await peopleApi.getFilmData(filmUrl)
    if (response.status === 200) {
        dispatch(setFilmData(response.data))
    }
}

export const getHomePlanet = (homePlanetUrl) => async (dispatch) => {
    let response = await peopleApi.getHomePlanet(homePlanetUrl)
    if (response.status === 200) {
        dispatch(setHomePlanet(response.data))
    }

}

export default peopleReducer