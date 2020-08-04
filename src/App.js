import React from 'react';
import './styles/main.scss';
import StatisticsContainer from "./components/Statistics/StatisticsContainer";
import PlanetsContainer from "./components/Planets/PlanetsContainer";
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import PlanetItemContainer from "./components/Planets/PlanetItem/PlanetItemContainer";



function App(props) {

    return (
        <div className="appWrapper">
            <Header/>
            <Switch>
                <Route exact path="/" component={PlanetsContainer}/>
                <Route exact path="/planets" component={PlanetsContainer}/>
                <Route exact path="/statistics" component={StatisticsContainer}/>
                <Route path="/planet/:planetId?" component={PlanetItemContainer}/>
            </Switch>
        </div>
    );
}

export default App;
