import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const store = (initialState) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middleware = process.env.NODE_ENV !== 'production' ? [thunk] : [thunk]
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )
}

export default store()
