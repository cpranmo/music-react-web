/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Link } from 'react-router-dom'
import "./EnterSinger.scss"

// 首页入驻歌手组件
export default function EnterSinger() {
    return (
        <div className="EnterSinger">
            <div className="EnterSinger-header">
                <h3>入驻歌手</h3>
                <Link to="/discover/artist/signed/">查看更多 &gt;</Link>
            </div>
            <div className="EnterSinger-body">
                <ul>
                    {
                        Array(5).fill(0).map((item,index)=>{
                            return (
                                <li key={index}>
                                    <div className="left-img">
                                        <img src="http://p1.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg?param=62y62" alt="歌手图" />
                                    </div>
                                    <div className="right-content">
                                        <h4 className="name">张惠妹aMEI</h4>
                                        <p className="desc">台湾歌手张回妹</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <a href="https://music.163.com/st/musician" target="_blank">申请成为网易音乐人</a>
            </div>
        </div>
    )
}
