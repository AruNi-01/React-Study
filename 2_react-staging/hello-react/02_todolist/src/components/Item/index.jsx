import React, {Component} from 'react';
import './index.css';

class Item extends Component {

    state = {mouse: false}

    // 鼠标移入/移出的回调
    handleMouse = (flag) => {
        // 注意：标签上的事件必须接收一个函数，由于要传参，所以会触发函数的执行，因此使用函数柯里化
        return () => {
            this.setState({mouse: flag})
        }
    }

    // checkbox 勾选/取消的回调
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 删除按钮的回调
    handleDelete = (id, name) => {
        if (window.confirm(`确定要删除 '${name}' 吗？`)) {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state

        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{backgroundColor: mouse ? '#ddd' : 'white'}}>
                <label>
                    {/* defaultChecked 只在初始化时执行一次，checked 没有这个限制，但是必须添加 onChange。类似的还有 defaultValue */}
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleDelete(id, name)}} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
            </li>
        );
    }
}

export default Item;