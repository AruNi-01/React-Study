//创建外壳组件APP
import React, {Component} from 'react'
import Header from './Header/Header';
import List from './List/List'

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <List/>
            </div>

        )
    }
}

export default App  