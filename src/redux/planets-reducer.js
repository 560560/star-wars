import {planetsApi} from "../api/api";

const SET_PLANET_LIST = "SET-PLANET-LIST"

let initialState = {
    planets: [],
    nextPage: "",
    prevPage:"",
    pageCount: ""
}

const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLANET_LIST:
            return {
                ...state,
                planets: action.planets,
                nextPage: action.nextPage,
                prevPage: action.prevPage,
                pageCount: action.pageCount
            }
        default:
            return state

    }
}


/* ACTION CREATORS  */
const setPlanetsList = (data) => {
    return {type: SET_PLANET_LIST, planets: data.results, nextPage: data.next, prevPage: data.previous, pageCount: data.count}

}


/* THUNK CREATORS  */
export const getPlanetsList = (pageUrl = "http://swapi.dev/api/planets/?page=1") => async (dispatch) => {
    let response = await planetsApi.getPlanets(pageUrl)
    dispatch(setPlanetsList(response.data))
}


export default planetsReducer