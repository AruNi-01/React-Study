import React, {Component} from 'react'
import PubSub from "pubsub-js";
import axios from 'axios';

export default class Header extends Component {

    search = async () => {
        //const {value} = this.KeyValue;
        //连续解构赋值，拿到this下面的KeyValue中的value,并进行重命名为KeyWord
        const {KeyValue: {value: keyWord}} = this;

        //在搜索之前设置,搜索的开始，结束第一次展示
        PubSub.publish('LIST_STATE_TOPIC', {isFirst: false, isLoad: true});

        // axios 发送网络请求
        // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
        //     success => {
        //         PubSub.publish('LIST_STATE_TOPIC', {users: success.data.items, isLoad: false});
        //     },
        //     error => {
        //         PubSub.publish('LIST_STATE_TOPIC', {isError: error.message, isLoad: false});
        //     }
        // )

        // fetch 发送网络请求
        // fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
        //     resolve => {    // 判断是否成功连接服务器
        //         console.log('连接服务器成功');
        //         return resolve.json(); // resolve.json() 返回一个 promise 实例，获取的数据在其中
        //     },
        //     error => {
        //         console.log('连接服务器失败', error.message);
        //         // 中断 promise 链，否则 error 的返回值是 undefined，是非 promise 实例，会导致后面的 .then 走成功的函数
        //         return new Promise(() => {
        //         })    // 返回一个初始化状态的 promise
        //     }
        // ).then(     // resolve 中返回了一个 promise 实例，promise 支持链式调用
        //     // 这里才是真正的获取数据
        //     response => {
        //         console.log('获取数据成功', response);
        //     },
        //     error => {
        //         console.log('获取数据失败', error.message)
        //     }
        // )

        /* promise 小知识：
            1. 如果 promise 的 .then 方法中，成功函数的返回值是一个 promise 实例，那么就会把该返回值作为 .then 的返回值。
            2. 由于 await 关键字需要等待一个 Promise 对象的结果，而 async 函数会自动把函数的返回值封装为一个 Promise 对象，
               所以我们只能在 async 函数中使用 await 关键字。
         */

        // fetch 发送网络请求（await 优化版，async 函数才能使用 await）
        try {
            // 等待 fetch 函数返回的 Promise 对象完成
            const resolve = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`);
            // 等待 resolve.json() 返回的 Promise 对象完成，并获取该 Promise 对象的解析结果
            const response = await resolve.json();
            PubSub.publish('LIST_STATE_TOPIC', {users: response.items, isLoad: false});
        } catch (err) {     // await 只会等待成功的返回，因此需要 catch error
            PubSub.publish('LIST_STATE_TOPIC', {isError: err.message, isLoad: false});
        }
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    {/*使用ref拿到输入的数据，ref中使用回调函数的形式，在实例对象中创建一个KeyValue的属性，值是该节点*/}
                    <input ref={c => this.KeyValue = c} type="text" placeholder="输入关键词进行搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
