import React from "react";
import { withRouter } from 'react-router'

class PinEditModal extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            id: this.props.pin.id,
            title: this.props.pin.title,
            description: this.props.pin.description
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchPin(this.props.pin.id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pinId != this.props.match.params.pinId) {
            this.props.fetchPin(this.props.match.params.pinId)
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.updatePin(this.state)
            .then(this.props.closeModal())
    }
    
    render() {
        const { pin, currentUser } = this.props;
        
        if (pin === undefined || currentUser === undefined) return null;
        
        return (
            <div className="pin-edit-container">
                <div className="edit-modal-header">
                    <h1>Edit this Pin</h1>
                </div>
                <div className="pin-edit-section">
                    <div className="pin-edit-fields">
                        <div className="pin-edit">
                            <h4>Board</h4>
                            <div>Board Selection</div>
                        </div>

                        <div className="pin-edit">
                            <h4>Title</h4>
                            <input type="text" placeholder={pin.title} onChange={this.update('title')}/>
                        </div>

                        <div className="pin-edit-linebreak"></div>

                        <div className="pin-edit">
                            <h4>Description</h4>
                            <textarea onChange={this.update('description')} />
                        </div>
                    </div>
                    <div className="pin-edit-img">
                        <div className="edit-img-wrap">
                            <img src={pin.imageUrl}/>
                        </div>
                    </div>
                </div>

                <div className="pin-edit-buttons-section">
                    <button onClick={this.props.closeModal}>Cancel</button>
                    <button onClick={this.handleSubmit}>Save</button>
                </div>
            </div>
        )
    }
}

export default PinEditModal