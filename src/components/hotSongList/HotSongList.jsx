import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import http from '../../utils/http';
import "./HotSongList.scss"
// 推荐热门歌手组件 (自己添加的侧边栏)
export default function HotSongList() {
    // 歌手列表 
    const [songList, setSongList] = useState([]);
    // 获取歌手列表
    useEffect(() => {
        http('get',"/top/artists",{ offset: 0, limit: 10 })
            .then((res)=>{
                // console.log(res);
                setSongList(res["artists"]);
            })
            .catch(err=>{
                console.log("enterSinger组件出错");
                console.log(err);
            })
    }, []);
    /**
     * 创建歌手列表结构
     * @returns 歌手结构
     */
    const createHotSongList = ()=>{
        return songList.length ? songList.length && songList.map((item,index)=>{
            return (
                <li key={ item["id"] }>
                    <Link to={ "artist?id=" + item["id"] } className="">
                        <div className="left-img">
                            <img src={ item["img1v1Url"] + "?param=62y62" } alt="歌手图" />
                        </div>
                        <div className="right-content">
                            <h4 className="name">{ item["name"] }</h4>
                            <p className="desc">{ item["briefDesc"] }</p>
                        </div>
                    </Link>
                </li>
            )
        }): [];
    }
    // 渲染页面
    return (
        <div className="EnterSinger">
            <div className="EnterSinger-header">
                <h3>热门歌手</h3>
                <Link to="/discover/artist">查看更多 &gt;</Link>
            </div>
            <div className="EnterSinger-body">
                <ul>
                    {
                        createHotSongList()
                    }
                </ul>
                <Link to="https://music.163.com/st/musician" className="recruit">申请成为网易音乐人</Link>
            </div>
        </div>
    )
}
