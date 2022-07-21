import React from "react";

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchBoard(this.props.match.params.boardId)
            .then(() => {
                this.props.fetchUser(this.props.board.user_id)})
        
        this.props.fetchSavedPins()
        this.props.fetchPins()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.boardId != this.props.match.params.boardId) {
            this.props.fetchBoard(this.props.match.params.boardId)
                .then(() => {
                    this.props.fetchUser(this.props.board.user_id)
                })
        }
    }


    render () {
        const {board, pins, savedPins} = this.props
        if ( !board || !pins || !savedPins) return null;

        const savedPinsArr = Object.values(savedPins).filter(savedPin => savedPin.board_id === board.id)
        
        let boardsPins = []

        for(let i = 0; i < savedPinsArr.length; i++){
            boardsPins.push(pins[savedPinsArr[i].pin_id])
        }

        console.log("bs bp", boardsPins)
        return (
            <div className="board-show-container">

                <div className="board-show-details">
                    <h2>{board.name}</h2>
                    <div className="board-edit">
                        <span className="material-symbols-outlined">
                        more_horiz
                        </span>
                    </div>
                </div>
                <div>{board.details}</div>

                <div className="board-show-filters">
                    <div className="options-box" id="more-ideas">
                        <div>
                            <span className="material-symbols-outlined">
                            temp_preferences_custom
                            </span>
                        </div>
                        <span>More ideas</span>
                    </div>
                    <div className="options-box" id="organize">
                        <div>
                            <span className="material-symbols-outlined">
                                category
                            </span>
                        </div>
                        <span>Organize</span>
                    </div>
                    <div className="options-box" id="to-dos">
                        <div>
                            <span className="material-symbols-outlined">
                                check_circle
                            </span>
                        </div>
                        <span>To-dos</span>
                    </div>
                </div>

                <div className="board-show-pins-container">
                    {/* {boardsPins.map(pin => {
                        return (
                            <div>
                                <img src={pin.imageUrl}/>
                            </div>
                        )}
                    )} */}
                </div>
            </div>
        )
    }
}

export default BoardShow