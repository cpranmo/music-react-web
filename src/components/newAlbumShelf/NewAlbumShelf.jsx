import React from 'react'
import { Link } from 'react-router-dom'
import SlotHead from '../slot/SlotHead'
import "./NewAlbumShelf.scss"

// 首页新碟上架组件
export default function NewAlbumShelf() {
    return (
        <div className='NewAlbumShelf'>
            {/* 插槽区 */}
            <SlotHead>
                {/* 标题 */}
                <Link className='title' to='/discover/album/'>新碟上架</Link>
                {/* 更多 */}
                <span className='more'>
                    <Link className='title' to='/discover/album/'>更多</Link>
                    <i className="cor s-bg s-bg-6">&nbsp;</i>
                </span>
            </SlotHead>
            {/* 轮播区  */}
            <div className="albumWrap">
                <ul>
                    {
                        new Array(5).fill(0).map((item,index)=>{
                            return (
                                <li className="list" key={index}>
                                    <div className="pic">
                                        <img src="http://p3.music.126.net/hVVNPCyCxQV3U9HH8Y8fxA==/109951166363914914.jpg?param=100y100" alt="图"/>
                                        <p className="bgImg"> </p>
                                        <p className="msk"> </p>
                                        <i className="icon"> </i>
                                    </div>
                                    <p className="title">
                                        <a href="##">幸存者的救赎</a>
                                    </p>
                                    <p className="name">
                                        <a href="##">张杰</a> / <a href="##">张杰</a>
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
