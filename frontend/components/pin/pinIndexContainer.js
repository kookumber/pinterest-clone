import { connect } from "react-redux";
import React from "react";
import PinIndexItem from "./pinIndexItem";
import { fetchPins } from "../../actions/pinActions";
import { fetchSavedPins } from "../../actions/savedPinActions";
import { fetchBoards } from "../../actions/boardActions";
import PinIndex from "./pinIndex";

const mapStateToProps = (state) => {
    return {
        pins: Object.values(state.entities.pins),
        currentUser: state.entities.users[state.session.id],
        boards: Object.values(state.entities.boards)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPins: () => dispatch(fetchPins()),
        fetchSavedPins: () => dispatch(fetchSavedPins()),
        fetchBoards: () => dispatch(fetchBoards())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex)