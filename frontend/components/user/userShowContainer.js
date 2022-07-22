import React from "react";
import { connect } from "react-redux";

import UserShow from "./userShow"

import { fetchUser } from "../../actions/userActions";
import { openModal, closeModal } from "../../actions/modalActions";
import { fetchPins } from "../../actions/pinActions";
import { fetchBoards } from "../../actions/boardActions";
import { fetchSavedPins } from "../../actions/savedPinActions";


const mapStateToProps = (state, ownProps)=> {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        pins: state.entities.pins,
        boards: state.entities.boards,
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchPins: () => dispatch(fetchPins()),
        fetchBoards: () => dispatch(fetchBoards()),
        fetchSavedPins: () => dispatch(fetchSavedPins()),
        openBoardModal: (
            <button className="add-board-button"
                onClick={() => dispatch(openModal('createBoard'))}>
                <span className="material-symbols-outlined">
                    add
                </span>
            </button>
        ),
        closeBoardModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
