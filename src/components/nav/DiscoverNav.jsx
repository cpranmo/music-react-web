import React from 'react'
import { NavLink } from 'react-router-dom'
import "./DiscoverNav.scss"
// 二级导航栏组件
export default function DiscoverNav() {
    return (
        <div className="DiscoverNav">
            <div className="nav">
                <ul>
                    <li>
                        <NavLink exact to="/discover">推荐</NavLink>
                    </li>
                    <li>
                        <NavLink to="/discover/toplist">排行榜</NavLink>
                    </li>
                    <li>
                        <NavLink to="/discover/playlist">歌单</NavLink>
                    </li>
                    <li>
                        <NavLink to="/discover/djradio">主播电台</NavLink>
                    </li>
                    <li>
                        <NavLink to="/discover/artist">歌手</NavLink>
                    </li>
                    <li>
                        <NavLink to="/discover/album">新碟上架</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
