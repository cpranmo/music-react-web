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
                <div className='list'>
                    <div className="pic">
                        <img src="" alt=""/>
                        <p className="bgImg"> </p>
                        <p className="msk"> </p>
                        <i className="icon"> </i>
                    </div>

                    <p className="title">
                        <a href="##">item.name</a>
                    </p>
                    <p className="name">
                        <a href="##">
                            artist.name <span > / </span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
