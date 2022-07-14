import { connect } from "react-redux";
import { fetchPin } from "../../actions/pinActions";
import PinShow from "./pinShow";

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        showPin: (pinId) => dispatch(fetchPin(pinId))
    }
}