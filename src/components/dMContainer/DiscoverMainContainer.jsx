import React from 'react'
import HotRecommend from '../hotRecommend/HotRecommend'
import NewAlbumShelf from '../newAlbumShelf/NewAlbumShelf'
import "./DiscoverMainContainer.scss"
// 推荐的主体内容
export default function DiscoverMainContainer() {
    return (
        <div className="DiscoverMainContainer">
            {/* 主题模块栏 */}
            <div className='main-module'>
                {/*热门推荐*/}
                <HotRecommend />
                {/*新碟上架*/}
                <NewAlbumShelf />
                {/*榜单*/}
            </div>
            {/* 右侧边栏 */}
            <div className='side-module'>
                {/*用户登录*/}

                {/*登录后的用户信息*/}

                {/*热门话题*/}
            </div>
        </div>
    )
}
