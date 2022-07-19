import React from "react"

class SavedPinOptions extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBoards()
    }

    render() {

        const { currentUser, boards, savedPins, createSavedPin } = this.props
        
        if(boards === undefined || savedPins === undefined) return null;
        //Use the boards index and find boards where user_id matches current session id
        const currentUsersBoards = boards.filter(board => board.user_id === currentUser.id)



        return (
            <div className="user-board-list">
                
            </div>
        )
    }
}

export default SavedPinOptions