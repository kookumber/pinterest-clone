import { connect } from "react-redux";
import { closeModal } from "../../actions/modalActions";
import { fetchBoard, updateBoard, deleteBoard } from "../../actions/boardActions";
import BoardEdit from "./boardEdit";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id],
        // board: state.entities.boards[ownProps.match.params.boardId],
        board: Object.values(state.entities.boards)[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateBoard: (board) => dispatch(updateBoard(board)),
        deleteBoard: (board) => dispatch(deleteBoard(board)),
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
        closeBoardModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardEdit))