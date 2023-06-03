import { defaultsDeep } from 'lodash';

const SET_STARSHIPS_SOURCE = 'starships-reducer/SET-STARSHIPS-SOURCE';

const initialState = {
  starshipsSource: {},
};

const starshipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STARSHIPS_SOURCE:
      return {
        ...state,
        starshipsSource: defaultsDeep({ ...state.starshipsSource }, action.data),
      };
    default:
      return state;
  }
};
/* ACTION CREATORS  */

export const setStarshipsSource = (data) => {
  return {
    type: SET_STARSHIPS_SOURCE,
    data,
  };
};

/* THUNK CREATORS  */

export default starshipsReducer;
