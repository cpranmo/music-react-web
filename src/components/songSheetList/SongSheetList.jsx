import React from 'react'
import { Link } from "react-router-dom"
import "./SongSheetList.scss"


// 歌单二级路由组件
export default function SongSheetList() {
    return (
        <div className='SongSheetPage'>
            {/* 歌单主体 */}
            <div className="SongSheetWrapper">
                <div className="cate-des">
                    <h3>
                        <span>全部</span> 
                        <i className="arrow">选择分类<em></em></i>
                    </h3>
                    <a href="##">热门</a>
                </div>
                {/* 歌单列表 */}
                <div className="song-list">
                    <ul className="index-list">
                        {
                            new Array(35).fill(0).map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <div className="pic">
                                            <img width={'100%'} height={'100%'} src="http://p3.music.126.net/W9A3XdIv6_IHtoS3xO3CNA==/109951165847621474.jpg" alt="图"/>
                                            <Link to="/playlist?id=" className="msk"></Link>
                                            <div className="bottom">
                                                <span>
                                                    <i className="headset"> </i>
                                                    <i className="num">1.40万</i>
                                                </span>
                                                <i className="player"> </i>
                                            </div>
                                        </div>
                                        <p className="title">迷醉/迷幻/微醺的音律与灵嗓</p>
                                        <p className="creator">
                                            <span>by</span> 
                                            <Link to="/user/home?id=">环球音乐国际部</Link> 
                                            <img width={"13px"}  height={"13px"}  src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340149/f4bf/64a1/1ea2/31a08617d7dfddb21fffdb92390ce268.png" alt="图标"></img>
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/*分页*/}
                    <div className="song-sheet-pagination">
                        {/* 引入antd组件 */}
                    </div>
                </div>
            </div>
        </div>
    )
}
