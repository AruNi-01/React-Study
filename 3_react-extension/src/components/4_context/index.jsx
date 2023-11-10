import React, {Component} from 'react';

const NameContext = React.createContext('defaultName');

function Demo() {

    const [name] = React.useState('tom');

    return (
        <div style={ {background: 'deepskyblue', width: '500px', padding: '8px'} }>
            <h1>我是父组件 Demo</h1>
            <h3>我的名字是：{name}</h3>
            {/* 向下提供 context（可修改值） */}
            <NameContext.Provider value={name}>
                <Child/>
            </NameContext.Provider>
        </div>
    )
}

class Child extends Component {
    // 类式组件中声明接收 context 后即可直接在 this 上使用，必须使用静态属性 contextType
    static contextType = NameContext;

    render() {
        return (
            <div style={ {background: 'lightskyblue', width: '100%', padding: '8px'} }>
                <h1>我是子组件 Child</h1>
                <h3>我从父组件接收到的名字是：{this.context}</h3>
                <Grandson/>
                <Grandson2/>
            </div>
        )
    }
}

function Grandson() {
    return (
        <div style={ {background: 'lightsteelblue', width: '100%', padding: '8px'} }>
            <h1>我是孙组件 Grandson</h1>
            <h3>我从父组件接收到的名字是：
                {/* 函数式组件没有 static 和 this，所以得使用 Consumer 接收 context，Consumer 标签
                    中需要写一个函数，其参数就是接收到的 context。（使用 useContest Hook 更优雅） */}
                <NameContext.Consumer>
                    {
                        name => <span>{name}</span>
                    }
                </NameContext.Consumer>
            </h3>
        </div>
    )
}

function Grandson2() {

    // useContext Hook 接收 context，更优雅
    const name = React.useContext(NameContext);

    return (
        <div style={ {background: 'lightsteelblue', width: '100%', padding: '8px'} }>
            <h1>我是孙组件 Grandson2</h1>
            <h3>我从父组件接收到的名字是：{name}</h3>
        </div>
    )
}

export default Demo;