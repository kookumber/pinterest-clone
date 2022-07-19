import React from "react";

class BoardIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        //Props are passed through the call of the component in the BoardIndexItem component
        const { board, savedPins, pins, currentUser } = this.props
        console.log("hello from board index item")
        if ( board === undefined || pins === undefined || savedPins === undefined ) return null

        const boardsSavedPins = Object.values(savedPins).filter(pin => pin.board_id === board.id)
        const boardPinsLen = boardsSavedPins.length

        let imageUrl1 = (boardPinsLen < 1 ? null : pins[boardsSavedPins[0].pin_id].imageUrl)
        let imageUrl2 = (boardPinsLen < 2 ? null : pins[boardsSavedPins[1].pin_id].imageUrl)
        let imageUrl3 = (boardPinsLen < 3 ? null : pins[boardsSavedPins[2].pin_id].imageUrl)

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