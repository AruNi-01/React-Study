import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class Header extends Component {

    // 编程式路由导航，一般组件中不能直接使用，得用 withRouter 包装该组件
    back = () => {
        this.props.history.goBack();
    }
    forward = () => {
        this.props.history.goForward();
    }

    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.back}>后退</button> &nbsp;
                <button onClick={this.forward}>前进</button>
            </div>
        );
    }
}

// withRouter 可包装一般组件，返回一个新组件，能让其有路由组件的 API
export default withRouter(Header);