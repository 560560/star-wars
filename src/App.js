import React from 'react';
import './styles/main.scss';

import PlanetsContainer from "./components/Planets/PlanetsContainer";
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import PlanetItemContainer from "./components/Planets/PlanetItem/PlanetItemContainer";
import FilmContainer from "./components/Films/Film/FilmContainer";
import ResidentContainer from "./components/Residents/Resident/ResidentContainer";
import HomeContainer from "./components/Home/HomeContainer";
import FilmsContainer from "./components/Films/FilmsContainer";
import ResidentsContainer from "./components/Residents/ResidentsContainer";
import SpeciesContainer from "./components/Species/SpeciesContainer";
import VehiclesContainer from "./components/Vehicles/VehiclesContainer";
import StarshipsContainer from "./components/Starships/StarshipsContainer";



function App(props) {

    return (
        <div className="appWrapper">
            <Header/>
            <Switch>
                <Route exact path="/" component={HomeContainer}/>
                <Route path="/planets/:planetsId?" component={PlanetsContainer}/>
                <Route exact path="/films" component={FilmsContainer}/>
                <Route exact path="/people" component={ResidentsContainer}/>
                <Route exact path="/species" component={SpeciesContainer}/>
                <Route exact path="/starships" component={StarshipsContainer}/>
                <Route exact path="/vehicles" component={VehiclesContainer}/>
                <Route path="/planet/:planetId?" component={PlanetItemContainer}/>
                <Route path="/film/:filmId?" component={FilmContainer}/>
                <Route path="/resident/:residentId?" component={ResidentContainer}/>
            </Switch>
        </div>
    );
}

export default App;
