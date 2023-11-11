import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Message() {
    const [messages] = React.useState([
        { id: '001', title: 'message001', content: 'message001 content' },
        { id: '002', title: 'message002', content: 'message002 content' },
        { id: '003', title: 'message003', content: 'message003 content' }
    ]);

    // 只要 `<Navigate>` 组件被渲染，就会修改路径，切换视图，但编程式导航一般是在 function 中跳转路由，
    // 因此又得使用 Hooks 了，Navigate 有个 useNavigate Hook，可以返回一个 navigate，用于跳转。
    const navigate = useNavigate();
    function handleBlick(message) {
        // navigate 方法有两个参数，第一个是跳转路径，第二个是一个对象，可以添加 state、配置 replace
        navigate("detail", {
            state: {
                id: message.id,
                title: message.title,
                content: message.content
            },
            replace: false 
        });
    }

    return (
        <div>
            <ul>
                {
                    messages.map((message) => {
                        return (
                            <li key={message.id}>
                                {/* <Link to={`detail/${message.id}/${message.title}/${message.content}`}>{message.title}</Link> */}

                                {/* <Link to={`detail?id=${message.id}&title=${message.title}&content=${message.content}`}>{message.title}</Link> */}

                                <Link to="detail" state={{ id: message.id, title: message.title, content: message.content }}>{message.title}</Link>

                                <button onClick={ () => handleBlick(message) }>查看消息详情</button>
                            </li>
                        );
                    })
                }
            </ul>
            <hr />
            <Outlet />
        </div>
    );
}
