import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React 17 中引入的 createRoot，用于创建一个根 React 渲染器，其支持并发模式，更高效
const root = ReactDOM.createRoot(document.getElementById('root'));
// 使用 root 渲染器渲染 App 组件
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 记录页面性能
reportWebVitals();
