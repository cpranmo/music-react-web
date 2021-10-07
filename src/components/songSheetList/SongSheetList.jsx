import { Image, Pagination } from 'antd';
import React, { memo, useEffect, useState } from 'react'
import LazyLoad from 'react-lazyload';
import { Link } from "react-router-dom"
import { numberFormat } from "js-num-format"
import http from '../../utils/http';
import 'antd/dist/antd.css'; // 按需导入
import "./SongSheetList.scss"

// 歌单二级路由组件
function SongSheetList() {
    // 歌手数据
    const [songList,setSongList] = useState({});
    // 请求数据
    const [options,setOptions] = useState({
        order: "hot",
        cat: '全部',
        offset: 1,
        limit: 35
    });
    // 请求数据    
    useEffect(()=>{
        http("get","/top/playlist",{ ...options })
            .then(res=>{
                // console.log(res)
                setSongList(res)
            })
            .catch(err=>{
                console.log("songSheetList组件数据出错");
                console.log(err);
            })
    },[options])
    /**
     * 分页加载
     * @param {*} current 
     */
    const handleChange = (current)=>{
        // console.log(current);
        setOptions({
            ...options,
            offset: current,
        })
    }
    /**
     * 创建歌单结构
     * @returns 歌单列表
     */
    const createSongList = ()=>{
        return (songList["playlists"] && songList["playlists"].length) ?  songList["playlists"].map((item,index)=>{
            return (
                <li key={ item["id"] }>
                    <div className="pic">
                        {
                            <LazyLoad  height={ 140 } width={ 140 }>
                                <Image
                                    width={ 140 }
                                    src={
                                        item['coverImgUrl'] + "?param=140y140"
                                    }
                                    placeholder={
                                        <Image
                                            preview={ true }
                                            src="data:image/png;base64,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"
                                            width={ 140 }
                                        />
                                    }>
                                </Image>
                            </LazyLoad>
                        }
                        <Link to={ "/playlist?id=" + item["id"] } className="msk"></Link>
                        <div className="bottom">
                            <span>
                                <i className="headset"> </i>
                                <i className="num">{ numberFormat(item['playCount']) }</i>
                            </span>
                            <i className="player"> </i>
                        </div>
                    </div>
                    <p className="title">{ item["name"] }</p>
                    <p className="creator">
                        <span>by</span> 
                        <Link to="/user/home?id=">{ item['creator'] && item['creator']['nickname'] }</Link> 
                        <img width={"13px"}  height={"13px"}  src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340149/f4bf/64a1/1ea2/31a08617d7dfddb21fffdb92390ce268.png" alt="图标"></img>
                    </p>
                </li>
            )
        }): [];
    }
    /**
     * 热门事件
     * @param {*} order 
     */
    const handleHot = (order)=>{
        // console.log(order);
        setOptions({
            ...options,
            order,
            offset: 1,
        })
    }

    // 渲染列表
    return (
        <div className='SongSheetPage'>
            {/* 歌单主体 */}
            <div className="SongSheetWrapper">
                <div className="cate-des">
                    <h3>
                        <span>{ options.cat }</span> 
                        <i className="arrow">选择分类<em></em></i>
                    </h3>
                    <i className="s-hot" onClick={ () => handleHot("hot") }>热门</i>
                </div>
                {/* 歌单列表 */}
                <div className="song-list">
                    <ul className="index-list">
                        {
                            // 渲染数据
                            createSongList()
                        }
                    </ul>
                    {/*分页*/}
                    <div className="song-sheet-pagination">
                        {/* 引入antd组件 */}
                        <Pagination
                            hideOnSinglePage ={ true }
                            defaultCurrent={ 1 }
                            current = { options["offset"] }
                            defaultPageSize={ 35 }
                            pageSize={ 35 }
                            total={ 1222 }
                            onChange={ handleChange }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(SongSheetList)