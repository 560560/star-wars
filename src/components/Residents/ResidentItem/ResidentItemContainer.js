import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResidentItem from './ResidentItem';
import { compose } from 'redux';
import { withLastLocation } from 'react-router-last-location';
import {
  getPersonDescription,
  clearFilmData,
  setIsFetching,
  clearPersonDescription,
} from '../../../redux/people-reducer';
import { withRouter } from 'react-router-dom';

class ResidentItemContainer extends Component {
  componentDidMount() {
    const lastPath = this.props.lastLocation && this.props.lastLocation.pathname;
    this.props.getPersonDescription(this.props.match.params.residentId, lastPath);
  }

  componentWillUnmount() {
    this.props.clearFilmData();
    this.props.clearPersonDescription();
  }

  handleBack = () => {
    this.props.history.goBack();
  };

  render() {
    return <ResidentItem {...this.props} handleBack={this.handleBack} />;
  }
}

const mapStateToProps = (state) => ({
  images: state.imagesStore.planets,
  person: state.peoplePage.person,
  isFetching: state.peoplePage.isFetching,
  filmsDescription: state.peoplePage.selectedPersonFilmsDescription,
  parentPage: state.peoplePage.currentPage,
  personPage: state.peoplePage.personPage,
  homePlanet: state.peoplePage.homePlanet,
});

export default compose(
  withLastLocation,
  withRouter,
  connect(mapStateToProps, {
    getPersonDescription,
    clearFilmData,
    setIsFetching,
    clearPersonDescription,
  })
)(ResidentItemContainer);
