import React from "react";
import BoardIndexItem from "./boardIndexItem";

class BoardIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchPins()
        this.props.fetchBoards()
        this.props.fetchSavedPins()
    }

    render() {
        // console.log("hello from board index")
        const { pins, boards, currentUser, savedPins } = this.props
        const currentUserBoards = Object.values(boards).filter(board => board.user_id === currentUser.id)
        console.log(currentUserBoards)
        //Loop through the boards we get from fetch request, map to it a board index item
        //Pass to it the props of a single board that we're looping through
        return (
            <div className="boards-index-wrapper">
                {currentUserBoards.map(board => {
                    return (
                        <BoardIndexItem 
                            key={board.id}
                            pins={pins}
                            board={board}
                            savedPins={savedPins} />
                    )}
                    )} 
            </div>
        )
    }
}

export default BoardIndex