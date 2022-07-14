import React from "react";

class PinIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <div className="pin-wrapper">
                <div className="pin-image">
                    <img src={this.props.pin.imageUrl}></img>
                </div>
                <div className="pin-title">
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