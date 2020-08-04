import React, {Component} from 'react';
import {connect} from "react-redux";
import Films from "./Films";


class FilmsContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <Films/>
        );
    }
}

const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, {})(FilmsContainer);