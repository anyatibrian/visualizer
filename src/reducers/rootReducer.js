import { combineReducers } from 'redux'
import { Observation } from './Observation'
import { AuthReducer } from './Auth'
import { getGeoJSONData } from './mapReducer'

export default combineReducers({
    observations: Observation,
    auth: AuthReducer,
    maps: getGeoJSONData
})