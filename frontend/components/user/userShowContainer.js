import UserShow from "./userShow"
import { connect } from "react-redux";
import { fetchUser } from "../../util/userApiUtil";


const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}
