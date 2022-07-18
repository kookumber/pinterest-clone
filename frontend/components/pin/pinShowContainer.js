import { connect } from "react-redux";
import { fetchPin } from "../../actions/pinActions";
import { fetchUser, fetchUsers } from "../../actions/userActions";
import PinShow from "./pinShow";

const mapStateToProps = (state, ownProps) => {
    return {
        pin: state.entities.pins[ownProps.match.params.pinId],
        users: state.entities.users,
        session: state.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinShow)