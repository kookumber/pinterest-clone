import React from "react";

class BoardEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.board.name,
            details: this.props.board.details,
            user_id: this.props.user.id,
            public: this.props.board.public
        }
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.board.id)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        // debugger
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
            </div>
        )
    }
}

export default BoardEdit