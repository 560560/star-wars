import { defaultsDeep } from 'lodash';

const SET_VEHICLES_SOURCE = 'vehicles-reducer/SET-VEHICLES-SOURCE';

const initialState = {
  vehiclesSource: {},
};

const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VEHICLES_SOURCE:
      return { ...state, vehiclesSource: defaultsDeep({ ...state.vehiclesSource }, action.data) };
    default:
      return state;
  }
};

/* ACTION CREATORS  */

export const setVehiclesSource = (data) => {
  return {
    type: SET_VEHICLES_SOURCE,
    data,
  };
};

/* THUNK CREATORS  */

export default vehiclesReducer;
