import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root'
import {login, signup, logout} from './actions/sessionActions'

document.addEventListener("DOMContentLoaded", () => {
    let store;
    
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore()
    }

    const root = document.getElementById("root");
    
    window.store = store
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login
    window.signup = signup
    window.logout = logout

    // ReactDOM.render(<Root store={store} />, root);
    ReactDOM.render(<h1>Its working</h1>, root);
});

