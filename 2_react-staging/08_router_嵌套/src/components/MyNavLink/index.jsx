import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

 // 封装 NaviLink
class MyNavLink extends Component {
    render() {
        return (
            // 通过 {...对象} 展开所有 MyNavLink 传递过来的属性，就放在了 NavLink 标签上
            <NavLink activeClassName="style01" className="list-group-item" {...this.props}></NavLink>
        );
    }
}

export default MyNavLink;