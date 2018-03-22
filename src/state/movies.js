const SET_MOVIES = 'movies/SET_MOVIES'

const setMovies = moviesData => ({
    type: SET_MOVIES,
        moviesData
})

export const getMovies = SearchInput => dispatch => {
    fetch(`http://www.omdbapi.com/?apikey=f3798525=${SearchInput}`)
        .then(
            response => response.json()
        ).then(
        data => {
            dispatch(setMovies(data))
        }
    )
}

const initialState = {
    moviesData: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_MOVIES:
            return {
                ...state,
                moviesData: action.moviesData
            }

        default:
            return state
    }
}
