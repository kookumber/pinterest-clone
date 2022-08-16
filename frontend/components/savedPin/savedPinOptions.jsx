import React from "react"

class SavedPinOptions extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            showMenu: false
        }
        this.showMenu = this.showMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }

    componentDidMount() {
        this.props.fetchBoards()
    }

    showMenu(e) {
        e.preventDefault()
        this.state.showMenu ? this.setState({ showMenu: false }) : this.setState({ showMenu: true }) 
    }

    closeMenu(e) {
        e.preventDefault()
        this.setState({ showMenu: false })
    }

    render() {

        const { currentUser, boards, savedPins, pin, createSavedPin, deleteSavedPin } = this.props
        //Use the boards index and find boards where user_id matches current session id
        const currentUsersBoards = boards.filter(board => board.user_id === currentUser.id)
        const pinBoards = savedPins.filter(savedPin => savedPin.pin_id === pin.id)
        const boardIds = []

        currentUsersBoards.map(board => {
            boardIds.push(board.id)
        })
        
        const currentSavedBoard = savedPins.filter(saved => boardIds.includes(saved.board_id))
        // if(boards === undefined || savedPins === undefined) return null;

        const dropMenu = () => {

            const saveStatus = (board) => {
                for (const pinBoard of pinBoards) {
                    if (pinBoard.board_id === board.id) {
                        return (
                            <div key={board.id} className="board-save-item-container" onClick={() => deleteSavedPin(pinBoard.id)}>
                                <h3>{board.name}</h3>
                                <button className="black-button board-saved-button">Saved</button>
                            </div>
                        )
                    }
                }

                return (
                    <div key={board.id} 
                        className="board-save-item-container" 
                        onClick={() => createSavedPin({ pin_id: pin.id, board_id: board.id })}>
                            <h3>{board.name}</h3>
                            <button className="red-button board-save-button">Save</button>
                        </div>
                )
            }

            return (
                <div key={pin.id} className="board-dropmenu-container">
                    <h3>Save to Board</h3>
                    <div className="board-save-items-wrap">
                        <span>All boards</span>
                        {currentUsersBoards.length === 0 ? 
                        <div className="board-save-item">
                            <h3>You don't have any boards</h3>
                        </div> :
                        currentUsersBoards.map((board) => saveStatus(board))
                        }
                    </div>
                    <div className="board-create-option" onClick={ this.props.openBoardModal }>
                        <div className="add-symbol">
                            <span className="material-symbols-outlined">
                                add
                            </span>
                        </div>
                        <div>Create board</div>
                    </div>
                </div>
            )
        }

        return (
            <div className="user-board-list-wrap">
                <div className="save-options">
                    <div className="board-select-box" onClick={this.showMenu}>
                        <div className="save-board" onClick={this.showMenu}>Boards</div>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                </div>
                {currentSavedBoard.filter(saved => saved.pin_id === pin.id).length > 0 ?
                    <button className="black-button board-saved-button">Saved</button> : 
                    <button className="red-button"
                        onClick={ () => createSavedPin({ pin_id: pin.id, board_id: currentUsersBoards[0].id }) }>
                            Save
                    </button>  
                }
                {this.state.showMenu ? dropMenu() : null }
            </div>
        )
    }
}

export default SavedPinOptions