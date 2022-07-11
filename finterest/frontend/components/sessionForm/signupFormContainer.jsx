import { connect } from "react-redux";
import React from "react";
import { openModal, closeModal } from "../../actions/modalActions";
import { removeErrors, signup } from "../../actions/sessionActions";
import SessionForm from "./sessionForm";

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session.errors,
        formType: 'signup',
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        removeErrors: () => dispatch(removeErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)