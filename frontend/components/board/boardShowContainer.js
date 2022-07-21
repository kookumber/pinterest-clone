import { connect } from "react-redux";
import BoardShow from "./boardShow";

import { fetchSavedPins } from "../../actions/savedPinActions";
import { fetchPins } from "../../actions/pinActions";
import { fetchBoard } from "../../actions/boardActions";
import { fetchUser, fetchUsers } from "../../actions/userActions";

const mapStateToProps = (state, ownProps) => {
    return {
        board: state.entities.boards[ownProps.match.params.boardId],
        pins: state.entities.pins,
        savedPins: state.entities.savedPins,
        // user: state.entities.users[state.entities.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => dispatch(fetchUser()),
        // fetchUsers: () => dispatch(fetchUsers()),
        fetchPins: () => dispatch(fetchPins()),
        fetchSavedPins: () => dispatch(fetchSavedPins()),
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow)