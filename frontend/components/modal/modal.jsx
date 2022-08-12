import React from "react";
import { closeModal } from "../../actions/modalActions";
import { connect } from "react-redux";
import LoginFormContainer from "../sessionForm/loginFormContainer";
import SignupFormContainer from "../sessionForm/signupFormContainer";
import BoardFormContainer from "../board/boardFormContainer";
import BoardEditContainer from "../board/boardEditContainer";
import PinEditModalContainer from "../pin/pinEditModalContainer";

const Modal = ({ modal, closeModal }) => {
    // This means if modal slice of state is null, we'll return null, essentially making
    // the modal non-existant
    if(!modal) {
        return null;
    }

    // If modal slice exists, we'll choose what component to put inside our .modal-child div
    let component;
    let divName;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />
            divName = "modal-child"
            break;
        case 'signup':
            component = <SignupFormContainer />
            divName = "modal-child"
            break;
        case 'createBoard':
            component = <BoardFormContainer />
            divName = "board-modal"
            break;
        case 'editBoard':
            component = <BoardEditContainer />
            divName = "board-edit-modal"
            break;
        case 'editPin':
            component = <PinEditModalContainer />
            divName = "pin-edit-modal"
            break;
        default:
            return null
    }
    
    return (
        // Use stopPropagation below to prevent furth propagation of current event in caputuring and bubbling phases
        // This is super important because if we don't stop propogation, any time we click inside the .modal-child
        // the modal would close due to the way events bubble up through all containing elements
        <div className="modal-background" onClick={closeModal}>
            <div className={divName} onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}


// We are exporting a connected version of the Modal component so taht we can have access to 
// our modal slice of state and the ability to dispatch the closeModal action
const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)