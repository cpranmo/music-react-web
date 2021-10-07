/* eslint-disable react/jsx-no-target-blank */
import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import http from '../../utils/http';
import "./EnterSinger.scss"
// 首页入驻歌手组件 (因为没有相应 api 使用歌手数据 -- 弃用组件)
export default function EnterSinger() {
    // 歌手列表 
    const [songList, setSongList] = useState([]);
    // 获取歌手列表
    useEffect(() => {
        http('get',"/top/artists",{ offset: 10, limit: 5 })
            .then((res)=>{
                // console.log(res);
                setSongList(res["artists"]);
            })
            .catch(err=>{
                console.log("enterSinger组件出错");
                console.log(err);
            })
    }, []);
    // 渲染页面
    return (
        <div className="EnterSinger">
            <div className="EnterSinger-header">
                <h3>入驻歌手</h3>
                <Link to="##">查看更多 &gt;</Link>
            </div>
            <div className="EnterSinger-body">
                <ul>
                    {
                        songList.length && songList.map((item,index)=>{
                            return (
                                <li key={ item["id"] }>
                                    <div className="left-img">
                                        <img src={ item["img1v1Url"] + "?param=62y62" } alt="歌手图" />
                                    </div>
                                    <div className="right-content">
                                        <h4 className="name">{ item["name"] }</h4>
                                        <p className="desc">{ item["briefDesc"] }</p>
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
