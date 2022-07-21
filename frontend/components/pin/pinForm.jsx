import React from "react";
import { withRouter } from 'react-router'
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';


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
            .then((newPin) => {this.props.history.push(`/pins/${newPin.id}`)})
    }


    render() {

        const previewImg = this.state.imageUrl ? <div className="image-preview"><img src={this.state.imageUrl} /></div> : null;
        const pinsUser = this.props.user
        // const boardSelecter = (
        //     <div className="board-selector">
        //         <div className="search-bar-container">
        //             <svg className="search-icon"><SearchRoundedIcon /></svg>
        //             <input className="search-bar" type="text" placeholder="Search" />
        //         </div>
        //         <div className="user-boards">
        //             <div>All boards</div>
        //         </div>
        //         <div className="create-board-container">
        //             <div className="add-button">
                        
        //             </div>
        //             <div id="create-text">
        //                 Create board
        //             </div>
        //         </div>
        //     </div>
        // )

        const uploadBox = (  
            <div className="dotted-border">
                <div className="upload-image-container">
                    {/* <div className="upload-icon-wrap">
                        <UploadRoundedIcon className="upload-icon" />
                    </div> */}
                    {/* <div className="upload-text" id="drag-text">Drag and drop or click to upload</div>
                    <div className="upload-text" id="rec-text">Recommendation: Use high-quality .jpg files less than 20MB</div> */}
                    <input type="file"
                        className="image-upload-box"
                        onChange={this.handleFile} />
                    {previewImg}

                </div>
            </div>
            
        )

        return (
        <div className="new-pin-container">
            {/* Start Pin Header */}
            <form onSubmit={this.handleSubmit} className="new-pin-form">
                <div className="pin-form-header">
                    <div className="pin-form-options">
                        <svg className="user-icons">
                            <i className="fa fa-ellipsis-h" />
                        </svg>
                    </div>
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
                        {this.state.imageUrl ? previewImg : uploadBox}
                    </div>
                    <div className="pin-form-text-container">
                        <div className="text-area-container">
                            <input className="pin-title-input" 
                                value={this.state.title}
                                placeholder="Add your title"
                                onChange={this.update('title')} />
                        </div>
                        
                        <div className="pin-user">
                                <div className="pin-user-icon">
                                    {pinsUser ? pinsUser.username[0].toUpperCase() : null}
                                </div>
                                <div className="pin-user-info">
                                    <div>{pinsUser ? pinsUser.username : null}</div>
                                    <div># of followers</div>
                                </div>
                        </div>
                        <div className="text-area-container">
                            <input className="pin-desc-input"
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

export default withRouter(PinForm)