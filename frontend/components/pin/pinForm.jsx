import React from "react";
import { withRouter } from 'react-router'

class PinForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            imageFile: null,
            imageUrl: null,
            user_id: props.user.id
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleFile(e) {
        // events has built in currentTarget and files methods
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            this.setState({imageFile: file, imageUrl: fileReader.result})
        }

        if (file) {
            fileReader.readAsDataURL(file) //the readAsDataURL initiates the beginning of reading of the file
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('pin[title]', this.state.title)
        formData.append('pin[description]', this.state.description)
        formData.append('pin[user_id]', this.state.user_id)
        
        if (this.state.imageFile) {
            formData.append('pin[image]', this.state.imageFile)
        }

        this.props.createPin(formData)
    }

    render() {
        return (
        <div className="new-pin-container">
            {/* Start Pin Header */}
            <form onSubmit={this.handleSubmit} className="new-pin-form">
                <div className="pin-form-header">
                    <div className="pin-form-options">Dropdown</div>
                    <div className="pin-form-submission">
                        <div className="pin-board-selector">Board Name</div>
                        <div className="pin-save-button">
                            <button>Save</button>
                        </div>
                    </div>
                </div>
                {/* End Pin Header */}
            
            {/* Start Pin Form Main Body */}
                <div className="pin-form-main-body">
                    <div className="pin-form-image-container">
                        <div className="pin-form-image-container" onDrop={console.log("hello")}>
                            <input type="file" 
                                className="image-upload-box"
                                onChange={this.handleFile}/>
                        </div>
                    </div>
                    <div className="pin-form-text-container">
                        <div className="text-area-container">
                            <input className="pin-input" 
                                value={this.state.title}
                                placeholder="Add your title"
                                onChange={this.update('title')} />
                        </div>
                        <div className="current-user-container">
                            User Details
                        </div>
                        <div className="text-area-container">
                            <input className="pin-input"
                                value={this.state.description}
                                placeholder="Tell everyone what your Pin is about"
                                onChange={this.update('description')} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

export default PinForm