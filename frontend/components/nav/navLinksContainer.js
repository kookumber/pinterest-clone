import { connect } from "react-redux";
import { logout } from "../../actions/sessionActions";
import { openModal } from "../../actions/modalActions";
import NavLinks from "./navLinks";

const mapStateToProps = ({ session, entities: { pins, users } }, ownProps) => {
    return {
        currentUser: users[session.id],
        pins: Object.values(pins)
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks)