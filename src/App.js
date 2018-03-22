import React, { Component } from 'react';
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Movies from './Components/Movies'


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={Movies}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
