import React from "react";
import { withRouter } from "react-router-dom"

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main-profile-container">
                <div className="profile-wrapper">
                    <div className="user-details">
                        <div id="user-profile-pic">
                            
                        </div>
                        <div id="user-page-username">

                        </div>
                    </div>
                </div>

                <div className="profile-content-selectors">

                </div>

                <div className="users-content-container">
                    <div className="content-options">

                    </div>
                    <div className="users-content">

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(UserShow)