import { combineReducers } from 'redux'
import { Observation } from './Observation'
import { AuthReducer } from './Auth'
import { getGeoJSONData } from './mapReducer'
//combines all the reducers in the project
export default combineReducers({
    observations: Observation,
    auth: AuthReducer,
    maps: getGeoJSONData
})