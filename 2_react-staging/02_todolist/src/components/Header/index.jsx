import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Header extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    // 按下 Enter 键时，获取输入的内容。再通过回调传递给 App 组件
    handleKeyUp = (event) => {
        const {key, target} = event;

        if (key !== 'Enter') return;

        if (target.value.trim() === '') {
            alert('输入内容不能为空');
            return;
        }

        const todoObj = {id: new Date().getTime(), name: target.value, done: false};
        this.props.addTodo(todoObj);

        // 添加完 todo 后清空输入框
        target.value = '';
    }

    render() {
        return (
            <div className="todo-header">
                {/* onKeyUp： 用户释放键盘上的任意按键时触发相应的事件处理函数 */}
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="输入任务名，按回车键确认"/>
            </div>
        );
    }
}

export default Header;