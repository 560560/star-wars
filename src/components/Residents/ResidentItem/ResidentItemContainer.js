import React, {Component} from 'react';
import {connect} from "react-redux";
import ResidentItem from "./ResidentItem";
import {compose} from "redux";
import {withLastLocation} from "react-router-last-location";
import {getPersonDescription, clearFilmData, setIsFetching} from "../../../redux/people-reducer";

class ResidentItemContainer extends Component {
    componentDidMount() {
        this.props.getPersonDescription(this.props.match.params.residentId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.person && this.props.person.films.length === this.props.filmsDescription.length
            ) {
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
    parentPage: state.peoplePage.currentPage
})

export default compose (
    withLastLocation,
    connect(mapStateToProps, {getPersonDescription, clearFilmData, setIsFetching}))
(ResidentItemContainer);