import React from "react";

class PinDeleteModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchPin(this.props.location.pathname.slice(6))
            .then(() => { this.props.fetchUser(this.props.pin.user_id) })
                .then(() => { this.props.fetchSavedPins() })
    }

    deletePin(savedPinsArr) {
        for (const savedPin of savedPinsArr) {
            this.props.deleteSavedPin(savedPin.id)
        }

        this.props.deletePin(this.props.pin.id)
            .then(this.props.history.push(`/users/${this.props.currentUser.id}`))

        this.props.closeModal()
    }

    render(){
        
        const { pin, currentUser, savedPins } = this.props;

        if (pin === undefined || savedPins === undefined || currentUser === undefined) return null;
        const savedPinsArr = Object.values(savedPins).filter(savedPin => savedPin.pin_id === pin.id)
        
        return (
            <div className="pin-delete-container">
                <div className="edit-modal-header">
                    <h1>Are you sure?</h1>
                </div>
                <div className="delete-text">
                    <p>Once you delete a Pin, you can't undo it!</p>
                </div>
                <div className="pin-delete-buttons-section">
                    <button className="grey-button cancel-delete" onClick={this.props.closeModal}>Cancel</button>
                    <button className="red-button delete-button" onClick={() => this.deletePin(savedPinsArr) }>Delete</button>
                </div>
            </div>
        )
    }
}

export default PinDeleteModal