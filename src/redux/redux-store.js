import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import planetsReducer from './planets-reducer';
import sectionsReducer from './sections-reducer';
import filmsReducer from './films-reducer';
import peopleReducer from './people-reducer';
import speciesReducer from './species-reducer';
import vehiclesReducer from './vehicles-reducer';
import starshipsReducer from './starships-reducer';
import imagesReducer from './images-reducer';

const reducers = combineReducers({
  planetsPage: planetsReducer,
  sectionsPage: sectionsReducer,
  imagesStore: imagesReducer,
  filmsPage: filmsReducer,
  peoplePage: peopleReducer,
  speciesPage: speciesReducer,
  vehiclesPage: vehiclesReducer,
  starshipsPage: starshipsReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
