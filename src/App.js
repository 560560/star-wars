import React from 'react';
import './styles/main.scss';
import StatisticsContainer from "./components/Statistics/StatisticsContainer";
import PlanetsContainer from "./components/Planets/PlanetsContainer";
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import PlanetItemContainer from "./components/Planets/PlanetItem/PlanetItemContainer";
import FilmContainer from "./components/Films/Film/FilmContainer";
import ResidentContainer from "./components/Residents/Resident/ResidentContainer";



function App(props) {

    return (
        <div className="appWrapper">
            <Header/>
            <Switch>
                <Route exact path="/" component={PlanetsContainer}/>
                <Route exact path="/planets" component={PlanetsContainer}/>
                <Route exact path="/statistics" component={StatisticsContainer}/>
                <Route path="/planet/:planetId?" component={PlanetItemContainer}/>
                <Route path="/film/:filmId?" component={FilmContainer}/>
                <Route path="/resident/:residentId?" component={ResidentContainer}/>
            </Switch>
        </div>
    );
}

export default App;
