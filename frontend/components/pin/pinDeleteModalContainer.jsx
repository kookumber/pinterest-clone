import { connect } from "react-redux";
import { closeModal } from "../../actions/modalActions";
import { withRouter } from "react-router-dom";
import { deleteSavedPin, fetchSavedPins } from "../../actions/savedPinActions";
import { deletePin, fetchPin } from "../../actions/pinActions";
import { fetchUser } from "../../actions/userActions";
import PinDeleteModal from "./pinDeleteModal";

const mapStateToProps = (state, ownProps) => {
    
    return {
        pin: state.entities.pins[ownProps.location.pathname.slice(6)],
        savedPins: state.entities.savedPins,
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        fetchSavedPins: () => dispatch(fetchSavedPins()),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        deletePin: (pin) => dispatch(deletePin(pin)),
        deleteSavedPin: (savedPinId) => dispatch(deleteSavedPin(savedPinId)),
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinDeleteModal))