import React from "react";

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchBoard(this.props.match.params.boardId)
            .then(() => {
                this.props.fetchUser(this.props.board.user_id)
            })
        
        this.props.fetchPins()
        this.props.fetchSavedPins()
    }


    render () {

        const {board, pins, savedPins} = this.props

        const savedPinsArr = Object.values(savedPins).filter(savedPin => savedPin.board_id === board.id)
        const boardsPinsArr = Object.values(pins)

        return (
            <div className="board-show-container">

                <div className="board-show-details">

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