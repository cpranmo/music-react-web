import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import http from '../../utils/http';
import "./HotAnchor.scss"
// 首页热门主播组件 (因为没有相应 api 使用歌手数据 -- 弃用组件)
export default function HotAnchor() {
    // 热门主播
    const [songList,setSongList] = useState([]);
    // 请求数据
    useEffect(()=>{
        http("get","/top/artists",{ offset: 0, limit: 5 })
            .then(res=>{
                // console.log(res);
                setSongList(res["artists"]);
            })
            .catch(err=>{
                console.log("HotAnchor组件出错了")
                console.log(err);
            })
    },[])
    // 渲染页面
    return (
        <div className="HotAnchor">
            <h3 className="title">热门主播</h3>
            <ul>
                {
                    songList.length && songList.map((item,index)=>{
                        return (
                            <li key={ item["id"] }>
                                <Link to="##">
                                    <img src={ item["img1v1Url"] + "?param=62y62" } alt="歌手图" />
                                </Link>
                                <div className="ha-info">
                                    <Link to="##" className="name">{ item["name"] }</Link>
                                    <p className="desc">{ item["briefDesc"] }</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
