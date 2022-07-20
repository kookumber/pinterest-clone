import React from "react";

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        // debugger
        this.props.fetchBoard(this.props.match.params.boardId)
            .then(() => {
                console.log("the board id", this.props.board.user_id)
                this.props.fetchUser(this.props.board.user_id)})
        
        this.props.fetchSavedPins()
        this.props.fetchPins()
    }


    render () {
        // debugger
        const {board, pins, savedPins} = this.props
        if (!board ) return null;
        // console.log("board user id", board.user_id)

        // const savedPinsArr = Object.values(savedPins).filter(savedPin => savedPin.board_id === board.id)
        // const boardsPinsArr = Object.values(pins)

        return (
            <div className="board-show-container">

                <div className="board-show-details">
                    <h2>{board.name}</h2>
                </div>

                <div className="board-show-options">

                </div>

                <div className="board-show-filters">

                </div>

                <div className="board-show-pins-container">

                </div>
            </div>
        )
    }
}

export default BoardShow