import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SlotHead from '../slot/SlotHead'
import { Carousel } from 'antd'
import http from '../../utils/http'
import { groups } from '../../utils/format'
import 'antd/dist/antd.css';  // 按需加载
import "./NewAlbumShelf.scss"


// 首页新碟上架组件
export default function NewAlbumShelf() {
    // 新碟上架
    const [newList,setNewList] = useState([]);
    // 请求数据
    useEffect(()=>{
        http('get',"/album/newest").then((res)=>{
            // console.log( groups(res["albums"],5) )
            setNewList(groups(res["albums"],5))
        })
    },[]);
    /**
     * 创建新碟列表
     * @returns 返回创建好的列表
     */
    const createNewAlbum = ()=>{
        return newList.length ? newList.map((item,index)=>{
            return index < 2 && (
                <ul key={ index }>
                    {
                        item.map((item,index)=>{
                            return (
                                <li className="list" key={ item["id"] }>
                                    <div className="pic">
                                        <img src={ item["blurPicUrl"] + "?param=100y100"} alt="封面"/>
                                        <p className="bgImg"> </p>
                                        <Link to={ "album?id="+ item["id"] } className="msk"> </Link>
                                        <i className="icon"> </i>
                                    </div>
                                    <p className="title">
                                        <Link to={ "album?id="+ item["id"] }>{ item["name"] }</Link>
                                    </p>
                                    <p className="name">
                                        {
                                            item["artists"].map((subitem,index)=>{
                                                return (
                                                    <a  key={ subitem['id'] } href={ "/artist?id=" + subitem["id"] } >{ subitem["name"] } </a>
                                                )
                                            })
                                        }
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }): [];
    }
    // 渲染视图
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
                <div className="newAlbum">
                    <Carousel autoplay dots={ false } >
                    {
                        createNewAlbum()
                    }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
