import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'


//creating the new store  elements
export const store = createStore(
    rootReducer,
    {}, composeWithDevTools(applyMiddleware(thunk))
)