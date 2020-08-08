import React, {Component} from 'react';
import {connect} from "react-redux";
import PlanetItem from "./PlanetItem";
import {clearFilmData, clearPlanetDescription, clearResidentData, getPlanetDescription, setIsFetching} from "../../../redux/planets-reducer";
import {compose} from "redux";
import {withLastLocation} from "react-router-last-location";

class PlanetItemContainer extends Component {
    componentDidMount() {
        let lastPath = this.props.lastLocation && this.props.lastLocation.pathname
        this.props.getPlanetDescription(this.props.match.params.planetId, lastPath)

    }


    componentWillUnmount() {
        this.props.clearPlanetDescription()
        this.props.clearFilmData()
        this.props.clearResidentData()
    }

    render() {

        return (
            <PlanetItem {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    images: state.imagesStore.planets,
    planet: state.planetsPage.planet,
    isFetching: state.planetsPage.isFetching,
    filmsDescription: state.planetsPage.selectedPlanetFilmsDescription,
    residentsDescription: state.planetsPage.selectedPlanetResidentsDescription,
    parentPage: state.planetsPage.currentPage,
    planetPage: state.planetsPage.planetPage,
})

export default compose(
    withLastLocation,
    connect(mapStateToProps, {getPlanetDescription, clearFilmData, clearResidentData, setIsFetching, clearPlanetDescription}))
(PlanetItemContainer);