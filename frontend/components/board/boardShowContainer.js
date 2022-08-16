import { connect } from "react-redux";
import React from "react";
import BoardShow from "./boardShow";

import { fetchSavedPins } from "../../actions/savedPinActions";
import { fetchPins } from "../../actions/pinActions";
import { fetchBoard } from "../../actions/boardActions";
import { fetchUser, fetchUsers } from "../../actions/userActions";
import { openModal, closeModal } from "../../actions/modalActions";

const mapStateToProps = (state, ownProps) => {
    return {
        board: state.entities.boards[ownProps.match.params.boardId],
        pins: state.entities.pins,
        savedPins: state.entities.savedPins
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => dispatch(fetchUser()),
        fetchPins: () => dispatch(fetchPins()),
        fetchSavedPins: () => dispatch(fetchSavedPins()),
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
        editBoardModal: (
            
            <button onClick={() => dispatch(openModal('editBoard'))}>
                <div className="board-edit">
                    <span className="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </button>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow)