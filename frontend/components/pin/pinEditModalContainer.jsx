import { connect } from "react-redux";
import PinEditModal from "./pinEditModal";
import { updatePin, deletePin, fetchPin } from "../../actions/pinActions";
import { closeModal } from "../../actions/modalActions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        pin: state.entities.pins[ownProps.location.pathname.slice(6)]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        updatePin: (pin) => dispatch(updatePin(pin)),
        deletePin: (pin) => dispatch(deletePin(pin)),
        fetchPin: (pinId) => dispatch(fetchPin(pinId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinEditModal))