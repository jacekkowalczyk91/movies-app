import React from 'react'
import MoviesList from "./MoviesList";

class Movies extends React.Component {

    state = {
        data: [],
        searchValue: ''
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=f3798525`)
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
                <MoviesList data={data}/>
            </div>
        )
    }
}

export default Movies