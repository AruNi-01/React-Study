import React from 'react';
import root from "../../index";

// 类式组件
// class Demo extends React.Component {
//     state = {
//         count: 0
//     }
//
//     add = () => {
//         const {count} = this.state;
//         this.setState({count: count + 1});
//     }
//
//     render() {
//         return (
//             <div>
//                 <span>Count: {this.state.count}</span> &nbsp;
//                 <button onClick={this.add}>Add 1</button>
//             </div>
//         );
//     }
// }

// 函数式组件
function Demo() {

    // state hook，[状态值, 更新状态值的方法]
    const [count, setCount] = React.useState(0);

    // effect hook，副作用钩子，两个参数，第一个是回调函数，第二个是监测数组
    React.useEffect(() => {
        // 副作用操作，会在 DidMount 和 DidUpdate 后调用。
        // 但 useEffect 第二个参数是 [] 时，就表示不监测数据的变化，相当于只是 DidMount。
        let timer = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);

        // return 函数在组件卸载前执行，相当于 WillUnmount
        return () => {
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
            clearInterval(timer);
        }
    }, []);    // 监测的数据，如果指定的是 [], 回调函数只会在第一次 render() 后执行

    // ref hook，存储/查找组件内的标签或任意其它数据
    const myRef = React.useRef();

    function add() {
        // setCount(count + 1)

        setCount(oldValue => {
            return oldValue + 1;
        })
    }

    function unmount() {
        // 新版创建/卸载根容器写法
        // const root = ReactDOM.createRoot(document.getElementById('root'));
        // root.render(<App />);
        //
        // export default root;

        root.unmount();
    }

    function showInput() {
        alert(myRef.current.value);
    }

    // reducer hook，收集所有操作某个数据的方案，方便调用。参数：
    //    · 第一个参数是 reducer 函数；
    //    · 第二个参数是 state 初始值；
    //    · 第三个参数是初始化状态的函数，用于复杂初始化（可选）。
    // 返回值：
    //    · num 是初始化好的 state；
    //    · dispatch 可以实现传入不同的 action 对象，来执行不同的操作
    const [num, dispatch] = React.useReducer(numReducer, 0);

    // reducer 函数，参数：
    //    · 第一个参数是当前 state 值；
    //    · 第二个参数是 action 对象（对象内容根据传入时来决定，一般用法是传入 type 和 payload）
    // 返回值是经过一系列操作后的新 state。
    function numReducer(currentValue, action) {
        switch (action.type) {
            case 'ADD':
                return currentValue + action.payload;
            case 'SUB':
                return currentValue - action.payload;
            case 'RESET':
                return 0;
            default:
                return currentValue;
        }
    }

    return (
        <div>
            <input type="text" ref={myRef}/> &nbsp;
            <button onClick={showInput}>Click Show Input</button>
            <br/> <br/>
            <span>Count: {count}</span> &nbsp;
            <button onClick={add}>Add 1</button> &nbsp;
            <button onClick={unmount}>Unmount Component</button>
            <br/> <br/>
            <span>Reducer Count: {num}</span> &nbsp;
            {/* 使用 dispatch 时，传递 action 对象即可，当前 state 值会自动读取到，不用传递 */}
            <button onClick={ () => {dispatch({type: 'ADD', payload: 2})} }>Add 2</button> &nbsp;
            <button onClick={ () => {dispatch({type: 'SUB', payload: 3})} }>Sub 3</button> &nbsp;
            <button onClick={ () => {dispatch({type: 'RESET'})} }>Reset 0</button>
        </div>
    )
}

export default Demo;