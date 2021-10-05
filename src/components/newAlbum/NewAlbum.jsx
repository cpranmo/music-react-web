import React from 'react'
import SlotHead from '../slot/SlotHead'
import "./NewAlbum.scss"

// 二次路由新碟上架组件
export default function NewAlbum() {
    return (
        <div className="AlbumPage">
            {/* 热门新碟 */}
            <SlotHead>
                <h3 className="title">热门新碟</h3>
                <i className='more'></i>
            </SlotHead>
            {/* 数据列表 */}
            <ul className="album-list-wrapper">
                {
                    Array(10).fill(0).map((item,index)=>{
                        return (
                            <li key={index}>
                                <div className="pic">
                                    <img width={'100%'} height={'100%'} src="http://p3.music.126.net/mSmiifV_srWSdtKccE0PBA==/109951166442758137.jpg?param=130y130" alt="图片"/>
                                    <p className="bgImg"></p>
                                    <p className="msk"></p>
                                    <i className="icon"> </i>
                                </div>
                                <p className="title">
                                    <a href="##">十二</a>
                                </p>
                                <p className="name">
                                    <a href="##">群性</a> <span> / </span>
                                    <a href="##">张杰</a> 
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
            {/* 热门新碟 */}

            {/* 全部新碟 */}
            <SlotHead>
                <h3 className="title">全部新碟</h3>
                <div className="tab" slot="tab">
                    <a href="##" onClick={console.log('ALL')}>全部</a>
                    <span className="line">|</span>
                    <a href="##" onClick={console.log('ZH')}>华语</a>
                    <span className="line">|</span>
                    <a href="##" onClick={console.log('EA')}>欧美</a>
                    <span className="line">|</span>
                    <a href="##" onClick={console.log('KR')}>韩国</a>
                    <span className="line">|</span>
                    <a href="##" onClick={console.log('JP')}>日本</a>
                </div>
            </SlotHead>
            {/* 数据列表 */}
            <ul className="album-list-wrapper">
                {
                    Array(35).fill(0).map((item,index)=>{
                        return (
                            <li key={index}>
                                <div className="pic">
                                    <img width={'100%'} height={'100%'} src="https://p2.music.126.net/mLWMWefjSNamJUfKvfd5dw==/109951166472407964.jpg?param=130y130" alt="图片"/>
                                    <p className="bgImg"></p>
                                    <p className="msk"></p>
                                    <i className="icon"> </i>
                                </div>
                                <p className="title">
                                    <a href="album?id=">放不下</a>
                                </p>
                                <p className="name">
                                    <a href="/album?id=">陈立荣</a> <span> / </span>
                                    <a href="/album?id=">金鱼</a> 
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
            {/* 全部新碟 */}

            {/* 分页组件 */}
            <div className="song-sheet-pagination"> 
            
            </div>
            {/* 分页组件 */}
        </div>
    )
}
