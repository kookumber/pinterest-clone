import { connect } from "react-redux";
import { fetchPin, deletePin, fetchPins } from "../../actions/pinActions";
import { fetchSavedPins, deleteSavedPin } from "../../actions/savedPinActions";
import { fetchUser, fetchUsers } from "../../actions/userActions";
import { openModal } from "../../actions/modalActions";
import { fetchBoards } from "../../actions/boardActions";
import { fetchFollows, createFollow, deleteFollow } from "../../actions/followActions";
import PinShow from "./pinShow";

const mapStateToProps = (state, ownProps) => {
    
    return {
        pin: state.entities.pins[ownProps.match.params.pinId],
        users: state.entities.users,
        session: state.session,
        currentUser: state.entities.users[state.session.id],
        savedPins: state.entities.savedPins,
        follows: state.entities.follows,
        pins: state.entities.pins
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        openPinEditModal: () => dispatch(openModal('editPin')),
        openPinDeleteModal: () => dispatch(openModal('deletePin')),
        fetchBoards: () => dispatch(fetchBoards()),
        deletePin: (pin) => dispatch(deletePin(pin)),
        fetchSavedPins: () => dispatch(fetchSavedPins()),
        deleteSavedPin: (savedPinId) => dispatch(deleteSavedPin(savedPinId)),
        fetchFollows: () => dispatch(fetchFollows()),
        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: (followId) => dispatch(deleteFollow(followId)),
        fetchPins: () => dispatch(fetchPins())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinShow)