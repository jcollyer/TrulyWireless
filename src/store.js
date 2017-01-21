import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import initialState from './api/initial-state'
import ReduxThunk from 'redux-thunk'

export default applyMiddleware(ReduxThunk)(createStore)(rootReducer,initialState)
