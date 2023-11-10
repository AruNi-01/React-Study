import React, {Component} from 'react';
import Demo from "./components/6_error_boundary";

class App extends Component {
    render() {
        return (
            <div>
                <h1>React App</h1>
                <Demo/>
            </div>
        );
    }
}

export default App;