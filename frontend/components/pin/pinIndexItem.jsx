import React from "react";

class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <div className="pin-wrapper">
                <div className="pin-image">
                    {this.props.pin.title}
                </div>
                <div className="pin-details">
                    {this.props.pin.description}
                </div>
            </div>
        )
    }
}

export default PinIndexItem