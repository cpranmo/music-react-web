import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SlotHead from '../slot/SlotHead'  // 插槽组件
import { numberFormat } from "js-num-format"
import http from "../../utils/http";
import "./HotRecommend.scss"

// 首页热门推荐组件
export default function HotRecommend() {
    // 热门数据
    const [hotList, setHotList] = useState([]);
    // 请求数据
    useEffect(()=>{
        http("get","/personalized",{ limit : 8 })
            .then(res=>{
                // console.log(res);
                // 赋值
                setHotList(res["result"]);
            })
    },[])
    /**
     * 创建热门推荐结构
     * @returns  返回创建结构
     */
    const createHotRecommend = ()=>{
        // 使用逻辑时当没有数据时会出现渲染前面 length 为 0 结果所以采用三目运算符
        return hotList.length ? hotList.map((item,index)=>{
            return (
                <li key={ item["id"] }>
                    <div className="pic">
                        <img src={ item["picUrl"] + "?param=140y140" } width="100%" height="100%" alt="封面" />
                        <Link to={ "/playlist?id="+ item["id"] } className="bgImg"></Link>
                        <div className="bottom">
                            <span>
                                <i className="headset"> </i>
                                <i className="num">{ numberFormat(item["playCount"]) }</i>
                            </span>
                            <i className="player"> </i>
                        </div>
                    </div>
                    <p className="title">
                        <Link to={ "/playlist?id="+ item["id"] }>{ item["name"] }</Link>
                    </p>
                </li>
            )
        }) : [];
    }
    // 渲染视图
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
                    createHotRecommend()
                }
            </ul>
        </div>
    )
}
