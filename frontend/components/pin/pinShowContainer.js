import { connect } from "react-redux";
import { fetchPin } from "../../actions/pinActions";
import { fetchUser } from "../../actions/userActions";
import PinShow from "./pinShow";

const mapStateToProps = (state, ownProps) => {
    return {
        pin: state.entities.pins[ownProps.match.params.pinId],
        users: state.entities.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}