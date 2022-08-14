import { connect } from "react-redux";
import SavedPinOptions from "./savedPinOptions";
import {createSavedPin, deleteSavedPin } from "../../actions/savedPinActions";
import { fetchBoards } from "../../actions/boardActions";

const mapStateToProps = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        boards: Object.values(state.entities.boards),
        savedPins: Object.values(state.entities.savedPins),
        pins: state.entities.pins
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        createSavedPin: savedPin => dispatch(createSavedPin(savedPin)),
        deleteSavedPin: savedPinId => dispatch(deleteSavedPin(savedPinId)),
        fetchBoards: () => dispatch(fetchBoards())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedPinOptions) 