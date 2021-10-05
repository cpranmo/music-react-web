import React from 'react'
import { Link } from 'react-router-dom'
import "./HotAnchor.scss"
// 首页热门主播组件
export default function HotAnchor() {
    return (
        <div className="HotAnchor">
            <h3 className="title">热门主播</h3>
            <ul>
                {
                    Array(5).fill(0).map((item,index)=>{
                        return (
                            <li key={index}>
                                <Link to="/home?">
                                    <img src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt="" />
                                </Link>
                                <div className="ha-info">
                                    <p className="name">陈立</p>
                                    <p className="desc">心理学家，美食家家</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
