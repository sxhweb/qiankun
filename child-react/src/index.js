
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import './public-path';


ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
// 定义一个渲染函数，方便主应用调用和子应用自己运行
function render () {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (window.__POWERED_BY_QIANKUN__) {
 
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  
}

export async function mount() {
  
  // 挂载子应用
  render();
}

export async function unmount() {
  // 卸载子应用
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//Cannot read property 'forEach' of undefined