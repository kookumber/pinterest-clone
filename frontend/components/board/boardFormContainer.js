import { connect } from "react-redux";

import BoardForm from "./boardForm";
import { createBoard } from "../../actions/boardActions";
import { closeModal } from "../../actions/modalActions";


const mapStateToProps = (state) => {
    return {
        user: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBoard: (board) => dispatch(createBoard(board)),
        closeBoardModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm)