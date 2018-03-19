import React from 'react'
import MoviesList from "./MoviesList";
import MoviesSearch from "./MoviesSearch";

class Movies extends React.Component {

    state = {
        data: []
    }

    ComponentDidMount() {
        fetch(`http://www.omdbapi.com/`)
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