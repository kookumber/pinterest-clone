import React from "react";
import { Link } from "react-router-dom";
import SavedPinOptionsContainer from "../savedPin/savedPinOptionsContainer";

class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }   

    render() {
        const { pin } = this.props
        return (
            <div className="pin-wrapper">
                {/* <div className="pin-image"> */}
                    <div className="pin-hover-to-save">
                        <SavedPinOptionsContainer pin={this.props.pin} />
                    </div>
                    <Link to={`/pins/${pin.id}`}>
                        <img className="pin-item-img" src={this.props.pin.imageUrl}></img>
                    </Link>
                {/* </div> */}
                <div className="pin-title">
                    {this.props.pin.title}
                </div>
            </div>
        )
    }
}

export default PinIndexItem