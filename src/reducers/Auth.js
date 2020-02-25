import { AUTH_ERROR, AUTH_SUCCESS, AUTH_INFO, LOGGED_OUT } from '../actions/actionsTypes'

const initialState = {
    authSuccess: '',
    authError: {},
    userInfo: {},
    loggedOut: false,
    loggedin: false,
    loading: false
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case AUTH_SUCCESS:
            return {
                ...state,
                loggedin: true,
                loggedOut: false,
                authSuccess: action.payload
            }

        case AUTH_INFO:
            return {
                ...state,
                loggedin: true,
                loggedOut: false,
                userInfo: action.payload
            }
        case LOGGED_OUT:
            return {
                ...state,
                loggedOut: true,
                loggedin: false
            }

        case AUTH_ERROR: {
            return {
                ...state,
                loggedin: false,
                loggedOut: true,
                authError: action.payload
            }
        }

        default:
            return state
    }
}