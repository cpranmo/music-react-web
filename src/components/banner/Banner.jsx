import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import http from '../../utils/http';
import 'antd/dist/antd.css'; 
import "./Banner.scss"
// 轮播组件
export default function Banner() {
    // 背景蒙城
    const bgUrl = {
        backgroundImage: 'url("http://p1.music.126.net/dK8NbsPXiXu1xJGR19zzkA==/109951166480297045.jpg?imageView&blur=40x20")',
        backgroundSize: '6000px',
        backgroundPosition: 'center center'
    };
    // banner 数据
    const [banner,setBanner] = useState([]);
    // 获取容器 dom 
    const warper = useRef();
    // 只请求一次数据
    useEffect(()=>{
        http("get","/banner",{type:"pc"})
            .then(res=>{
                console.log(res);
                setBanner(res["banners"])
            });
    },[]);
    // 面板切换
    function onChange(index,to) {
        // console.log(index,to);
        warper.current && (warper.current.style.backgroundImage = `url(${ banner[to]["imageUrl"] }?imageView&blur=40x20 )`);
    }
    return (
        <div className="BannerWrapper" ref={ warper } style={ bgUrl }>
        <div className="container">
            {/* 轮播区 */}
            <div className="banner">
                <Carousel autoplay beforeChange={ onChange }  effect="fade">
                    {
                        banner.length && banner.map((item,index)=>{
                            return (
                                <a href="##" key={ item.targetId }>
                                    <img src={ item['imageUrl'] + "?imageView&quality=89" }   alt="" width="100%" height="100%" />
                                </a>
                            )
                        })
                    }
                </Carousel>
            </div>
            {/* 下载区 */}
            <div className="download-wrapper">
                <Link to="/download" className="btn">跳转移动端</Link>
                <p>pc端--安卓--鸿蒙</p>
                <span className="shadow"></span>
                <span className="shadowr"></span>
            </div>
        </div>
    </div>
    )
}
