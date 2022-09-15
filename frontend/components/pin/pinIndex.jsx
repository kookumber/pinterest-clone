import React from "react";
import PinIndexItem from "./pinIndexItem";

class PinIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            filter: "",
            pins: []
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount() {
        this.props.fetchPins()
        this.props.fetchSavedPins()
        this.props.fetchBoards()
    }

    handleSearch() {
        if(this.props.filter === "") {
            return this.props.pins
        } else {
            return (
                (Object.values(this.props.pins)).filter(pin => 
                    pin.title.match(new RegExp(this.props.filter, "i")) ||
                    pin.description.match(new RegExp(this.props.filter, "i"))
            ))
        }
    }

    render() {
        const { pins, currentUser, boards } = this.props
        
        if (pins === undefined || currentUser === undefined || boards === undefined) return null
            
        const searchedResults = this.handleSearch()
        
        return (
            <div className="home-feed">
                <div className="pins-grid-container">
                    {(searchedResults).map(pin => (
                        <PinIndexItem pin={pin} key={pin.id} />
                    ))}
                </div>
            </div>
        )
    }
    
}

export default PinIndex