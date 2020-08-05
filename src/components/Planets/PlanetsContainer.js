import React, {Component} from 'react';
import Planets from "./Planets";
import {connect} from "react-redux";
import {getPlanetsList} from "../../redux/planets-reducer";

class PlanetsContainer extends Component {
    componentDidMount() {

        this.props.getPlanetsList(this.props.match.params.planetsId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.planetsId !== this.props.match.params.planetsId) {
            this.props.getPlanetsList(this.props.match.params.planetsId)
        }
    }


    render() {
        return (
            <Planets {...this.props} currentPage = {this.props.match.params.planetsId}/>
        );
    }
}

const mapStateToProps = (state) => (
    {
        images: state.imagesStore.planets,
        planets: state.planetsPage.planets,
        prevPage: state.planetsPage.prevPage,
        nextPage: state.planetsPage.nextPage,
        isFetching: state.planetsPage.isFetching

    }
)


export default connect(mapStateToProps, {getPlanetsList})(PlanetsContainer);