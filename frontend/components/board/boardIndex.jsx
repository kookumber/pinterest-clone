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
        const { pins, boards, savedPins } = this.props

        if (!boards || Object.values(pins).length === 0 || pins === undefined) return null
        
        // const currentUserBoards = Object.values(boards).filter(board => board.user_id === currentUser.id)
        const currentUserBoards = Object.values(boards)

        return (
            <div className="boards-index-wrapper">
                
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