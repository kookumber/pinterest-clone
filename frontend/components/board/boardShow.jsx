import React from "react";

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchBoard(this.props.match.params.boardId)
        //     .then(() => {
        //         this.props.fetchUser(this.props.board.user_id)})
        
        // this.props.fetchSavedPins()
        // this.props.fetchPins()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.boardId != this.props.match.params.boardId) {
            // debugger
            this.props.fetchBoard(this.props.match.params.boardId)
        }
    }

    componentWillUnmount() {
        
    }


    render () {
        const {board, pins} = this.props
        if ( !board || !pins) return null;

        let boardsPins = Object.values(pins)

        return (
            <div className="board-show-container">

                <div className="board-show-details">
                    <h2>{board.name}</h2>
                    <div>{this.props.editBoardModal}</div>
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

                <div className="board-pins-count">
                    <div>
                        {boardsPins.length} Pins
                    </div>
                </div>

                <div className="board-show-pins-container">
                    <div className="board-show-pins-grid">
                        {boardsPins.map(pin => {
                            return (
                                <div key={pin.id}>
                                    <img src={pin.imageUrl}/>
                                </div>
                            )}
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardShow