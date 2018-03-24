import React from 'react'
import connect from 'react-redux'
import getSingleMovie from '../../state/movies'

class SingleMovie extends React.Component {

    componentDidMount() {
        this.props.getSingleMovie(this.props.match.params.id)
    }

    render()
    const singleMovie = this.props.singleMovieData


{
        return(
            <div>
                <h1>{this.singleMovieData.Title} <span>({this.singleMovieData.Year})</span></h1>
                <div>
                    <div>
                        <img src={this.singleMovieData.Poster} alt={this.singleMovieData.Title}/>
                    </div>
                    <div>
                        <time>{this.singleMovieData.Runtime}</time>
                        <p>{this.singleMovieData.Genre}</p>
                        <p>{this.singleMovieData.Plot}</p>
                        <p>Actors: {this.singleMovieData.Actors}</p>
                        <p>Director: {this.singleMovieData.Director}</p>
                        <p>Writer: {this.singleMovieData.Writer}</p>
                        <p>Released: {this.singleMovieData.Released}</p>
                        <p>Boxoffice: {this.singleMovieData.BoxOffice}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    singleMovieData : state.movies.singleMovieData
})

export default connect(mapStateToProps)(SingleMovie)