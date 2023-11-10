import React, {Component} from 'react';

function Demo() {
    return (
        <div>
            {/* 自定义子组件渲染错误时的 UI（一般是放置一个 error 组件） */}
            <ErrorBoundary errorFallback={<p>Something went wrong</p>}>
                <Child/>
            </ErrorBoundary>
        </div>
    );
}

class ErrorBoundary extends Component {
    state = {hasError: false};

    // 当前组件的子组件出现任何错误时，都会先调用此函数，而且会传入错误信息。
    // 此函数需要返回一个状态对象，用于更新错误状态标识，以便根据此状态响应错误。
    static getDerivedStateFromError(error) {
        console.log(error);
        // 更新状态，以便下一次渲染将显示后备 UI。
        return {hasError: true};
    }

    // 此生命周期在子组件抛出错误后被调用。
    componentDidCatch(error, errorInfo) {
        // 你也可以将错误日志上报给服务器
        console.log(error, errorInfo);
    }

    render() {
        return (
            <div>
                <h2>我是 ErrorBoundary 组件</h2>
                {
                    this.state.hasError
                        ? this.props.errorFallback  // 可以渲染任何自定义后备 UI
                        : this.props.children   // 正常渲染子组件
                }
            </div>
        )
    }
}

function Child() {
    const arr = [1, 2, 3];
    return (
        <div>
            <h3>我是 Child 组件</h3>
            {
                 arr.map((item, index) => {
                    // 制造错误
                    if (index === 2) {
                        throw new Error('出错了');
                    }
                    return item;
                })
            }
        </div>
    );
}

export default Demo;