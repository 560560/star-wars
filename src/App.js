import React from 'react';
import './styles/main.scss';

import PlanetsContainer from "./components/Planets/PlanetsContainer";
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import PlanetItemContainer from "./components/Planets/PlanetItem/PlanetItemContainer";

import ResidentContainer from "./components/Residents/Resident/ResidentContainer";
import HomeContainer from "./components/Home/HomeContainer";
import FilmsContainer from "./components/Films/FilmsContainer";
import ResidentsContainer from "./components/Residents/ResidentsContainer";
import SpeciesContainer from "./components/Species/SpeciesContainer";
import VehiclesContainer from "./components/Vehicles/VehiclesContainer";
import StarshipsContainer from "./components/Starships/StarshipsContainer";
import StarshipItemContainer from "./components/Starships/StarshipItem/StarshipItemContainer";



function App(props) {

    return (
        <div className="appWrapper">
            <Header/>
            <Switch>
                <Route exact path="/" component={HomeContainer}/>
                <Route path="/planets/:planetsId?" component={PlanetsContainer}/>
                <Route path="/films/:filmId?" component={FilmsContainer}/>
                <Route exact path="/people" component={ResidentsContainer}/>
                <Route exact path="/species" component={SpeciesContainer}/>
                <Route path="/starships/:starshipsId?" component={StarshipsContainer}/>
                <Route path="/starship/:starshipId?" component={StarshipItemContainer}/>
                <Route exact path="/starships/:planetsId?" component={StarshipsContainer}/>
                <Route exact path="/vehicles" component={VehiclesContainer}/>
                <Route path="/planet/:planetId?" component={PlanetItemContainer}/>
                <Route path="/resident/:residentId?" component={ResidentContainer}/>
            </Switch>
        </div>
    );
}

export default App;
