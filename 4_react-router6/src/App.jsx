import React from "react";
import {NavLink, useRoutes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import routes from "./routes";

export default function App() {
    const element = useRoutes(routes);

    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <Header/>
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
                            {/* Routes == Switch，而且 Routes 是必须的 */}
                            {/* <Routes> */}
                                {/* element == component */}
                                {/* <Route path="/about" element={<About/>}></Route> */}
                                {/* <Route path="/home" element={<Home/>}></Route> */}
                                {/* Navigate 相当于 Redirect */}
                                {/* <Route path="/" element={<Navigate to="/home"/>}></Route> */}
                            {/* </Routes> */}

                            {/* 用 useRoutes 代替 Routes 注册路由 */}
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
