import {peopleApi} from "../api/api";

const SET_PEOPLE_LIST = "people-reducer/SET-PEOPLE-LIST"
const SET_PERSON_DESCRIPTION = "people-reducer/SET-PERSON-DESCRIPTION"
const SET_FILM_DATA = "people-reducer/SET-FILM-DATA"
const CLEAR_FILM_DATA = "people-reducer/CLEAR-FILM-DATA"
const SET_IS_FETCHING = "people-reducer/SET-IS-FETCHING"


let initialState = {
    people: null,
    nextPage: "",
    prevPage: "",
    pageCount: "",
    person: null,
    isFetching: false,
    currentPage: null,
    selectedPersonFilmsDescription: []
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
                isFetching: action.state
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


export const setIsFetching = (state) => {
    return {type: SET_IS_FETCHING, state}
}


/* THUNK CREATORS  */

export const getPeopleList = (pageNumber) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let response = await peopleApi.getPeople(pageNumber)
    dispatch(setPeopleList(response.data, pageNumber))
}


export const getPersonDescription = (personId) => async (dispatch, getState) => {

    dispatch(setIsFetching(true))
    let response = await peopleApi.getPeopleDescription(personId)
    if (response.status === 200) {
        dispatch(setPersonDescription(response.data))

        getState().peoplePage.person.films.forEach(item => {
            dispatch(getFilmData(item))
        })


        if (getState().peoplePage.person.films.length === getState().peoplePage.selectedPersonFilmsDescription.length) {
            dispatch(setIsFetching(false))
        }
    }

}


export const getFilmData = (filmUrl) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let response = await peopleApi.getFilmData(filmUrl)
    if (response.status === 200) {
        dispatch(setFilmData(response.data))
    }
}


export default peopleReducer