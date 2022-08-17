import { connect } from "react-redux";
import React from "react";
import PinIndexItem from "./pinIndexItem";
import { fetchPins } from "../../actions/pinActions";
import { fetchSavedPins } from "../../actions/savedPinActions";
import PinIndex from "./pinIndex";

const mapStateToProps = (state) => {
    return {
        pins: Object.values(state.entities.pins),
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPins: () => dispatch(fetchPins()),
        fetchSavedPins: () => dispatch(fetchSavedPins())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex)