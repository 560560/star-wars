import React, {Component} from 'react';
import {connect} from "react-redux";
import Films from "./Films";
import {
    clearCharactersData,
    clearFilmsList,
    clearPlanetData,
    clearSpeciesData,
    clearStarshipsData,
    clearVehiclesData,
    getFilmsList,
    setChosenFilm
} from "../../redux/films-reducer";


class FilmsContainer extends Component {

    componentDidMount() {

        this.props.getFilmsList()
        this.props.setChosenFilm(this.props.match.params.filmId)
    }

    componentWillUnmount() {
        this.props.clearPlanetData()
        this.props.clearFilmsList()
        this.props.clearSpeciesData()
        this.props.clearVehiclesData()
        this.props.clearStarshipsData()
        this.props.clearCharactersData()
    }

    render() {
        return (
            <Films {...this.props} chosenFilm={Number(this.props.chosenFilm) - 1}/>
        );
    }
}

const mapStateToProps = (state) => ({
    films: state.filmsPage.films,
    images: state.imagesStore.films,
    isFetching: state.filmsPage.isFetching,
    chosenFilm: state.filmsPage.chosenFilm,
    planetsDescription: state.filmsPage.selectedFilmPlanetsDescription,
    charactersDescription: state.filmsPage.selectedFilmCharactersDescription,
    starshipsDescription: state.filmsPage.selectedFilmStarshipsDescription,
    vehiclesDescription: state.filmsPage.selectedFilmVehiclesDescription,
    speciesDescription: state.filmsPage.selectedFilmSpeciesDescription,

})
export default connect(mapStateToProps, {
    getFilmsList,
    setChosenFilm,
    clearPlanetData,
    clearFilmsList,
    clearSpeciesData,
    clearVehiclesData,
    clearStarshipsData,
    clearCharactersData
})(FilmsContainer);