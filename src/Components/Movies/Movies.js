import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Movies.css'



class Movies extends React.Component {


    render() {
        return (
            <div className='movies-view'>
                {
                    this.props.moviesData && this.props.moviesData.map((movie, index) => (
                        <div className='movie' key={index}>
                            <h5>{movie.Title}</h5>
                            <img src={movie.Poster} alt={movie.Title}/>
                            <Link to={`/movie/${movie.imdbID}`}>
                                <button>More</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    moviesData: state.movies.moviesData
})

export default connect(mapStateToProps)(Movies)