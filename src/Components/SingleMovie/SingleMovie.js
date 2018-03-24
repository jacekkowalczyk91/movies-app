import React from 'react'
import {connect} from 'react-redux'
import {getSingleMovie} from '../../state/movies'

class SingleMovie extends React.Component {

    componentDidMount() {
        this.props.getSingleMovie(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <h1>{this.props.singleMovieData.Title} <span>({this.props.singleMovieData.Year})</span></h1>
                <div>
                    <div>
                        <img src={this.props.singleMovieData.Poster} alt={this.props.singleMovieData.Title}/>
                    </div>
                    <div>
                        <time>{this.props.singleMovieData.Runtime}</time>
                        <p>{this.props.singleMovieData.Genre}</p>
                        <p>{this.props.singleMovieData.Plot}</p>
                        <p>Actors: {this.props.singleMovieData.Actors}</p>
                        <p>Director: {this.props.singleMovieData.Director}</p>
                        <p>Writer: {this.props.singleMovieData.Writer}</p>
                        <p>Released: {this.props.singleMovieData.Released}</p>
                        <p>Boxoffice: {this.props.singleMovieData.BoxOffice}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    singleMovieData: state.movies.singleMovieData
})
const mapDispatchToProps = dispatch => ({
    getSingleMovie: movieId => dispatch(getSingleMovie(movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie)