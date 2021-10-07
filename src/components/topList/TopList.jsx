import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SlotHead from '../slot/SlotHead'
import { numberFormat } from "js-num-format"
import "./TopList.scss"

// 推荐首页榜单
export default function TopList() {
    // 榜单数据
    const [topList,setTopList] = useState([]);
    // 请求函数
    function getTopCateList(id) {
        return axios.get('/playlist/detail?id=' + id)
    }
    // 并发请求
    useEffect(()=>{
        axios.all([getTopCateList(19723756),getTopCateList(3779629),getTopCateList(2884035)])
            .then(axios.spread((...args)=>{
                // 重组数据 
                const data =  args.map(item=>{
                    return item.data
                })
                // console.log(data);
                // 赋值
                setTopList(data);
            }))
            .catch(err=>{
                console.log("系统繁忙! 稍后再试")
                console.log(err);
            })
    },[]);
    /**
     * 创建榜单列表
     * @returns  返回列表结构
     */
    const createTopList = ()=>{
        return topList.length ?  topList.map((item,index)=>{
            return (
                <dl key={ item["playlist"]["id"] } className="rankcate">
                    <dt className="top">
                        <div className="pic">
                            <img width="100%" height="100%" src={ item["playlist"]["coverImgUrl"] + "?param=100y100" } alt="封面"/>
                            <Link to={"/discover/toplist?id=" + item["playlist"]["id"] } className="bgImg" title={ item["playlist"]["name"] }></Link>
                        </div>
                        <div className="title">
                            <Link to={"/discover/toplist?id=" + item["playlist"]["id"] } title={ item["playlist"]["name"] }>
                                <h3>{ item["playlist"]["name"] }</h3>
                            </Link>
                            <p className="btn">
                                <i className="player" title="播放"> </i>
                                <i className="subscribe" title="收藏订阅"> </i>
                            </p>
                            <p className="playCount">播放量: { numberFormat(item["playlist"]['playCount']) } </p>
                        </div>
                    </dt>
                    <dd className="list">
                        <ol>
                            {
                                item["playlist"]["tracks"].map((subitem,index)=>{
                                    return index < 10 && (
                                        <li key={ subitem["id"] }>
                                            <span className="serial-number">{ index + 1 }</span>
                                            <Link className="name" to={ "/song?id=" + subitem["id"] } title={ subitem["name"] }>{ subitem["name"] }</Link>
                                            <div className="oper">
                                                <i className="paly" title="播放"> </i>
                                                <i className="add" title="添加到播放列表"> </i>
                                                <i className="sub" title="收藏"> </i>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                        <div className="more">
                           <Link to={ "/discover/toplist?id=" + item["playlist"]["id"] }>查看全部 &gt;</Link>
                        </div>
                    </dd>
                </dl>
            )
        }) : [];
    }
    // 渲染列表
    return (
        <div className='HotRecommend'>
            {/* 插槽 */}
            <SlotHead>
               {/* 标题 */}
               <Link className='title' to='/discover/toplist'>榜单</Link>
                {/* 更多 */}
                <span className='more'>
                    <Link className='title' to='/discover/album/'>更多</Link>
                    <i className="cor s-bg s-bg-6">&nbsp;</i>
                </span>
            </SlotHead>
            {/* 插槽 */}
            {/* 数据列表 */}
            <div className="RankingList">
                {/* 生成榜单列表 */}
                { createTopList() }
            </div>
            {/* 数据列表 */}
        </div>
    )
}
