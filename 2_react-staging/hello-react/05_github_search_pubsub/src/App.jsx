//创建外壳组件APP
import React, {Component} from 'react'
import Header from './Header/Header';
import List from './List/List'

class App extends Component {
    render() {
        //通过 ...将状态中的全部赋值过去
        return (
            <div className="container">
                <Header/>
                <List/>
            </div>

        )
    }
}

export default App  