import { connect } from "react-redux";
import { fetchPin } from "../../actions/pinActions";
import { fetchUser, fetchUsers } from "../../actions/userActions";
import { openModal } from "../../actions/modalActions";
import PinShow from "./pinShow";

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        pin: state.entities.pins[ownProps.match.params.pinId],
        users: state.entities.users,
        session: state.session,
        // currentUser: state.entities.users[state.session.id]
        currentUser: ""
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        openPinEditModal: () => dispatch(openModal('editPin'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinShow)