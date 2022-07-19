import React from "react";

class PinShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
            .then(() => {
                this.props.fetchUser(this.props.pin.user_id)})
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
                                <div>
                                    <i className="fa fa-ellipsis-h" />
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