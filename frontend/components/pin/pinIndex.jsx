import React from "react";
import PinIndexItem from "./pinIndexItem";

class PinIndex extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPins()
    }

    render() {
        return (
            <div className="home-feed">
                <div className="pins-grid-container">
                    {this.props.pins.map(pin => (
                        <PinIndexItem pin={pin} key={pin.id} />
                    ))}
                </div>
            </div>
        )
    }
    
}

export default PinIndex