import React from 'react'
import MoviesList from "./MoviesList";
import MoviesSearch from "./MoviesSearch";

class Movies extends React.Component {

    state = {
        data: []
    }

    ComponentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=48586023&s`)
            .then((response) => response.json()
            )
            .then((data) => {
                console.log(data)
            })
    }

    render() {

        return (
            <div>
                <p>movie</p>
                <MoviesSearch/>
                <MoviesList/>
            </div>
        )
    }
}

export default Movies