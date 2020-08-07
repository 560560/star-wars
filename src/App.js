import React from 'react';
import './styles/main.scss';
import {Switch, Route, withRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import PlanetItemContainer from "./components/Planets/PlanetItem/PlanetItemContainer";
import PlanetsContainer from "./components/Planets/PlanetsContainer";
import ResidentContainer from "./components/Residents/ResidentItem/ResidentItemContainer";
import ResidentsContainer from "./components/Residents/ResidentsContainer";
import StarshipItemContainer from "./components/Starships/StarshipItem/StarshipItemContainer";
import StarshipsContainer from "./components/Starships/StarshipsContainer";
import HomeContainer from "./components/Home/HomeContainer";
import FilmsContainer from "./components/Films/FilmsContainer";
import SpeciesContainer from "./components/Species/SpeciesContainer";
import VehiclesContainer from "./components/Vehicles/VehiclesContainer";
import Footer from "./components/Footer/Footer";
import VehicleItemContainer from "./components/Vehicles/VehicleItem/VehicleItemContainer";
import SpecieItemContainer from "./components/Species/SpecieItem/SpecieItemContainer";





function App(props) {

    return (
        <div className="appWrapper">
            <Header/>

            <Switch>
                <Route exact path="/" component={HomeContainer}/>
                <Route path="/planets/:planetsId?" component={PlanetsContainer}/>
                <Route path="/planet/:planetId?" component={PlanetItemContainer}/>
                <Route path="/films/:filmId?" component={FilmsContainer}/>
                <Route path="/starships/:starshipsId?" component={StarshipsContainer}/>
                <Route path="/starship/:starshipId?" component={StarshipItemContainer}/>
                <Route path="/people/:peopleId?" component={ResidentsContainer}/>
                <Route path="/resident/:residentId?" component={ResidentContainer}/>
                <Route path="/species/:species?" component={SpeciesContainer}/>
                <Route path="/specie/:specie?" component={SpecieItemContainer}/>
                <Route path="/vehicles/:vehicles?" component={VehiclesContainer}/>
                <Route path="/vehicle/:vehicle?" component={VehicleItemContainer}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default withRouter(App);
