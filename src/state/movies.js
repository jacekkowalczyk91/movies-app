const SET_MOVIES = 'movies/SET_MOVIES'
const SET_SINGLE_MOVIE = 'movies/SET_SINGLE_MOVIE'

const setMovies = moviesData => ({
    type: SET_MOVIES,
    moviesData
})
const setSingleMovie = singleMovieData => ({
    type: SET_SINGLE_MOVIE,
    singleMovieData
})

export const getSingleMovie = movieId => (dispatch) => {
    fetch(`https://www.omdbapi.com/?apikey=f3798525&i=${movieId}`)
        .then(response => response.json())
        .then(data => {
            dispatch(setSingleMovie(data))
        })
}

export const getMovies = SearchInput => dispatch => {
    fetch(`https://www.omdbapi.com/?apikey=f3798525&s=${SearchInput}`)
        .then(
            response => response.json()
        ).then(
        data => {
            dispatch(setMovies(data.Search))
        }
    )
}

const initialState = {
    moviesData: [],
    singleMovieData: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                moviesData: action.moviesData
            }

        case SET_SINGLE_MOVIE:
            return {
                ...state,
                singleMovieData: action.singleMovieData
            }

        default:
            return state
    }
}
