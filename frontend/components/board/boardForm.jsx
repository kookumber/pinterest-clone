import React, {useState} from "react";

class BoardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            details: '',
            user_id: props.user.id,
            public: true
        }
        this.handleCreate = this.handleCreate.bind(this)
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleCreate(e) {
        e.preventDefault()
        const newBoard = {board: {
            name: this.state.name,
            details: '',
            user_id: this.state.user_id,
            public: this.state.public
        }}
        this.props.createBoard(newBoard)
            .then(this.props.closeBoardModal())
    }

    render() {
        return (
            <div className="create-board-modal">
                <div className="modal-header">
                    <h1>Create board</h1>
                </div>

                <div className="create-board-options">
                    <div>
                        <p>Name</p>
                    </div>
                    <div>
                        <input className="board-name-input" 
                            value={this.state.name}
                            placeholder={"Like \"Places to Go\" or \"Recipes to Make\""}
                            onChange={this.update('name')} />
                    </div>
                    <div className="board-public-option">
                        <div>
                            <input className="board-public-input" 
                                type="checkbox"
                                defaultChecked="true"
                                value={this.state.public}
                                onChange={() => this.setState({['public']: !this.state.public})}
                                />
                        </div>
                        <div>
                            <p>Keep this board secret</p>
                            <p>So only you and collaborators can see it.</p>
                        </div>
                    </div>
                </div>

                    <div className="create-board-button-wrap">
                        <div>
                            <button className="create-board-button"
                                onClick={this.handleCreate}>Create</button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default BoardForm