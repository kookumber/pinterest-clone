import React from "react";

class PinShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.downloadImage = this.downloadImage.bind(this)
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
            .then(() => {
                this.props.fetchUser(this.props.pin.user_id)
            })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.pinId != this.props.match.params.pinId) {
            this.props.fetchPin(this.props.match.params.pinId)
                .then(() => {
                    this.props.fetchUser(this.props.pin.user_id)
                })
        }
    }

    downloadImage(){
        console.log('check', this.props)
        const imageSrc = this.props.pin.imageUrl
        const link = document.createElement('a')
        link.href = imageSrc
        link.download = this.props.pin.title + '.jpg'
        const ele = document.getElementById('download-button')
        ele.appendChild(link)
        link.click()
        // ele.removeChild(link)
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
        const { pin, users, session } = this.props;
        

        //If statement here to make sure we have a pin/users we can key into because render will happen before componentDidMount
        if (pin === undefined || users === undefined) return null;

        const pinsUser = users[pin.user_id] //Get the user of the pin so we can display their data on show
        const followButton = <button className="follow-button">Follow</button>


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
                                <div className="edit-dropdown" onClick={this.editDropdownClick}>
                                    <i className="fa fa-ellipsis-h" />
                                    <div className="edit-dropdown-items" id="edit-dropdown-items">
                                        <div className="edit-item" onClick={this.props.openPinEditModal}>Edit Pin</div>
                                        <div className="edit-item" id="download-button" onClick={this.downloadImage}>Download Image</div>
                                        <div className="edit-item">Delete Pin</div>
                                    </div>
                                </div>
                                <div>
                                    <i className="fa fa-share"/>
                                </div>
                                <div>
                                    <i className="fa fa-link"/>
                                </div>
                        </div>
                            <div className="save-options">
                                <div>Board Selector</div>
                                <button>Save</button>
                            </div>
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
                                { pinsUser ? 
                                    (session ?  
                                        ( pinsUser.user_id === session.id ? null : followButton)
                                        : null) 
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PinShow