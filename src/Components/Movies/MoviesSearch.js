import React from 'react'

class MoviesSearch extends React.Component {
    render() {
        return(
            <div>
                {this.props.data.Title}
            </div>
        )
    }
}

export default MoviesSearch