import React, {Component} from 'react';
import Planets from "./Planets";
import {connect} from "react-redux";
import {getPlanetsList} from "../../redux/planets-reducer";

class PlanetsContainer extends Component {
    componentDidMount() {

        this.props.getPlanetsList()
    }

    render() {
        return (
            <Planets {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => (
    {
        images: state.imagesStore.planets,
        planets: state.planetsPage.planets
    }
)


export default connect(mapStateToProps, {getPlanetsList})(PlanetsContainer);