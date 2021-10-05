import React from 'react'
import BillList from '../billList/BillList'
import HotRecommend from '../hotRecommend/HotRecommend'
import NewAlbumShelf from '../newAlbumShelf/NewAlbumShelf'
import EnterSinger from '../enterSinger/EnterSinger'
import SideLogin from '../sideLogin/SideLogin'
// import SideUserInfo from '../sideUser/SideUserInfo'
import HotAnchor from '../hotAnchor/HotAnchor'
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
                {/*推荐榜单*/}
                <BillList />
            </div>
            {/* 右侧边栏 */}
            <div className='side-module'>
                {/*用户登录*/}
                <SideLogin />
                {/*登录后的用户信息*/}
                {/* <SideUserInfo /> */}
                {/*入驻歌手*/}
                <EnterSinger />
                {/*热门主播*/}
                <HotAnchor />
            </div>
        </div>
    )
}
