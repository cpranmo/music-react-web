import React, { lazy, Suspense } from 'react'
import SideLogin from '../sideLogin/SideLogin'
import SideUserInfo from '../sideUser/SideUserInfo' 
import { Spin } from 'antd'
import "./DiscoverMainContainer.scss"
// 懒加载组件
const HotRecommend = lazy(()=> import('../hotRecommend/HotRecommend'))
const NewAlbumShelf = lazy(()=> import('../newAlbumShelf/NewAlbumShelf'))
const TopList = lazy(()=> import('../topList/TopList'))  
const HotSongList = lazy(()=> import('../hotSongList/HotSongList'))

// 推荐的主体内容
export default function DiscoverMainContainer() {
    return (
        <div className="DiscoverMainContainer">
            {/* 主题模块栏 */}
            <div className='main-module'>
                {/* 热门推荐 */}
                <Suspense fallback={
                    <div className={"loading"}>
                        <Spin tip="Loading..."/>
                    </div>
                }>
                    {/* 进行懒加载 */}
                    <HotRecommend />
                </Suspense>
                
                {/* 新碟上架 */}
                <Suspense fallback={
                    <div className={"loading"}>
                        <Spin tip="Loading..."/>
                    </div>
                }>
                    {/* 进行懒加载 */}
                    <NewAlbumShelf />
                </Suspense>

                {/* 推荐榜单 */}
                <Suspense fallback={
                    <div className={"loading"}>
                        <Spin tip="Loading..."/>
                    </div>
                }>
                    {/* 进行懒加载 */}
                    <TopList /> 
                </Suspense>
            </div>
            {/* 右侧边栏 */}
            <div className='side-module'>
                {/* 用户登录 */}
                <SideLogin />

                {/* 登录后的用户信息 */}
                <SideUserInfo />

                {/* 热门歌手 */}
                <Suspense fallback={
                    <div className={"loading"}>
                        <Spin tip="Loading..."/>
                    </div>
                }>
                    {/* 进行懒加载 */}
                    <HotSongList />
                </Suspense>
            </div>
        </div>
    )
}
