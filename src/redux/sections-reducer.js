import { statisticsApi } from '../api/api';

const SET_SECTIONS = 'SET-SECTIONS';

const initialState = {
  sections: null,
};

const sectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SECTIONS:
      return {
        ...state,
        sections: action.data,
      };
    default:
      return state;
  }
};

/* ACTION CREATORS  */
const setSections = (data) => {
  return { type: SET_SECTIONS, data };
};

/* THUNK CREATORS  */

export const getSections = () => async (dispatch) => {
  const response = await statisticsApi.getSections();
  dispatch(setSections(response.data));
};

export default sectionsReducer;
