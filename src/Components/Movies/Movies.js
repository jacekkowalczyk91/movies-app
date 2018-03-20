import React from 'react'
import MoviesList from "./MoviesList";
import MoviesSearch from "./MoviesSearch";

class Movies extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f3798525`)
            .then(
                response => response.json()
            ).then(
            data => this.setState({data})
        )
    }

    render() {
        const {data} = this.state
        return (
            <div>
                <MoviesSearch data={data}/>
                <MoviesList data={data}/>
            </div>
        )
    }
}

export default Movies