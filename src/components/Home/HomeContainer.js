import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Home from "./Home";


class HomeContainer extends Component {
    render() {
        return (
            <Home {...this.props}/>
        );
    }
}


const mapStateToProps = (state) => ({
    images: state.imagesStore.sections
})

export default compose(
    connect(mapStateToProps, {}))
(HomeContainer);
;