import React from "react";
import { connect } from "react-redux";
import SearchIndex from "./searchIndex";

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId]
    }
}

export default connect(mapStateToProps)(SearchIndex)