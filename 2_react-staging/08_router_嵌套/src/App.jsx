import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        {/*一般组件*/}
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*原生 HTML 靠 <a> 跳转页面*/}
                            {/*<a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a>*/}

                            {/*编写路由链接（引起路径变化）*/}
                            {/*<NavLink className="list-group-item" to="/about">About</NavLink>*/}
                            {/*/!* NavLink在点击的时候就会去找 style01 所指定的 class 的值，如果不添加默认是 active *!/*/}
                            {/*<NavLink activeClassName="style01" className="list-group-item" to="/home">Home</NavLink>*/}

                            {/* 使用自己封装的 MyNavLink */}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*<h3>我是About的内容</h3>*/}

                                {/* Switch，匹配到一个路由后就不往下匹配了，否则每次都会把所有路由匹配一遍，效率低 */}
                                <Switch>
                                    {/*路由组件：注册路由（路径变化后对应的组件）*/}
                                    <Route path="/about" component={About}></Route>
                                    {/* exact={true} 精准匹配，/home/abc 匹配不到 /home 了 */}
                                    <Route path="/home" component={Home}></Route>
                                    {/* Redirect: 如果上面的都没有匹配到，就匹配到这个路径下面 */}
                                    <Redirect to = "/home"/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
