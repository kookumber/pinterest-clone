import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import { ProtectedRoute } from "../../util/routeUtil";
import HomePageContainer from "../homePage/homePageContainer";
import PinShowContainer from "../pin/pinShowContainer";
import PinFormContainer from "../pin/pinFormContainer";
import BoardShowContainer from "../board/boardShowContainer";
import UserShowContainer from "../user/userShowContainer";

class NavLinks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: "",
            filter: "",
            searchResults: this.props.pins,
            displaySearch: false,
            inputValue: "",
            finalSearchText: ""
        }
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.closeSearch = this.closeSearch.bind(this)
        this.handleResultClick = this.handleResultClick.bind(this)
    }

    componentDidMount(){
        this.setState({
            searchText: "",
            filter: "",
            finalSearchText: "",
            inputValue: ""
        })
    }

    // Updates search text state as user types to update recommendations based on title match
    handleUpdate(e) {
        let searchWord = e.currentTarget.value
        this.setState({ searchText: searchWord, inputValue: searchWord})
        const recommendations = (this.props.pins).filter((pin) => 
            pin.title.match(new RegExp(searchWord, "i")) 
        )
        this.setState({ searchResults: recommendations})
    }

    // Opens the search modal when user clicks on the search input
    handleSearch(e) {
        return e => { 
            this.setState({ displaySearch: true })
        }
    }

    // Update search filter when user keys ENTER; If search is done outside of Homepage
    // User will be redirected to Homepage and their search items will be displayed
    handleKeyDown(e) {
        return e => {
            if(e.keyCode === 13){ 
                this.setState({ filter: this.state.searchText, 
                                    displaySearch: false, 
                                    inputValue: "" })
                if (window.location.hash !== "#/") {
                    return (window.location.assign("#/"))
                }
            } else { 
                return null
            }
        }
    }

    handleResultClick(result){
        this.setState({ filter: result, finalSearchText: this.state.searchText })
        if (window.location.hash !== "#/") {
            return (
                window.location.assign("#/")
            )
        }
    }

    closeSearch(e) {
        e.stopPropagation();
        if(e.target.className !== "search-icon" && 
            e.target.className !== "search-bar") {
            this.setState({ displaySearch: false, 
                            searchResults: this.props.pins,
                            inputValue: "" 
            })
        }
    }


    render() {
        
        const { currentUser, logout, openModal, pins } = this.props
        if (pins === undefined || this.state.searchResults === undefined) return null

        const searchResults = 
            this.state.searchResults.length > 0 ?
                (this.state.searchResults.slice(0,15)).map((pin, idx) => {
                return (
                    <li key={idx} onClick={e => this.handleResultClick(pin.title.slice(pin.title.indexOf("-")+2))}>
                        <svg className="search-icon"><SearchRoundedIcon /></svg>
                        {pin.title}
                    </li>
                )}) :
                <></>
        
        const sessionLinks = () => (
            <>
                <div className="header">
                    <nav className="logged-out-nav">
                        <div className='app-logo-container'>
                            <a className="app-logo-title" href="/">
                                <img className="nav-logo" src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/favicon-red-32x32.png" />
                                <div>Finterest</div>
                            </a>
                        </div>

                        <div className="header-links">
                            <div className="personal-links">
                                <a href="https://www.linkedin.com/in/quang-tran-2926a78b/" target="_blank">Linkedin</a>
                                <a href="https://github.com/kookumber" target="_blank">Github</a>
                                <a href="#">Portfolio</a>
                            </div>
                            {/* Need Routes in order for Link to work */}
                            <div className="login-signup-buttons-container">
                                <button onClick={() => openModal('login')} className="login-button">Log in</button>
                                <button onClick={() => openModal('signup')} className="signup-button">Sign up</button>
                            </div>
                        </div>
                    </nav>
                </div>

                <Route exact path="/" component={HomePageContainer} />

                <Switch>
                    <ProtectedRoute path="/pins/create" component={PinFormContainer} />
                    <ProtectedRoute exact path="/pins/:pinId" component={PinShowContainer} />
                    <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
                    <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer} />
                </Switch>
            </>
        );

        const loaded = () => {
            let urlLocation = window.location.hash
            let homeLinkStatus = urlLocation === "#/" ? "inspiration-link-active" : "inspiration-link"
            let createLinkStatus = urlLocation === "#/pins/create" ? "inspiration-link-active" : "inspiration-link"
            return (
            <>
                <header className="header">
                    <nav className="logged-in-nav" onClick={this.closeSearch}>
                        <div className="inspiration-links-container">
                            <div className='app-logo'>
                                    <Link to="/" onClick={() => urlLocation === "#/" ? window.location.reload() : null}>
                                        <img className="nav-logo" src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/favicon-red-32x32.png" />
                                    </Link>
                            </div>
                            <div className={homeLinkStatus}>
                                    <Link to="/" onClick={() => urlLocation === "#/" ? window.location.reload() : null}><div>Home</div></Link>
                            </div>
                            <div className={createLinkStatus}>
                                <Link to="/pins/create">Create</Link>
                            </div>
                        </div>

                        <div className="search-bar-container">
                            <div className="main-search">
                                <svg className="search-icon"><SearchRoundedIcon /></svg>
                                <input className="search-bar"
                                    type="text"
                                    placeholder="Search Pins"
                                    onFocus={this.handleSearch()}
                                    value={this.state.inputValue}
                                    onChange={e => this.handleUpdate(e)}
                                    onKeyDown={this.handleKeyDown()} />
                            </div>

                            {
                                this.state.displaySearch ? 
                                    <div id="search-child" className="search-component" onClick={e => e.stopPropagation()}>
                                        { searchResults.length > 0 ? 
                                                <ul onClick={this.closeSearch}>
                                                    <h3>Find results similar to...</h3>
                                                    {searchResults}
                                                </ul> :
                                                <ul>
                                                    <li>No result found</li>
                                                </ul>

                                        } 
                                    </div> : <></>
                            }
                            {
                                this.state.displaySearch ?
                                    <div id="search-parent" className="modal-background" onClick={this.closeSearch}></div> : <></>
                            }
                        </div>

                        <div className="user-links">
                            <div className="user-link">
                                <a href="https://github.com/kookumber" target="_blank">
                                    <i className="fa fa-github"></i>
                                </a>
                                {/* <div className="link-hover-details">My Github</div> */}
                            </div>
                            <div className="user-link">
                                <a href="https://www.linkedin.com/in/quang-tran-2926a78b/" target="_blank">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                                {/* <div className="link-hover-details">My LinkedIn</div> */}
                            </div>
                            <div className="profile-link">
                                <svg className="user-icons">
                                    <Link to={`/users/${currentUser.id}`}><PersonRoundedIcon /></Link>
                                </svg>
                            </div>
                                {/* <div className="link-hover-details">Profile</div> */}

                            <Link to="/">
                                <button className="user-link" onClick={logout}>
                                    <svg className="user-icons">
                                        <LogoutRoundedIcon />
                                    </svg>
                                </button>
                                <div className="link-hover-details">Logout</div>
                            </Link>
                        </div>

                    </nav>
                </header>

                
                <Route exact path="/" render={(props) => <HomePageContainer {...props} search={this.state.finalSearchText} filter={this.state.filter}/>} />

                <Switch>
                    <ProtectedRoute path="/pins/create" component={PinFormContainer} />
                    <ProtectedRoute exact path="/pins/:pinId" component={PinShowContainer} />
                    <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
                    <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer} />
                </Switch>
            </>
            )
        };
            
        return currentUser ? loaded() : sessionLinks();
    }
}


export default NavLinks