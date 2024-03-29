import React from "react";
import BoardIndexContainer from "../board/boardIndexContainer";



class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchUser(this.props.user.id)
            .then(() => this.props.fetchSavedPins())
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId != this.props.match.params.userId) {
            this.props.fetchUser(this.props.user.id)
            this.props.fetchSavedPins()
        }
    }
    
    render() {
        const { user, pins, boards } = this.props

        if(!pins || !user) return null;

        return (
            <div className="main-profile-container">
                <div className="profile-wrapper">
                    <div className="user-details">
                        <div className="user-data" id="user-profile-pic">
                            <h1>{user.username[0].toUpperCase()}</h1>
                        </div>
                        <div className="user-data" id="user-page-username">
                            <h1>{user.username}</h1>
                        </div>
                        <div className="user-data" id="user-social">
                            Followers
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

                <div className="add-board-section">
                    {this.props.openBoardModal}
                </div>
                <section className="saved-content">
                    
                    <BoardIndexContainer />
                    {/* <BoardIndex /> */}
                </section>
            </div>
        )
    }
}

export default UserShow