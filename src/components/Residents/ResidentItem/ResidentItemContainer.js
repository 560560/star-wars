import React, {Component} from 'react';
import {connect} from "react-redux";
import ResidentItem from "./ResidentItem";
import {compose} from "redux";
import {withLastLocation} from "react-router-last-location";
import {getPersonDescription, clearFilmData, setIsFetching} from "../../../redux/people-reducer";

class ResidentItemContainer extends Component {
    componentDidMount() {
        let lastPath = this.props.lastLocation && this.props.lastLocation.pathname
        this.props.getPersonDescription(this.props.match.params.residentId, lastPath)

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.person) {
            this.props.setIsFetching(false)
        }
    }

    componentWillUnmount() {
        this.props.clearFilmData()
    }

    render() {

        return (
            <ResidentItem {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    images: state.imagesStore.planets,
    person: state.peoplePage.person,
    isFetching: state.peoplePage.isFetching,
    filmsDescription: state.peoplePage.selectedPersonFilmsDescription,
    parentPage: state.peoplePage.currentPage,
    personPage: state.peoplePage.personPage,
    homePlanet: state.peoplePage.homePlanet
})

export default compose(
    withLastLocation,
    connect(mapStateToProps, {getPersonDescription, clearFilmData, setIsFetching}))
(ResidentItemContainer);