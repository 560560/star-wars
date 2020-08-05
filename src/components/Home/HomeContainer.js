import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Home from "./Home";
import {getSections} from "../../redux/statistics-reducer";


class HomeContainer extends Component {
    componentDidMount() {
        this.props.getSections()
    }

    render() {
        return (
            <Home {...this.props}/>
        );
    }
}


const mapStateToProps = (state) => ({
    images: state.imagesStore.sections,
    sections: state.statisticsPage.sections
})

export default compose(
    connect(mapStateToProps, {getSections}))
(HomeContainer);
;