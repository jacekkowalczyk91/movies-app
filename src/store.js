import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import movies, {getMovies, getSingleMovie} from './state/movies'

const reducers = combineReducers({
    movies
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)

store.dispatch(getMovies('batman'))
store.dispatch(getSingleMovie('tt0096895'))