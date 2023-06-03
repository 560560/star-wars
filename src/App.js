import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import PlanetItemContainer from './components/Planets/PlanetItem/PlanetItemContainer';
import PlanetsContainer from './components/Planets/PlanetsContainer';
import ResidentContainer from './components/Residents/ResidentItem/ResidentItemContainer';
import ResidentsContainer from './components/Residents/ResidentsContainer';
import { StarshipItem } from './components/Starships/StarshipItem';
import { Starships } from './components/Starships';
import { Films } from './components/Films';
import { Species } from './components/Species';
import { Vehicles } from './components/Vehicles';
import { VehicleItem } from './components/Vehicles/VehicleItem';
import { SpecieItem } from './components/Species/SpecieItem';
import './styles/main.scss';

const App = () => (
  <div className="appWrapper">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/planets/:planetsId?" component={PlanetsContainer} />
      <Route path="/planet/:planetId?" component={PlanetItemContainer} />
      <Route path="/films/:filmId?" component={Films} />
      <Route path="/starships/:starshipsId?" component={Starships} />
      <Route path="/starship/:starshipId?" component={StarshipItem} />
      <Route path="/people/:peopleId?" component={ResidentsContainer} />
      <Route path="/resident/:residentId?" component={ResidentContainer} />
      <Route path="/species/:species?" component={Species} />
      <Route path="/specie/:specie?" component={SpecieItem} />
      <Route path="/vehicles/:vehicles?" component={Vehicles} />
      <Route path="/vehicle/:vehicle?" component={VehicleItem} />
    </Switch>
    <Footer />
  </div>
);

export default withRouter(App);
