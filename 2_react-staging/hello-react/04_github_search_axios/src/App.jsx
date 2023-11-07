//创建外壳组件APP
import React, {Component} from 'react'
import Header from './Header/Header';
import List from './List/List'

class App extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoad: false,
        isError: ''
    }

    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        //通过 ...将状态中的全部赋值过去
        return (
            <div className="container">
                <Header updateAppState={this.updateAppState}/>
                <List {...this.state} />
            </div>

        )
    }
}

export default App  