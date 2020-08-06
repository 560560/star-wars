import React, {Component} from 'react';
import {connect} from "react-redux";
import PlanetItem from "./PlanetItem";
import {clearFilmData, clearResidentData, getPlanetDescription, setIsFetching} from "../../../redux/planets-reducer";
import {compose} from "redux";
import {withLastLocation} from "react-router-last-location";

class PlanetItemContainer extends Component {
    componentDidMount() {
        this.props.getPlanetDescription(this.props.match.params.planetId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.planet && this.props.planet.films.length === this.props.filmsDescription.length
            && this.props.planet.residents.length === this.props.residentsDescription.length) {
            this.props.setIsFetching(false)
        }
    }

    componentWillUnmount() {
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
    parentPage: state.planetsPage.currentPage
})

export default compose (
    withLastLocation,
    connect(mapStateToProps, {getPlanetDescription, clearFilmData, clearResidentData, setIsFetching}))
(PlanetItemContainer);