import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class Movies extends React.Component {


    render() {
        return (
            <div>
                {
                    this.props.moviesData && this.props.moviesData.map((movie, index) => (
                        <div key={index}>
                            <h5>{movie.Title}</h5>
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