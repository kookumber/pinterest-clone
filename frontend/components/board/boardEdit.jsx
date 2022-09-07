import React from "react";

class BoardEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.board.id,
            name: this.props.board.name,
            details: this.props.board.details,
            user_id: this.props.user.id,
            public: this.props.board.public
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.board.id)
            
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.updateBoard(this.state)
            .then(this.props.closeBoardModal())
            // .then(this.props.history.push(`/users/${this.props.board.id}`))
    }

    render() {
        // debugger
        const { board, userId } = this.props
        return (
            <div className="board-edit-container">
                <div className="edit-modal-header">
                    <h1>Edit your board</h1>
                </div>

                <div className="name-edit">
                    <h4>Name</h4>
                    <input className="board-name-input"
                        value={this.state.name}
                        placeholder={this.state.name}
                        onChange={this.update('name')}/>
                </div>

                <div className="details-edit">
                    <h4>Description</h4>
                    <input className="board-details-input"
                        value={this.state.details}
                        placeholder="What is your board about?"
                        onChange={this.update('details')} />
                </div>

                <div className="delete-board-wrap">
                    <span>Action</span>
                    <button onClick={() => this.props.deleteBoard(board.id).then(this.props.closeBoardModal()).then(this.props.history.push(`/users/${userId}`))} className="delete-board-button">
                        <h2>Delete board</h2>
                        <p>Delete this board and all its Pins forever.</p>
                        <p>You can't undo this!</p>
                    </button>
                </div>

                <div className="edit-board-button-wrap">
                    <div className="edit-button-container">
                        <button onClick={this.handleSubmit}
                            className="edit-board-button">
                            Done
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardEdit