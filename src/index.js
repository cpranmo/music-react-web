import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from './App';
import "./common/css/reset.css";
import zhCN from 'antd/lib/locale/zh_CN';


import reportWebVitals from './reportWebVitals';
import store from './store/store';  // 状态数据
import { ConfigProvider } from 'antd';



ReactDOM.render(
	<ConfigProvider locale={zhCN}>
		{/*  状态管理数据 */}
		<Provider store={store}>
			{/* 路由处理 */}
			<Router>
				<App />
			</Router>
		</Provider>
	</ConfigProvider>
	,
	document.getElementById('root')
);

reportWebVitals();
