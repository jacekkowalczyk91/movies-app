import React from 'react'
import MoviesSearch from "./MoviesSearch";

class MoviesList extends React.Component {

    state = {
        currentSearchPhrase: ''
    }

    handleSearchPhraseChange = event => {
        this.setState({
            currentSearchPhrase: event.target.value
        })
    }

    render() {
        return (
            <div>
                <MoviesSearch
                    // searchPhrase={this.state.currentSearchPhrase}
                    // onChange={this.handleSearchPhraseChange}
                />

            </div>
        )
    }
}

export default MoviesList