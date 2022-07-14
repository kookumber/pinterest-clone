import { connect } from "react-redux";

import { createPin } from "../../actions/pinActions";
import PinForm from "./pinForm";

const mapStateToProps = (state) => {
    return { 
        user: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPin: (pin) => dispatch(createPin(pin))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinForm)