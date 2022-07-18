import UserShow from "./userShow"
import { connect } from "react-redux";
import { fetchUser } from "../../util/userApiUtil";
import { openModal, closeModal } from "../../actions/modalActions";
import React from "react";


const mapStateToProps = (state, ownProps)=> {
    return {
        user: state.entities.users[ownProps.match.params.userId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        openBoardModal: (
            <button onClick={() => dispatch(openModal('createBoard'))}>
                Create Board
            </button>
        ),
        closeBoardModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
