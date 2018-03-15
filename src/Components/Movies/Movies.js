import React from 'react'

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
            </div>
        )
    }
}

export default Movies