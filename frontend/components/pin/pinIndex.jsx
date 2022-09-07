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

    // componentDidUpdate(newState) {
    //     newState.pins ? this.setState({ pins: newState.pins}) : null
    // }

    handleSearch() {
        if(this.props.search === "") {
            return this.props.pins
        } else {
            console.log("my pins", Object.values(this.props.pins)[this.props.pins.length-1].title)
            return (
                (Object.values(this.props.pins)).filter(pin => 
                    pin.title.match(new RegExp(this.props.filter, "i")) ||
                    pin.description.match(new RegExp(this.props.filter, "i"))
            ))
        }
    }

    render() {
        const { pins, currentUser, boards, filter } = this.props
        
        if (pins === undefined || currentUser === undefined || boards === undefined) return null
        // console.log("pin title 1", firstPin.title)
        // console.log("search this", this.handleSearch())

        const pinRecs = Object.values(pins).filter(pin => 
            (pin.title).match(new RegExp(this.props.search, "i")) || 
            (pin.description).match(new RegExp(this.props.search, "i"))
            // pin.title === 'Jellyfish Waves'
        ).slice(0,10)
            
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