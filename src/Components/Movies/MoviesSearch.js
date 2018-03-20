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

    handleSubmit = event => {
        event.preventDefault()
        this.props.data.Title.includes(this.state.inputValue)
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
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