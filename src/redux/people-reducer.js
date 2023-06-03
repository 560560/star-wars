import { peopleApi } from '../api/api';
import { defaultsDeep } from 'lodash';
import { getPageId } from '../utils';

const SET_PEOPLE_LIST = 'people-reducer/SET-PEOPLE-LIST';
const SET_PERSON_DESCRIPTION = 'people-reducer/SET-PERSON-DESCRIPTION';
const CLEAR_PERSON_DESCRIPTION = 'people-reducer/CLEAR-PERSON-DESCRIPTION';
const SET_FILM_DATA = 'people-reducer/SET-FILM-DATA';
const CLEAR_FILM_DATA = 'people-reducer/CLEAR-FILM-DATA';
const SET_IS_FETCHING = 'people-reducer/SET-IS-FETCHING';
const SET_HOME_PLANET = 'people-reducer/SET-HOME-PLANET';
const SET_PERSON_PAGE = 'people-reducer/SET-PERSON-PAGE';
const SET_PEOPLE_LIST_Y_POSITION = 'people-reducer/SET-PEOPLE-LIST-Y-POSITION';
const SET_PEOPLE_SOURCE = 'people-reducer/SET-PEOPLE-SOURCE';

const initialState = {
  people: null,
  nextPage: '',
  prevPage: '',
  pageCount: '',
  person: null,
  isFetching: false,
  currentPage: null,
  selectedPersonFilmsDescription: [],
  homePlanet: null,
  personPage: null,
  peopleListYPosition: null,
  peopleSource: {},
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE_SOURCE:
      return {
        ...state,
        peopleSource: defaultsDeep({ ...state.peopleSource }, action.data),
      };
    case SET_PEOPLE_LIST:
      return {
        ...state,
        people: action.people,
        nextPage: action.nextPage,
        prevPage: action.prevPage,
        pageCount: action.pageCount,
        currentPage: action.pageNumber,
        isFetching: false,
      };
    case SET_PERSON_DESCRIPTION:
      return {
        ...state,
        person: action.data,
      };
    case CLEAR_PERSON_DESCRIPTION:
      return {
        ...state,
        person: null,
      };
    case SET_FILM_DATA:
      return {
        ...state,
        selectedPersonFilmsDescription: [...state.selectedPersonFilmsDescription, action.data],
      };
    case CLEAR_FILM_DATA:
      return {
        ...state,
        selectedPersonFilmsDescription: [],
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.fetchingStatatus,
      };
    case SET_HOME_PLANET:
      return {
        ...state,
        homePlanet: action.data,
      };
    case SET_PERSON_PAGE:
      return {
        ...state,
        personPage: action.pageNumber,
      };
    case SET_PEOPLE_LIST_Y_POSITION:
      return {
        ...state,
        peopleListYPosition: action.y,
      };
    default:
      return state;
  }
};

/* ACTION CREATORS  */

export const setPeopleSource = (data) => {
  return {
    type: SET_PEOPLE_SOURCE,
    data,
  };
};

const setPeopleList = (data, pageNumber) => {
  return {
    type: SET_PEOPLE_LIST,
    people: data.results,
    nextPage: data.next,
    prevPage: data.previous,
    pageCount: data.count,
    pageNumber,
  };
};

const setPersonDescription = (data) => {
  return { type: SET_PERSON_DESCRIPTION, data };
};

const setFilmData = (data) => {
  return { type: SET_FILM_DATA, data };
};
export const clearFilmData = () => {
  return { type: CLEAR_FILM_DATA };
};

export const setIsFetching = (fetchingStatatus) => {
  return { type: SET_IS_FETCHING, fetchingStatatus };
};

const setHomePlanet = (data) => {
  return { type: SET_HOME_PLANET, data };
};
const setPersonPage = (pageNumber) => {
  return { type: SET_PERSON_PAGE, pageNumber };
};

export const setPeopleListYPosition = (y) => {
  return { type: SET_PEOPLE_LIST_Y_POSITION, y };
};

export const clearPersonDescription = () => {
  return { type: CLEAR_PERSON_DESCRIPTION };
};

/* THUNK CREATORS  */

export const getPeopleList = (pageNumber) => async (dispatch) => {
  dispatch(setIsFetching(true));
  const response = await peopleApi.getPeople(pageNumber);
  dispatch(setPeopleList(response.data, pageNumber));
};

export const getPersonDescription =
  (personId, lastLocationPath = '') =>
  async (dispatch, getState) => {
    dispatch(setIsFetching(true));
    dispatch(setPersonPage(personId));
    if (getState().peoplePage.people && lastLocationPath.includes('/people/')) {
      const personIndex = getState()
        .peoplePage.people.map((person, index) => (getPageId(person.url) === getPageId(personId) ? index : undefined))
        .filter((item) => item !== undefined);

      const person = getState().peoplePage.people[personIndex];
      dispatch(setPersonDescription(person));
      dispatch(getHomePlanet(person.homeworld));
    } else {
      const response = await peopleApi.getPeopleDescription(personId);
      if (response.status === 200) {
        dispatch(setPersonDescription(response.data));
        dispatch(getHomePlanet(response.data.homeworld));
      }
    }

    getState().peoplePage.person.films.forEach((item) => {
      dispatch(getFilmData(item));
    });
  };

export const getFilmData = (filmUrl) => async (dispatch) => {
  const response = await peopleApi.getFilmData(filmUrl);
  if (response.status === 200) {
    dispatch(setFilmData(response.data));
    dispatch(setIsFetching(false));
  }
};

export const getHomePlanet = (homePlanetUrl) => async (dispatch) => {
  const response = await peopleApi.getHomePlanet(homePlanetUrl);
  if (response.status === 200) {
    dispatch(setHomePlanet(response.data));
    dispatch(setIsFetching(false));
  }
};

export default peopleReducer;
