import React from "react";
import SavedPinOptionsContainer from "../savedPin/savedPinOptionsContainer";

class PinShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
            .then(() => { this.props.fetchUser(this.props.pin.user_id) })
                .then(() => { this.props.fetchSavedPins() })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.pinId != this.props.match.params.pinId) {
            this.props.fetchPin(this.props.match.params.pinId)
                .then(() => {
                    this.props.fetchUser(this.props.pin.user_id)
                })
                .then(() => {
                    this.props.fetchSavedPins()
                })
        }
    }

    editDropdownClick() {
        const ele = document.getElementById("edit-dropdown-items").style
        ele.display === "flex" ? ele.display = "none" : ele.display = "flex"
        ele.zIndex = 1
        ele.marginTop = "160px"
        ele.flexDirection = "column"
        ele.justifyContent = "space_evenly"
        ele.backgroundColor = "white"
        ele.height = "140px"
        // ele.maxHeight = "145px"
        ele.overflow = "auto"

    }


    render(){
        const { pin, users, session, currentUser, savedPins } = this.props;

        //If statement here to make sure we have a pin/users we can key into because render will happen before componentDidMount
        if (pin === undefined || users === undefined) return null;

        const pinsUser = users[pin.user_id] //Get the user of the pin so we can display their data on show
        const followButton = () => (
            <button className="follow-button">Follow</button>
        )

        const savedPinsArr = Object.values(savedPins).filter(savedPin => savedPin.pin_id === pin.id)

        const editButton = () => (
            <div className="edit-dropdown" onClick={this.editDropdownClick}>
                <i className="fa fa-ellipsis-h" />
                <div className="edit-dropdown-items" id="edit-dropdown-items">
                    <div className="edit-item" onClick={this.props.openPinEditModal}>Edit Pin</div>
                    <div className="edit-item" onClick={this.props.openPinDeleteModal}>Delete Pin</div>
                </div>
            </div>
        )

        return (
            <div className="pin-show-main-wrap">
                <div className='pin-show-box'>
                    <div className="pin-image-wrapper">
                        <div className="pin-show-image">
                            <img src={pin.imageUrl}/> 
                        </div>
                    </div>
                    <div className="pin-show-data">
                        <div className="pin-show-options">
                            <div className="closeup-action-items">
                                { pin.user_id === currentUser.id ? editButton() : null }
                            </div>

                                <SavedPinOptionsContainer pin={pin}/>
                        </div>
                        <div className="pin-show-title">
                            <h1>{pin.title}</h1>
                        </div>
                        <div className="pin-show-description">
                            <p>{pin.description}</p>
                        </div>
                        <div className="pin-show-user-container">
                            <div className="pin-user">
                                <div className="pin-user-icon">
                                    { pinsUser ? pinsUser.username[0].toUpperCase() : null }
                                </div>
                                <div className="pin-user-info">
                                    <div>{pinsUser ? pinsUser.username : null}</div>
                                    <div># of followers</div>
                                </div>
                            </div>
                            <div>
                                {/* <button className="follow-button">Follow</button> */}
                                { pin.user_id === currentUser.id ? null : followButton() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PinShow