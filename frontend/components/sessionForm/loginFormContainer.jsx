import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/sessionActions";
import { openModal, closeModal } from "../../actions/modalActions";
import SessionForm from "./sessionForm";
import { removeErrors } from "../../actions/sessionActions";

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session.errors,
        formType: 'login',
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        removeErrors: () => dispatch(removeErrors()),
        openSignupModal: () => dispatch(openModal('signup'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)