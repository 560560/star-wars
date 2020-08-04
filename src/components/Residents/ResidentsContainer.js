import React, {Component} from 'react';
import {connect} from "react-redux";
import Residents from "./Residents";


class ResidentsContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <Residents/>
        );
    }
}

const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, {})(ResidentsContainer);