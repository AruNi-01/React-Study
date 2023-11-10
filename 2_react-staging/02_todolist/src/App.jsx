import React, {Component} from "react";
import './App.css'

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {

    // 初始化 state
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '敲代码', done: false},
        ]
    }

    // 添加一个 todo 对象
    addTodo = (todoObj) => {
        const {todos} = this.state;
        // 添加新的 todo 到上方，然后更新 state
        this.setState({todos: [todoObj, ...todos]})
    }

    // 更新一个 todo 对象
    updateTodo = (id, done) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            if (todo.id === id) return {...todo, done};
            else return todo;
        })
        this.setState({todos: newTodos});
    }

    // 删除一个 todo 对象
    deleteTodo = (id) => {
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        })
        this.setState({todos: newTodos});
    }

    // 全选/取消全选
    checkAllTodo = (done) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            return {...todo, done};
        })
        this.setState({todos: newTodos})
    }

    // 清除所有已经完成的任务
    clearAllDone = () => {
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => {
            return todo.done === false;
        })
        this.setState({todos: newTodos})
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}
