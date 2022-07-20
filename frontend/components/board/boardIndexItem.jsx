import React from "react";

class BoardIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        //Props are passed through the call of the component in the BoardIndexItem component
        const { board, pins, currentUser } = this.props
        if ( !pins || !board ) return null
        const boardsPins = Object.values(board.pins)
        const boardPinsLen = boardsPins.length
        console.log("board pin arr?", boardsPins)
        // console.log("pins", pins)
        // console.log("sp", pins[boardsSavedPins[0].pin_id])
        // debugger
        let imageUrl1 = (boardPinsLen < 1 ? null : Object.values(boardsPins[0])[0].imageUrl)
        let imageUrl2 = (boardPinsLen < 2 ? null : Object.values(boardsPins[1])[0].imageUrl)
        let imageUrl3 = (boardPinsLen < 3 ? null : Object.values(boardsPins[2])[0].imageUrl)

        return (
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
        )
    }
}

export default BoardIndexItem