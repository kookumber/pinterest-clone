import React from "react";
import { withRouter } from "react-router-dom"

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = {user: {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }}
        this.props.processForm(user).then(this.props.closeModal)
        this.setState({
            email: "",
            password: "",
            name: ""
        })
    }

    signupForm () {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                    <div className="close-x" onClick={this.props.closeModal}>X</div>
                    <div>
                        Icon
                    </div>
                    <div className="modal-header">
                        <h1>Welcome to Finterest</h1>
                    </div>
                    <div>Find new ideas to try</div>
                    <br />
                    <div className="login-form">
                        <div className="input-label">
                            <label>Username</label>
                        </div>
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="login-input"
                            placeholder="Username" />

                        <div className="input-label">
                            <label>Email</label>
                        </div>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            placeholder="Email" />

                        <div className="input-label">
                            <label>Password</label>
                        </div>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            placeholder="Password" />
                        <br/>
                        <input type="submit"
                            value={this.props.formType === 'signup' ? 'Continue' : 'Log in'}
                            className="session-submit-button" />
                    </div>
                </form>
            </div>
        )
    }

    loginForm() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                    <div className="close-x" onClick={this.props.closeModal}>X</div>
                    <div>
                        Icon
                    </div>
                    <div className="modal-header">
                        <h1>Welcome to Finterest</h1>
                    </div>
                    <br />
                    <div className="login-form">
                        <div className="input-label">
                            <label>Email</label>
                        </div>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            placeholder="Email" />
                        <div className="input-label">
                            <label>Password</label>
                        </div>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            placeholder="Password" />
                        <div>
                            <input type="submit"
                                value={this.props.formType === 'signup' ? 'Continue' : 'Log in'}
                                className="session-submit-button" />
                        </div>
                        
                    </div>
                </form>
            </div>
        )
    }

    render() {
        return this.props.formType === 'signup' ? this.signupForm() : this.loginForm()
    }
}

export default withRouter(SessionForm)