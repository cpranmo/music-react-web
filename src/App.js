import React from "react";
import { connect } from "react-redux"
import { Redirect, Route } from "react-router";
import Footer from "./components/footer/Footer";
import GlobalHeader from "./components/header/GlobalHeader";
import DownloadPage from "./pages/DownloadPage";
import FriendPage from "./pages/FriendPage";
import HomePage from "./pages/HomePage";
import MyMusicPage from "./pages/MyMusicPage";

function App() {
	return (
		<div className="App">
			{/* 一级导航区 */}
			<GlobalHeader />
			{/* 二级导航区 */}
			<div className="music-content">
				<Redirect from='/' to='/discover' />
				{/* 由于还需要添加二级路由所以不能精准匹配 */}
				<Route path='/discover' component={HomePage} />
				<Route path='/my' component={MyMusicPage} />
				<Route path='/friend' component={FriendPage} />
				<Route path='/download' component={DownloadPage} />
			</div>
			{/* 底部实现 */}
			<Footer />
		</div>
	);
}

// 测试 redux  使用
export default connect()(App);
