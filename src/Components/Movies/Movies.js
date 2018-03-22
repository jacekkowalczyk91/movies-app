import React from 'react'
import { connect } from 'react-redux'


class Movies extends React.Component {


    render() {
        return (
            <div>
                {
                    this.props.moviesData && this.props.moviesData.map((movie, index) => (
                        <div key={index}>
                            <h1>{movie.Title}</h1>
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