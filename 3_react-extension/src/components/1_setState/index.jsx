import React, {Component} from 'react';

class Demo extends Component {
    state = {
        count: 0
    }

    add = () => {
        const {count} = this.state;
        // this.setState({count: count + 1});
        // console.log(this.state.count);   // 输出 +1 之前的值，因为 setState 是异步更新状态

        // 输出 +1 之后的值，第二个参数是一个可选函数，它在状态更新完毕、界面也更新后(render调用后)才被调用
        this.setState({count: count + 1}, () => {
                console.log(this.state.count);
            }
        )
    }

    add2 = () => {
        // 对象式的 setState，可以收到 state 和 props
        this.setState(
            (state, props) => ({count: state.count + 1}),
            () => {
                console.log(this.state.count);
            }
        )
    }

    render() {
        return (
            <div>
                <span>Count: {this.state.count}</span> &nbsp;
                <button onClick={this.add}>Add 1</button>
            </div>
        );
    }
}

export default Demo;