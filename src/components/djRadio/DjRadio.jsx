import { Carousel } from 'antd';
import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { groups } from '../../utils/format';
import http from '../../utils/http';
import SlotHead from '../slot/SlotHead'
import 'antd/dist/antd.css'; // 按需导入
import "./DjRadio.scss"


// 二次路由主播电台路由
function DjRadio() {
    // 电台分类
    const [cateList,setCateList] = useState([]);
    // 推荐节目
    const [recommendList, setRecommendList] = useState([]);
    // 节目排行榜
    const [rankList,setRankList] = useState([]);
    // 请求电台分类
    useEffect(()=>{
        http("get","/dj/catelist")
            .then(res=>{
               let data = groups(res["categories"],18) ;
            //    console.log(data);
               setCateList(data);
            })
    },[])
    // 请求推荐节目
    useEffect(()=>{
        http("get","/program/recommend")
            .then(res=>{
            //    console.log(res);
               setRecommendList(res["programs"])
            })
    },[])
    // 请求节目排行榜
    useEffect(()=>{
        http("get","/dj/program/toplist",{ limit: 10 })
            .then(res=>{
            //    console.log(res);
               setRankList(res["toplist"])
            })
    },[])
    /**
     * 创建分类
     * @returns 分类结构
     */
    const createCateList = () =>{
        return (
            cateList.length ? cateList.map((item,index)=>{
                return index < 2 && (
                    <ul className="cate-content" key={index}>
                        {
                            Array.isArray(item) && item.map((subitem,index)=>{
                                return (
                                    <li key={ subitem["id"] } className={ index === 0 ? "active" : "" }>
                                        <Link to={ "/discover/djradio/category?id=" + subitem["id"] }>
                                            <div className="webUrl" style={{backgroundImage: 'url(' + subitem["picWebUrl"] + ')'}}></div>
                                            <em>{ subitem["name"] }</em>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }) : []
        )
    }
    /**
     * 
     * @returns 推荐节目
     */
    const createRecommend = () =>{
        return (
            recommendList.length ? recommendList.map((item,index)=>{
                return (
                    <li key={ item["id"] }>
                        <div className="pic" title="播放">
                            <img width="100%" height="100%" src= { item["coverUrl"] + "?param=40x40" } alt="封面"/>
                            <i className="icon"></i>
                        </div>
                        <div className="con">
                            <Link to={ "/program?id=" +  item["id"] } className="title">{ item["name"]  }</Link>
                            <Link to={ "/djradio?id=" + (item["radio"] && item["radio"]["id"]) }  className="des">{ item["radio"] && item["radio"]["name"] }</Link>
                        </div>
                        <Link to={ "djradio/category?id=" + item["categoryId"] } className="cate">{ item["radio"] && item["radio"]["category"] }</Link>
                    </li>
                );
            }): []
        )
    }
    /**
     * 创建节目排行榜
     * @returns 节目排行结构
     */
    const createRankList = () =>{
        return (
            rankList.length ? rankList.map((item,index)=>{
                return (
                    <li key={ index }>
                        <div className="rank">
                            <em className={index === 0 ? "red":""}>{index+1 < 10 ? "0"+ (index+1) : (index+1)}</em>
                            {
                                item["lastRank"] < 0  ?
                                    <i className={"new"}></i>
                                    :   <span className={
                                            item["lastRank"] !== item["rank"] ?  item["lastRank"] > item["rank"]  ?  "up" : "down"  : ""
                                        }>
                                        <i></i>{ Math.abs( item["lastRank"] - item["rank"] ) }</span>
                            }
                        </div>
                        <div className="pic">
                            <img width="100%" height="100%" src={ item['program']['coverUrl'] + "?param=40x40" } alt="封面"/>
                            <i className="icon"></i>
                        </div>
                        <div className="con">
                            <Link to={ "/program?id=" + item["program"]["id"] } className="title">{ item['program']['name'] }</Link>
                            <Link to={ "/djradio?id=" + item['program']['radio']['id'] } className="des">{ item['program']['radio']['name'] }</Link>
                        </div>
                        <span className="hot">
                            <i style={{width: (item["score"] / 250000 ) * 100 +  "%"}}></i>
                        </span>
                    </li>
                )
            }) : []
        ) 
    }

    // 类名切换名称
    function changeTitle(index){
        switch(index){
            case 1:
                return "音乐推荐";
            case 2:
                return "生活";
            case 3:
                return "情感";
            case 4:
                return "创作翻唱";
            case 5:
                return "知识";
            default :
                return ""
        }
    }
    

    // 渲染视图
    return (
        <div className="DjRadioPage">
           {/* 电台分类 */}
            <div className="dj-cate">
                <Carousel effect="fade">
                    {
                        createCateList()
                    }
                </Carousel>
            </div>
            {/* 电台分类 */}
            {/* 推荐节目 - 节目排行榜 */}
            <div className="recoment-toplist-wrapper">
                {/*推荐节目*/}
                <div className="recoment publicStyle">
                    <SlotHead>
                        <h3 className="title">
                            <Link to="djradio/recommend">推荐节目</Link>
                        </h3>
                        <span className="more">
                            <Link to="djradio/recommend">更多 &gt;</Link>
                        </span>
                    </SlotHead>
                    <ul className="list">
                        {
                            createRecommend()
                        }
                    </ul>
                </div>
                {/*推荐节目*/} 
                {/* 节目排行榜 */}
                <div className="toplist publicStyle">
                    <SlotHead>
                        <h3 className="title">
                            <Link to="djradio/rank">节目排行榜</Link>
                        </h3>
                        <span className="more">
                            <Link to="djradio/rank">更多 &gt;</Link>
                        </span>
                    </SlotHead>
                    {/* 节目排行列表 */}
                    <ul className="list">
                        {
                            createRankList()
                        }
                    </ul>
                </div>
                {/* 节目排行榜 */}
            </div>
            {/* 推荐节目 - 节目排行榜 */}
            {/* 电台 */}
            <div className="station-list">
                <ul>
                    {
                        Array(5).fill(0).map((item,index)=>{
                            return (
                                <li key={index}>
                                    <SlotHead>
                                        <h3 className="title">
                                            <Link to="djradio/category?id=">{ changeTitle(index+1) }</Link>
                                            <i></i>
                                            <span>电台</span>
                                        </h3>
                                        <span className="more">
                                            <Link to="djradio/category?id=">更多 &gt;</Link>
                                        </span>
                                    </SlotHead>
                                    <ul className="rdiList">
                                        {
                                            Array(4).fill(0).map((item,index)=>{
                                                return (
                                                    <li key={index}>
                                                        <Link to="/djradio?id=" className={"cover"}> 
                                                            <img src="http://p1.music.126.net/BHylP_pUA44toT4D9d-O4g==/109951166254078956.jpg?param=200y200" alt="" />
                                                        </Link>
                                                        <div className="cnt">
                                                            <h3>
                                                                <Link to="/djradio?id=">童话冥想：御姐音 | 一听就困 不再失眠</Link>
                                                            </h3>
                                                            <p className="note">硬地原创音乐榜·独家播客企划</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            {/* 电台 */}
        </div>
    )
}

export default memo(DjRadio) 