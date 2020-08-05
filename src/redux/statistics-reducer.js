import {statisticsApi} from "../api/api";

const SET_SECTIONS = "SET-SECTIONS"


let initialState = {
    sections: null
}

const statisticsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SECTIONS:
            return {
                ...state,
                sections: action.data
            }
        default:
            return state

    }
}

/* ACTION CREATORS  */
const setSections = (data) => {
    return {type:SET_SECTIONS, data}
}

/* THUNK CREATORS  */

export const getSections = () => async (dispatch) => {
 let response = await statisticsApi.getSections()
    dispatch(setSections(response.data))

}


export default statisticsReducer