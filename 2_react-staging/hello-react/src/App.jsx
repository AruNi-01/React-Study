// "react" 内部命名导出了 Component，因此这里可以采用 {Component} 导入
import React, {Component} from "react";
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome";

// 创建 App 组件并默认导出
export default class App extends Component {
    render() {
        return (
            <div>
                App...
            </div>
        )
    }
}
