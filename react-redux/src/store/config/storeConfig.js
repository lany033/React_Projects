import { configureStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../reducers/rootReducer'

export const createAppStore = () => {
    let store = configureStore(rootReducer, composeWithDevTools())
    return store
}