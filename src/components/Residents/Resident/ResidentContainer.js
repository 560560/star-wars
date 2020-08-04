import React, {Component} from 'react';
import {connect} from "react-redux";
import Resident from "./Resident";


class ResidentContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <Resident/>
        );
    }
}

const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, {})(ResidentContainer);