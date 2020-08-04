import React, {Component} from 'react';
import {connect} from "react-redux";
import PlanetItem from "./PlanetItem";
import {getPlanetDescription} from "../../../redux/planets-reducer";

class PlanetItemContainer extends Component {
    componentDidMount() {
        this.props.getPlanetDescription(this.props.match.params.planetId)
    }

    render() {

        return (
            <PlanetItem {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    planet: state.planetsPage.planet
})

export default connect(mapStateToProps, {getPlanetDescription})(PlanetItemContainer);