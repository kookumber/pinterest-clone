import React from "react";
import ReactDOM from "react-dom";
import {postUser, postSession, deleteSession} from './util/session_api_util'
import configureStore from './store/store'
import {signup, login, logout} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    window.store = store
    window.getState = store.getState;
    window.signup = signup
    window.login = login
    window.logout = logout
    window.dispatch = store.dispatch;
    window.postUser = postUser
    window.postSession = postSession
    window.deleteSession = deleteSession

    ReactDOM.render(<h1>Welcome to Finterest</h1>, root);
});