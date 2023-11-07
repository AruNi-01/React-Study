import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import './List.css'

class List extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoad: false,
        isError: ''
    }

    // 组件挂载完后就订阅
    componentDidMount() {
         this.token = PubSub.subscribe('LIST_STATE_TOPIC', (_, stateObj) => {
            this.setState(stateObj)
        })
    }

    // 组件将要卸载时取消订阅
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoad, isError} = this.state;
        return (
            <div className="row">
                {
                    //因为不能在JSX语法中使用if，只能是表达式，所以可以用三元运算符(可连续)进行判断。
                    isFirst ? <h1>欢迎进入页面</h1> :
                        isLoad ? <h2>正在搜索页面</h2> :
                            isError !== '' ? <h1>{isError}</h1> :
                                users.map((user) => {
                                    return (
                                        <div className="card" key={user.id}>
                                            <a href={user.html_url} target="_blank" rel="noreferrer">
                                                <img alt="headImg" src={user.avatar_url} style={{width: '100px'}}/>
                                            </a>
                                            {/*user.login是用户名*/}
                                            <p className="card-text">{user.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        );
    }
}

export default List;