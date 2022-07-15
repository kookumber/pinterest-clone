import UserShow from "./userShow"
import { connect } from "react-redux";
import { fetchUser } from "../../util/userApiUtil";


const mapStateToProps = (state, ownProps)=> {
    return {
        user: state.entities.users[ownProps.match.params.userId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
