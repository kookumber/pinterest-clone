import { connect } from "react-redux";
import { closeModal } from "../../actions/modalActions";
import { fetchBoard, updateBoard, deleteBoard } from "../../actions/boardActions";
import BoardEdit from "./boardEdit";

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id],
        board: state.entities.boards[ownProps.match.params.boardId]
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

export default connect(mapStateToProps, mapDispatchToProps)(BoardEdit)