import { connect } from "react-redux";
import BoardIndex from "./boardIndex";
import { fetchBoards } from "../../actions/boardActions";
import { fetchSavedPins } from "../../actions/savedPinActions";
import { fetchPins } from "../../actions/pinActions";

const mapStateToProps = (state) => {
    
    return {
        pins: state.entities.pins,
        boards: state.entities.boards,
        currentUser: state.entities.users[state.session.id],
        savedPins: state.entities.savedPins
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPins: () => dispatch(fetchPins()),
        fetchBoards: () => dispatch(fetchBoards()),
        fetchSavedPins: () => dispatch(fetchSavedPins())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex)