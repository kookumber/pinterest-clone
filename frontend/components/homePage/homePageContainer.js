import { connect } from "react-redux";
import HomePage from "./homePage";
import { fetchPins } from "../../actions/pinActions";

const mapStateToProps = state => {
    return {
        pins: Object.values(state.entities.pins),
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPins: () => dispatch(fetchPins())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)