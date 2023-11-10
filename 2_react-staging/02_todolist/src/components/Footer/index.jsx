import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Footer extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkAllTodo: PropTypes.func.isRequired,
        clearAllDone: PropTypes.func.isRequired
    }

    // 处理全选/取消全选
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
    }

    // 清除所有已经完成的 todo
    handleClearAllDone = () => {
        this.props.clearAllDone();
    }

    render() {
        const {todos} = this.props;

        // 使用 array.reduce 统计：reduce 第一个参数为一个函数，其中 pre 为前一次调用时的值（初始为 0，
        // reduce 的第二个参数指定），todo 为 array 中的 item。
        const doneCount = todos.reduce((pre, todo) => {
            return pre + (todo.done ? 1 : 0);
        }, 0)
        const total = todos.length;

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount === total && total !== 0} onChange={this.handleCheckAll}/>
                </label>
                <span>
                    进度：{doneCount}/{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;