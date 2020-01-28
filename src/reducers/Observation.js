import { CREATEOBSERVATION, FETCHOBSERVATION, GETOBSERVATIONBYZONE } from '../actions/actionsTypes'
const initialState = {
    observationsData: [],
    successMessage: '',
    observationByzone: [],
    isLoading: false
}

//fetchobervation reducers
/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const Observation = (state = initialState, action) => {
    switch (action.type) {
        case CREATEOBSERVATION:
            return {
                ...state,
                successMessage: action.payload
            }
        case FETCHOBSERVATION:
            return {
                ...state,
                observationsData: action.payload
            }
        case GETOBSERVATIONBYZONE:
            return {
                ...state,
                observationByzone: action.payload
            }
        default:
            return state
    }
}