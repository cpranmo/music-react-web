import React from 'react'
import { Link } from 'react-router-dom'
import SlotHead from '../slot/SlotHead'  // 插槽组件
import "./HotRecommend.scss"

// 首页热门推荐组件
export default function HotRecommend() {
    return (
        <div className='HotRecommend'>
            {/* 插槽 */}
            <SlotHead>
                <Link to="/discover/playlist" className='title'>热门推荐</Link>
                {/* 插槽中不同之处 */}
                <h2 className='tab'>
                    <Link to="/discover/playlist/?cat=华语">华语</Link>
                    <span className="line">|</span>
                    <Link to="/discover/playlist/?cat=流行">流行</Link>
                    <span className="line">|</span>
                    <Link to="/discover/playlist/?cat=摇滚">摇滚</Link>
                    <span className="line">|</span>
                    <Link to="/discover/playlist/?cat=民谣">民谣</Link>
                    <span className="line">|</span>
                    <Link to="/discover/playlist/?cat=电子">电子</Link>
                </h2>
                {/* 更多 */}
                <div className='more'>
                    <Link to="/discover/playlist">更多</Link>
                    <i className="cor">&nbsp;</i>
                </div>
            </SlotHead>

            {/* 数据列表 */}
            <ul className="index-list">
                {
                    new Array(8).fill(0).map((item,index)=>{
                        return (
                            <li key={index}>
                                <div className="pic">
                                    <img src="http://p2.music.126.net/sXIej4jKk_767N89n7Fk7Q==/109951165255013850.jpg?param=140y140"
                                         width="100%" height="100%" alt="" />
                                    <p className="bgImg"> </p>
                                    <div className="bottom">
                            <span>
                                <i className="headset"> </i>
                                <i className="num">71万</i>
                            </span>
                                        <i className="player"> </i>
                                    </div>
                                </div>
                                <p className="title"><a href="##">欧美｜那么孤单，不如一起跳舞吧。</a></p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
