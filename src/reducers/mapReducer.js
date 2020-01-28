import { LOAD_MAP_DATA } from '../actions/actionsTypes'
const initialState = {
    GeoJSONDATA: [],
    loading: false
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @return {*} state 
 */
export const getGeoJSONData = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MAP_DATA:
            return {
                ...state,
                GeoJSONDATA: action.payload
            }
        default:
            return state
    }
}