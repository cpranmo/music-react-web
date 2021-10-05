import React from 'react'
import { Route, Switch } from 'react-router'
import DiscoverNav from '../components/nav/DiscoverNav'
import DjRadioPage from './DjRadioPage'
import NewAlbumPage from './NewAlbumPage'
import RankListPage from './RankListPage'
import RecommendPage from './RecommendPage'
import SingerPage from './SingerPage'
import SongSheetPage from './SongSheetPage'
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
                <Route path='/discover/toplist' component={ RankListPage } />
                <Route path='/discover/playlist' component={ SongSheetPage } />
                <Route path='/discover/djradio' component={ DjRadioPage } />
                <Route path='/discover/artist' component={ SingerPage } />
                <Route path='/discover/album' component={ NewAlbumPage }/>
            </Switch>
        </React.Fragment>
    )
}
