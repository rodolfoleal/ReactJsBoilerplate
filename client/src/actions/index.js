import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

const ROOT_URL = 'http://localhost:3003';

export function signinUser({ email, password }) {
    return function (dispatch) {

        //Submit user to server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                //If request is good:
                //Upsate state to indicate user is authenticated
                dispatch({ type: AUTH_USER });
                //Save the JWT token
                localStorage.setItem('token', response.data.token);

                //redirect to the route /feature
                browserHistory.push('/dashboard');


            })
            .catch(() => {
                //If request is bad
                //Show an erro to the User
                dispatch(authError('Bad Login Info'));
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {

    localStorage.removeItem('token');

    return { type: UNAUTH_USER };
}

export function signupUser({ email, password }) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/dashboard');
            })
            .catch(error => {
                dispatch(authError(error.response.data.error));
            });

    }
}

export function fetchAuthMessage() {
    return (dispatch) => {

        axios.get(ROOT_URL, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then(response => {
                console.log(response)
            });

    }
}