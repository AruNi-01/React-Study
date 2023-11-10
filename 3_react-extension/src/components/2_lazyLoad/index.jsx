import React, {Component, lazy, Suspense} from "react";
import {Route, Switch, Redirect, NavLink} from "react-router-dom";
import Loading from "./components/Loading";

// import About from "./pages/About";
// import Home from "./pages/Home";

// 路由组件懒加载
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));


export default class Demo extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <NavLink to="/about" className="list-group-item">About</NavLink>
                            <NavLink to="/home" className="list-group-item">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Suspense fallback={<Loading/>}>
                                    <Switch>
                                        <Route path="/about" component={About}></Route>
                                        <Route path="/home" component={Home}></Route>
                                        <Redirect to = "/home"/>
                                    </Switch>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
