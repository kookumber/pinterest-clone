import React from "react";
import { Link } from "react-router-dom";

class BoardIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        //Props are passed through the call of the component in the BoardIndexItem component
        const { board, pins, savedPins } = this.props
        if ( !pins || !board || !savedPins) return null
        
        
        const boardsSavedPins = Object.values(savedPins).filter(sp => sp.board_id === board.id)
        const boardsPins = []

        for (let i = 0; i < boardsSavedPins.length; i++){
            boardsPins.push(pins[boardsSavedPins[i].pin_id])
        }

        const boardPinsLen = boardsPins.length
        
        let imageUrl1 = (boardPinsLen < 1 ? null : boardsPins[0].imageUrl)
        let imageUrl2 = (boardPinsLen < 2 ? null : boardsPins[1].imageUrl)
        let imageUrl3 = (boardPinsLen < 3 ? null : boardsPins[2].imageUrl)

        return (
            <Link to={`/boards/${board.id}`} >
                <div className="board-wrapper">
                    <div className="board-image-box">
                        <div className="board-image-big">
                            <img src={imageUrl1} />
                        </div>
                        <div className="board-image-smalls">
                            <div id="board-image-2">
                                <img src={imageUrl2} />
                            </div>
                            <div id="board-image-3">
                                <img src={imageUrl3} />
                            </div>
                        </div>
                    </div>
                    <div className="board-info-box">
                        <div className="board-name">
                            <h3>{board.name}</h3>
                        </div>
                        <div className="board-pin-count">
                            <h4>{boardPinsLen} pins</h4>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default BoardIndexItem