import firebase from '../firebase/config'
import { AUTH_SUCCESS, AUTH_ERROR, AUTH_INFO, LOGGED_OUT } from '../actions/actionsTypes'

/**
 * 
 * @param {*} credentials 
 */
export const authenticateUsers = (credentials) => dispatch => {
    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    ).then(() => {
        dispatch({
            type: AUTH_SUCCESS,
            payload: 'successfully authenticated'
        })
    }).catch((err) => {
        dispatch({
            type: AUTH_ERROR,
            payload: err
        })
    })
    const userInfo = {}
    firebase.auth().onAuthStateChanged((user) => {
        userInfo['uid'] = user.uid
        userInfo['email'] = user.email
        userInfo['displayName'] = user.displayName
        userInfo['emailVarified'] = user.emailVerified
        userInfo['refresh-token'] = user.refreshToken
        dispatch({
            type: AUTH_INFO,
            payload: userInfo
        })
    })
}

//signout users from the system
export const signOut = () => dispatch => {
    firebase.auth().signOut().then(() => {
        dispatch({
            type: LOGGED_OUT
        })
    })
}