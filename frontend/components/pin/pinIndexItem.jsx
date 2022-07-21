import React from "react";
import { Link } from "react-router-dom";

class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }   

    render() {
        const { pin } = this.props
        return (
            <div className="pin-wrapper">
                <div className="pin-image">
                    <Link to={`/pins/${pin.id}`}>
                        <img src={this.props.pin.imageUrl}></img>
                    </Link>
                </div>
                <div className="pin-title">
                    {this.props.pin.title}
                </div>
            </div>
        )
    }
}

export default PinIndexItem