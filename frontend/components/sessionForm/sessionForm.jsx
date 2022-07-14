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
        this.renderErrors = this.renderErrors.bind(this);
        // this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    componentWillUnmount() {
        this.props.removeErrors()
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
        // this.setState({
        //     email: "",
        //     password: "",
        //     name: ""
        // })
    }

    handleDemoLogin(e) {
        e.preventDefault()
        const demoUser = {user: {
            username: 'demo-user1',
            email: 'demo@user1.com',
            password: 'demo-user1'
        }
        }
        this.props.processForm(demoUser).then(this.props.closeModal)
    }

    renderErrors() {
        let error = {
            invalidEmail: "",
            invalidPassword: ""
        }

        return(
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`} className='error-items'>
                        {error}
                    </li>
                ))}
            </ul>
        )
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
                            
                        {this.renderErrors()}
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

                        {this.renderErrors()}

                        <div className="session-button">
                            <input type="submit"
                                value={this.props.formType === 'signup' ? 'Continue' : 'Log in'}
                                className="session-submit-button" />
                        </div>

                        <div>
                            <button className="demo-login-button" onClick={e => this.handleDemoLogin(e)}>Log in as Demo User</button>
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