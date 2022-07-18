import { connect } from "react-redux";

import BoardForm from "./boardForm";
import { createBoard } from "../../actions/boardActions";

const mapStateToProps = (state) => {
    return {
        user: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBoard: (board) => dispatch(createBoard(board))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm)