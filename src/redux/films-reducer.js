import { filmsApi } from '../api/api';
import { setPeopleSource } from './people-reducer';
import { has } from 'lodash';
import { setPlanetsSource } from './planets-reducer';
import { setStarshipsSource } from './starships-reducer';
import { setVehiclesSource } from './vehicles-reducer';
import { setSpeciesSource } from './species-reducer';

const SET_FILMS_LIST = 'films-reducer/SET-FILMS-LIST';
const SET_IS_FILMS_FETCHING = 'films-reducer/SET-IS-FILMS-FETCHING';
const SET_IS_FILM_CHARACTERS_FETCHING = 'films-reducer/SET-IS-FILM-CHARACTERS-FETCHING';
const SET_IS_FILM_PLANETS_FETCHING = 'films-reducer/SET-IS-FILM-PLANETS-FETCHING';
const SET_IS_FILM_STARSHIPS_FETCHING = 'films-reducer/SET-IS-FILM-STARSHIPS-FETCHING';
const SET_IS_FILM_SPECIES_FETCHING = 'films-reducer/SET-IS-FILM-SPECIES-FETCHING';
const SET_IS_FILM_VEHICLES_FETCHING = 'films-reducer/SET-IS-FILM-VEHICLES-FETCHING';
const SET_CHOSEN_FILM = 'films-reducer/SET_CHOSEN_FILM';
const CLEAR_ITERATION = 'films-reducer/CLEAR-ITERATION';
const SET_ERROR = 'films-reducer/SET-ERROR';

const initialState = {
  films: null,
  isFilmsFetching: false,
  isFilmPlanetsFetching: false,
  isFilmCharactersFetching: false,
  isFilmVehiclesFetching: false,
  isFilmStarshipsFetching: false,
  isFilmSpeciesFetching: false,
  chosenFilm: null,
  gettingPlanetIterations: 0,
  errors: {},
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.data.chosenFilm]: {
            ...state.errors[action.data.chosenFilm],
            [action.data.section]: action.data.isLoadingError,
          },
        },
      };
    case SET_FILMS_LIST:
      return {
        ...state,
        films: action.data,
      };
    case SET_IS_FILMS_FETCHING:
      return {
        ...state,
        isFilmsFetching: action.state,
      };
    case SET_IS_FILM_CHARACTERS_FETCHING:
      return {
        ...state,
        isFilmCharactersFetching: action.state,
      };
    case SET_IS_FILM_PLANETS_FETCHING:
      return {
        ...state,
        isFilmPlanetsFetching: action.state,
      };
    case SET_IS_FILM_VEHICLES_FETCHING:
      return {
        ...state,
        isFilmVehiclesFetching: action.state,
      };
    case SET_IS_FILM_STARSHIPS_FETCHING:
      return {
        ...state,
        isFilmStarshipsFetching: action.state,
      };
    case SET_IS_FILM_SPECIES_FETCHING:
      return {
        ...state,
        isFilmSpeciesFetching: action.state,
      };
    case SET_CHOSEN_FILM:
      return {
        ...state,
        chosenFilm: Number(action.chosenFilm),
      };

    case CLEAR_ITERATION:
      return {
        ...state,
        [action.nameOfCounter]: 0,
      };

    default:
      return state;
  }
};

/* ACTION CREATORS  */

const setError = (data) => {
  return { type: SET_ERROR, data };
};

const setFilmsList = (data) => {
  return { type: SET_FILMS_LIST, data };
};

export const setIsFilmsFetching = (state) => {
  return { type: SET_IS_FILMS_FETCHING, state };
};

export const setIsFilmPlanetsFetching = (state) => {
  return { type: SET_IS_FILM_PLANETS_FETCHING, state };
};

export const setIsFilmCharactersFetching = (state) => {
  return { type: SET_IS_FILM_CHARACTERS_FETCHING, state };
};

export const setIsFilmVehiclesFetching = (state) => {
  return { type: SET_IS_FILM_VEHICLES_FETCHING, state };
};

export const setIsFilmStarshipsFetching = (state) => {
  return { type: SET_IS_FILM_STARSHIPS_FETCHING, state };
};

export const setIsFilmSpeciesFetching = (state) => {
  return { type: SET_IS_FILM_SPECIES_FETCHING, state };
};

export const setChosenFilm = (chosenFilm) => {
  return { type: SET_CHOSEN_FILM, chosenFilm };
};

/* THUNK CREATORS  */

export const getCharacters = () => async (dispatch, getState) => {
  const isFetching = getState().filmsPage.isFilmCharactersFetching;
  if (isFetching) {
    return null;
  }
  const chosenFilm = getState().filmsPage.chosenFilm;
  const charactersPromises = getState().filmsPage.films[chosenFilm].characters.map((url) =>
    dispatch(getCharacterData(url))
  );
  dispatch(setIsFilmCharactersFetching(true));
  Promise.all(charactersPromises)
    .catch(() => {
      dispatch(setError({ chosenFilm, section: 'characters', isLoadingError: true }));
    })
    .finally(() => dispatch(setIsFilmCharactersFetching(false)));
};

export const getStarships = () => async (dispatch, getState) => {
  const isFetching = getState().filmsPage.isFilmStarshipsFetching;
  if (isFetching) {
    return null;
  }
  const chosenFilm = getState().filmsPage.chosenFilm;
  const starshipsPromises = getState().filmsPage.films[chosenFilm].starships.map((url) =>
    dispatch(getStarshipData(url))
  );
  dispatch(setIsFilmStarshipsFetching(true));
  Promise.all(starshipsPromises)
    .catch(() => {
      dispatch(setError({ chosenFilm, section: 'starships', isLoadingError: true }));
    })
    .finally(() => dispatch(setIsFilmStarshipsFetching(false)));
};

export const getPlanets = () => async (dispatch, getState) => {
  const isFetching = getState().filmsPage.isFilmPlanetsFetching;
  if (isFetching) {
    return null;
  }
  const chosenFilm = getState().filmsPage.chosenFilm;
  const planetsPromises = getState().filmsPage.films[chosenFilm].planets.map((url) => dispatch(getPlanetData(url)));
  dispatch(setIsFilmPlanetsFetching(true));

  Promise.all(planetsPromises)
    .catch(() => {
      dispatch(setError({ chosenFilm, section: 'planets', isLoadingError: true }));
    })
    .finally(() => dispatch(setIsFilmPlanetsFetching(false)));
};

export const getSpecies = () => async (dispatch, getState) => {
  const isFetching = getState().filmsPage.isFilmSpeciesFetching;
  if (isFetching) {
    return null;
  }
  const chosenFilm = getState().filmsPage.chosenFilm;
  const speciesPromises = getState().filmsPage.films[chosenFilm].species.map((url) => dispatch(getSpecieData(url)));
  dispatch(setIsFilmSpeciesFetching(true));
  Promise.all(speciesPromises)
    .catch(() => {
      dispatch(setError({ chosenFilm, section: 'species', isLoadingError: true }));
    })
    .finally(() => dispatch(setIsFilmSpeciesFetching(false)));
};

export const getVehicles = () => async (dispatch, getState) => {
  const isFetching = getState().filmsPage.isFilmVehiclesFetching;
  if (isFetching) {
    return null;
  }

  const chosenFilm = getState().filmsPage.chosenFilm;
  const vehiclesPromises = getState().filmsPage.films[chosenFilm].vehicles.map((url) => dispatch(getVehicleData(url)));
  dispatch(setIsFilmVehiclesFetching(true));
  Promise.all(vehiclesPromises)
    .catch(() => {
      dispatch(setError({ chosenFilm, section: 'vehicles', isLoadingError: true }));
    })
    .finally(() => dispatch(setIsFilmVehiclesFetching(false)));
};

export const getFilmsList = () => async (dispatch, getState) => {
  try {
    if (!getState().filmsPage.films) {
      dispatch(setIsFilmsFetching(true));
      const response = await filmsApi.getFilms();

      if (response.status === 200) {
        dispatch(setFilmsList(response.data.results));

        dispatch(setIsFilmsFetching(false));
      }
    }

    dispatch(getCharacters());
    dispatch(getPlanets());
    dispatch(getStarships());
    dispatch(getSpecies());
    dispatch(getVehicles());
  } catch (e) {
    dispatch(setIsFilmsFetching(false));
    dispatch(setIsFilmCharactersFetching(false));
    dispatch(setIsFilmPlanetsFetching(false));
    dispatch(setIsFilmVehiclesFetching(false));
    dispatch(setIsFilmStarshipsFetching(false));
    dispatch(setIsFilmSpeciesFetching(false));
    console.error('Some error occurred = ', e.message);
  }
};

export const getPlanetData = (planetUrl) => async (dispatch, getState) => {
  if (has(getState().planetsPage.planetsSource, planetUrl)) {
    return;
  }
  const response = await filmsApi.getDescriptionData(planetUrl);
  dispatch(setPlanetsSource({ [planetUrl]: response.data }));
};

export const getCharacterData = (characterUrl) => async (dispatch, getState) => {
  if (has(getState().peoplePage.peopleSource, characterUrl)) {
    return;
  }
  const response = await filmsApi.getDescriptionData(characterUrl);
  dispatch(setPeopleSource({ [characterUrl]: response.data }));
};

export const getStarshipData = (starshipUrl) => async (dispatch, getState) => {
  if (has(getState().starshipsPage.starshipsSource, starshipUrl)) {
    return;
  }
  const response = await filmsApi.getDescriptionData(starshipUrl);
  dispatch(setStarshipsSource({ [starshipUrl]: response.data }));
};

export const getVehicleData = (vehiclesUrl) => async (dispatch, getState) => {
  if (has(getState().vehiclesPage.vehiclesSource, vehiclesUrl)) {
    return;
  }
  const response = await filmsApi.getDescriptionData(vehiclesUrl);
  dispatch(setVehiclesSource({ [vehiclesUrl]: response.data }));
};

export const getSpecieData = (speciesUrl) => async (dispatch, getState) => {
  if (has(getState().speciesPage.speciesSource, speciesUrl)) {
    return;
  }
  const response = await filmsApi.getDescriptionData(speciesUrl);
  dispatch(setSpeciesSource({ [speciesUrl]: response.data }));
};

export default filmsReducer;
