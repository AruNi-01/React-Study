import React from 'react';

function Parent() {
    return (
        <div style={ {background: 'deepskyblue', width: '500px', padding: '8px'} }>
            <h1>我是父组件 Parent</h1>
            {/*<Child>*/}
            {/*    /!* 把 Grandson 作为 Child 的标签体 *!/*/}
            {/*    <Grandson/>*/}
            {/*</Child>*/}

            {/* render 回调函数，从 Child 中接收参数，返回 Grandson 时传递过去 */}
            <Child render={ (data) => <Grandson data={data} /> }/>
        </div>
    )
}

function Child(props) {
    const [data] = React.useState('Child Data');

    return (
        <div style={ {background: 'lightskyblue', width: '100%', padding: '8px'} }>
            <h1>我是子组件 Child</h1>
            {/* 访问传入的标签体（Grandson），才能把其渲染到页面 */}
            {/* 调用 render 回调，将数据传递出去 */}
            {props.render(data)}
        </div>
    )
}

function Grandson(props) {
    return (
        <div style={ {background: 'lightsteelblue', width: '100%', padding: '8px'} }>
            <h1>我是孙组件 Grandson</h1>
            {/* 接收 Child 组件传递过来的数据 */}
            <p>从 Child 组件接收到的数据：{props.data}</p>
        </div>
    )
}

export default Parent;