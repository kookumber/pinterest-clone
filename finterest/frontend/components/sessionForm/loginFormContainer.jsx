import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/sessionActions";
import { openModal, closeModal } from "../../actions/modalActions";
import SessionForm from "./sessionForm";

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
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
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)