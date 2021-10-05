import React from 'react'
import "./RankList.scss"
// 排行榜组件
export default function RankList() {
    return (
        <div className='TopListPage'>
            {/*左边榜单*/}
            <div className="rank-list">
                {/*云音乐特色榜*/}
                <h2>云音乐特色榜</h2>
                <ul className="characteristic">
                    {
                        Array(4).fill(0).map((item,index)=>{
                            return (
                                <li key={index} className={index === 0 ? "active": ""}>
                                    <div className="pic">
                                        <img width="100%" height="100%" src="http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40" alt="图片"/>
                                    </div>
                                    <div className="info">
                                        <p className="title">飙升榜</p>
                                        <p className="update-time">刚刚更新</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 全球媒体榜 */}
                <h2 className="scd">全球媒体榜</h2>
                <ul className="characteristic">
                    {
                        Array(15).fill(0).map((item,index)=>{
                            return (
                                <li key={index}>
                                    <div className="pic">
                                        <img width="100%" height="100%" src="http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40" alt="图片"/>
                                    </div>
                                    <div className="info">
                                        <p className="title" >飙升榜</p>
                                        <p className="update-time" >更新88首</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 全球媒体榜 */}
            </div>
            {/*左边榜单*/}

            {/*右边榜单详情*/}
            <div className="rank-list-details">
                {/*头部信息*/}
                <div className="rank-list-head-wrap">
                    <div className="pic">
                        <img width="100%" height="100%" src="https://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg" alt="" />
                        <span className="msk"></span>
                    </div>
                    <div className="song-des">
                        <h2 className="title">飙升榜</h2>
                        <div className="update-date">
                            <i className="icon"> </i>
                            <span className="date">最近更新：10月4日</span>
                            <span className="exact">（刚刚更新）</span>
                        </div>
                        <div className="btns">
                            <a href="##" className="playBtn">
                                <i></i>
                                <span>播放</span>
                            </a>
                            <a href="##" className="add"> </a>
                            <a href="##" className="collect-num btn-size" data-title="收藏数量">
                                <i>(123343535)</i>
                            </a>
                            <a href="##" className="forward-num btn-size" data-title="转发">
                                <i>(12122)</i>
                            </a>
                            <a href="##" className="download-song btn-size" data-title="下载">
                                <i>下载</i>
                            </a>
                            <a href="##" className="comment-num btn-size" data-title="评论">
                                <i>(2233434)</i>
                            </a>
                        </div>
                    </div>
                </div>
                {/*头部信息*/}


                {/*歌曲列表*/}
                {/*歌曲列表*/}
            </div>

            {/*右边榜单详情*/}
        </div>
    )
}
