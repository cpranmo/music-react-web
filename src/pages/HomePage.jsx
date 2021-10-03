import React from 'react'
import { Route, Switch } from 'react-router'
import DiscoverNav from '../components/nav/DiscoverNav'
import RecommendPage from './RecommendPage'
// 首页路由组件
export default function HomePage() {
    return (
        <React.Fragment>
            {/* 二级导航栏 */}
            <DiscoverNav />
            {/* 导航下的内容区 */}
            <Switch>
                {/* 需要精准匹配不然都是第一个 */}
                <Route exact path='/discover' component={ RecommendPage } />
                <Route path='/discover/toplist' ><h1>排行榜</h1></Route>
                <Route path='/discover/playlist' ><h1>歌单</h1></Route>
                <Route path='/discover/djradio' ><h1>主播电台</h1></Route>
                <Route path='/discover/artist' ><h1>歌手</h1></Route>
                <Route path='/discover/album' ><h1>新碟上架</h1></Route>
            </Switch>
        </React.Fragment>
    )
}
