import React, { Component } from 'react';
import Residents from './Residents';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getPeopleList, setPeopleListYPosition } from '../../redux/people-reducer';

class ResidentsContainer extends Component {
  componentDidMount() {
    if (this.props.match.params.peopleId !== this.props.currentPage) {
      this.props.getPeopleList(this.props.match.params.peopleId);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.peopleId !== this.props.match.params.peopleId) {
      this.props.getPeopleList(this.props.match.params.peopleId);
    }
  }

  render() {
    return <Residents {...this.props} currentPage={this.props.match.params.peopleId} />;
  }
}

const mapStateToProps = (state) => ({
  images: state.imagesStore.planets,
  people: state.peoplePage.people,
  prevPage: state.peoplePage.prevPage,
  nextPage: state.peoplePage.nextPage,
  isFetching: state.peoplePage.isFetching,
  currentPage: state.peoplePage.currentPage,
  peopleListYPosition: state.peoplePage.peopleListYPosition,
});

export default compose(connect(mapStateToProps, { getPeopleList, setPeopleListYPosition }))(
  ResidentsContainer
);
