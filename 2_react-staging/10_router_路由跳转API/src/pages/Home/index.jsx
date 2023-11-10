import React, {Component} from 'react';
import News from "./News";
import Message from "./Message";
import {Redirect, Route, Switch} from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home 内容</h2>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to="/home/news">News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="/home/message">Message</MyNavLink>
                    </li>
                </ul>

                {/* 注册路由 */}
                <Switch>
                    <Route path="/home/news" component={News}/>
                    <Route path="/home/message" component={Message}/>
                    <Redirect to="/home/news"/>
                </Switch>
            </div>
        );
    }
}

export default Home;