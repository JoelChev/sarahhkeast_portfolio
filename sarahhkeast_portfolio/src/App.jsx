import React, { Component } from 'react';
import RouteSwitcher from './routes/RouteSwitcher';
import './styles/main.scss';

class App extends Component {
    render() {

        return (
            <div className="App">
                <body>
                    <RouteSwitcher />
                </body>
            </div>
        );

    }
}

export default App;