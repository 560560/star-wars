import { defaultsDeep } from 'lodash';

const SET_SPECIES_SOURCE = 'species-reducer/SET-SPECIES-SOURCE';

const initialState = {
  speciesSource: {},
};

const speciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPECIES_SOURCE:
      return { ...state, speciesSource: defaultsDeep({ ...state.speciesSource }, action.data) };
    default:
      return state;
  }
};

/* ACTION CREATORS  */

export const setSpeciesSource = (data) => {
  return {
    type: SET_SPECIES_SOURCE,
    data,
  };
};

/* THUNK CREATORS  */

export default speciesReducer;
