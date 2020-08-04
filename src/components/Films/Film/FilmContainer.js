import React, {Component} from 'react';
import {connect} from "react-redux";
import Film from "./Film";


class FilmContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <Film/>
        );
    }
}

const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, {})(FilmContainer);