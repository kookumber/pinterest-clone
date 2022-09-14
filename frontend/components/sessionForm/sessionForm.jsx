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
        this.props.processForm(user)
            .then(user => { this.props.loginNewUser(user) })
                .then(this.props.closeModal)

    }

    handleSignupRedirect(e, action) {
        e.preventDefault()
        this.props.closeModal()
        action === "signup" ? this.props.openSignupModal() : this.props.openLoginModal()
    }

    handleDemoLogin(e) {
        e.preventDefault()
        const demoUser = {user: {
            username: 'demo-user1',
            email: 'demo@user1.com',
            password: 'demo-user1'
        }
        }
        this.props.processForm(demoUser)
            .then(this.props.closeModal)
                .then(this.props.history.push("/"))
    }

    handleDemoSignup(e) {
        e.preventDefault()
        const demoUser = {
            user: {
                username: 'demo-user1',
                email: 'demo@user1.com',
                password: 'demo-user1'
            }
        }

        this.props.loginNewUser(demoUser)
            .then(this.props.closeModal)
            .then(this.props.history.push("/"))
    }

    renderErrors() {
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
                        <img className="session-logo" src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/finterest-192x192.png"/>
                    </div>
                    <div className="modal-header">
                        <h1>Welcome to Finterest</h1>
                    </div>
                    <div>Find new ideas to try</div>
                    <br />
                    <div className="login-form">
                        <div className="session-input-label">
                            <label>Username</label>
                        </div>
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="login-input"
                            placeholder="Username" />

                        <div className="session-input-label">
                            <label>Email</label>
                        </div>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            placeholder="Email" />

                        <div className="session-input-label">
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

                <h3>Or</h3>

                <div id="demo-button-container">
                    <button className="demo-login-button" onClick={e => this.handleDemoSignup(e)}>Log in as Demo User</button>
                </div>

                <div className="disclosure-text">
                    <div>
                        <span>By continuing, you agree to Finterest's <span>Terms of Service</span> and acknowledge you've read our <span>Privacy Policy</span> </span>
                    </div>
                </div>

                <div id="line-break">
                    <div></div>
                </div>

                <div id="signup-redirect">
                    <div onClick={(e) => this.handleSignupRedirect(e, "login")}>Already a member? Log in</div>
                </div>
            </div>
        )
    }

    loginForm() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                    <div className="close-x" onClick={this.props.closeModal}>X</div>
                    
                    <div>
                        <img className="session-logo" src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/finterest-192x192.png"/>
                    </div>
                    <div className="modal-header">
                        <h1>Welcome to Finterest</h1>
                    </div>
                    <br />
                    <div className="login-form">
                        <div className="session-input-label">
                            <label>Email</label>
                        </div>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            placeholder="Email" />
                        <div className="session-input-label">
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

                        <h3>Or</h3>

                        <div>
                            <button className="demo-login-button" onClick={e => this.handleDemoLogin(e)}>Log in as Demo User</button>
                        </div>

                        <div className="disclosure-text">
                            <div>
                                <span>By continuing, you agree to Finterest's <span>Terms of Service</span> and acknowledge you've read our <span>Privacy Policy</span> </span>
                            </div>
                        </div>

                        <div id="line-break">
                            <div></div>
                        </div>

                        <div id="signup-redirect">
                            <div onClick={(e) => this.handleSignupRedirect(e, "signup")}>Not on Finterest yet? Sign up</div>
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