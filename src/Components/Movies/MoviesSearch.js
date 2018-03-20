import React from 'react'

class MoviesSearch extends React.Component {

    state = {
        inputValue: ''
    }

    handleInputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form

                >
                    <input
                        type="text"
                        placeholder="enter movie here ..."
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                    />
                </form>
            </div>
        )
    }
}

export default MoviesSearch