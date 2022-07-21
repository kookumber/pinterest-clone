import React from "react";
import BoardIndexItem from "./boardIndexItem";

class BoardIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount(){
    //     // this.props.fetchPins()            
    //     // this.props.fetchSavedPins()
    //     // this.props.fetchUsersBoards(this.props.currentUser.id)        
    //     // this.props.fetchBoards()
    //     // this.props.fetchBoardSavedPins()
    // }

    render() {
        // console.log("hello from board index")
        const { pins, boards, currentUser, savedPins } = this.props

        if (!boards || Object.values(pins).length === 0 || pins === undefined) return null
        
        // const currentUserBoards = Object.values(boards).filter(board => board.user_id === currentUser.id)
        const currentUserBoards = Object.values(boards)
        
        //Loop through the boards we get from fetch request, map to it a board index item
        //Pass to it the props of a single board that we're looping through
        


        return (
            <div className="boards-index-wrapper">
                {/* {console.log("boards arr? ", Object.values(this.props.boards))} */}
                {/* Object.values(this.props.boards)  */}
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