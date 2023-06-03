import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlanetItem from './PlanetItem';
import {
  clearFilmData,
  clearPlanetDescription,
  clearResidentData,
  getPlanetDescription,
  setIsFetching,
} from '../../../redux/planets-reducer';
import { compose } from 'redux';
import { withLastLocation } from 'react-router-last-location';
import { withRouter } from 'react-router-dom';

class PlanetItemContainer extends Component {
  componentDidMount() {
    const lastPath = this.props.lastLocation && this.props.lastLocation.pathname;
    this.props.getPlanetDescription(this.props.match.params.planetId, lastPath);
  }
  componentWillUnmount() {
    this.props.clearPlanetDescription();
    this.props.clearFilmData();
    this.props.clearResidentData();
  }

  handleBack = () => {
    this.props.history.goBack();
  };
  render() {
    return <PlanetItem {...this.props} handleBack={this.handleBack} />;
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
});

export default compose(
  withLastLocation,
  withRouter,
  connect(mapStateToProps, {
    getPlanetDescription,
    clearFilmData,
    clearResidentData,
    setIsFetching,
    clearPlanetDescription,
  })
)(PlanetItemContainer);
