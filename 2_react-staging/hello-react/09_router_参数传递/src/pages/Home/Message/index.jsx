import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";

class Message extends Component {

    state = {
        messageArr: [
            {id: '01', title: '消息 1'},
            {id: '02', title: '消息 2'},
            {id: '03', title: '消息 3'}
        ],
    }

    render() {
        const {messageArr} = this.state

        return (
            <div>
                <ul>
                    {
                        messageArr.map((message) => {
                            return (
                                <li key={message.id}>
                                    {/* 向路由组件传递 params 参数 */}
                                    {/*<Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>*/}

                                    {/* 向路由组件传递 search 参数 */}
                                    {/*<Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>*/}

                                    {/* 向路由组件传递 state 参数，to 属性接收一个对象，里面指定路径，state */}
                                    <Link to={ {pathname: `/home/message/detail`, state: {id: message.id, title: message.title}} }>{message.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* Route 声明接收 params（id）并传递 */}
                {/*<Route path={`/home/message/detail/:id/:title`} component={Detail}></Route>*/}

                {/* search/state 参数的方式不用声明接收传递 */}
                <Route path={`/home/message/detail`} component={Detail}></Route>
            </div>
        );
    }
}

export default Message;