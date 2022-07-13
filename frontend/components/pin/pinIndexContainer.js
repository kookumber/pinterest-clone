import { connect } from "react-redux";
import React from "react";
import PinIndexItem from "./pinIndexItem";
import { fetchPins } from "../../actions/pinActions";
import PinIndex from "./pinIndex";

const mapStateToProps = (state) => {
    return {
        pins: Object.values(state.entities.pins),
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPins: () => dispatch(fetchPins())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex)