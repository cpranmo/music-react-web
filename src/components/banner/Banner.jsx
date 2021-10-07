import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import http from '../../utils/http';
import 'antd/dist/antd.css'; // 按需导入
import "./Banner.scss";
// 轮播组件
export default function Banner() {
    // 背景蒙城
    const bgUrl = {
        backgroundImage: 'url("http://p1.music.126.net/dK8NbsPXiXu1xJGR19zzkA==/109951166480297045.jpg?imageView&blur=40x20")',
        backgroundSize: '6000px',
        backgroundPosition: 'center center'
    };
    // 图标样式
    const iconStyle = {
        color: "#efecec"
    };
    // banner 数据
    const [banner,setBanner] = useState([]);
    // 获取容器 dom 
    const warperDom = useRef();
    // 轮播容器 dom
    const bannerDom = useRef();
    // 请求数据
    useEffect(()=>{
        http("get","/banner",{type:"pc"})
            .then(res=>{
                // console.log(res);
                setBanner(res["banners"])
            });
    },[]);  // [] 不监听只请求一次
    /**
     * 面板切换(改变背景蒙层)
     * @param {*} index  当前
     * @param {*} to 下次
     */
    const onChange = (index,to)=> {
        // console.log(index,to);
        warperDom.current && (warperDom.current.style.backgroundImage = `url(${ banner[to] && banner[to]["imageUrl"] }?imageView&blur=40x20 )`);
    }
    /**
     * 轮播上切换
     */
    const handlePrev = ()=>{
        // console.log(bannerDom.current);
        bannerDom.current && bannerDom.current.prev();
    }
    /**
     * 轮播下切换
     */
    const handleNext = ()=> {
        // console.log(bannerDom.current);
        bannerDom.current && bannerDom.current.next();
    }
    /**
     * 创建轮播结构
     * @returns  返回轮播
     */
    const createBanner = ()=>{
        return banner.length && banner.map((item)=>{
            return (
                <Link to={ "/song?id=" + item["targetId"] } key={ item.targetId }>
                    <img src={ item['imageUrl'] + "?imageView&quality=89" }   alt="" width="100%" height="100%" />
                </Link>
            )
        })
    }
    // 视图层
    return (
        <div className="BannerWrapper" ref={ warperDom } style={ bgUrl }>
        <div className="container">
            {/* 上切换按钮 */}
            <span className={ "prevBtn changeBtn" } onClick={ ()=> handlePrev() }>
                <LeftCircleOutlined style={ iconStyle }/>
            </span>
            {/* 轮播区 */}
            <div className="banner">
                <Carousel autoplay ref={ bannerDom }  beforeChange={ onChange }  effect="fade">
                    {
                        // 渲染轮播
                        createBanner()
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
            {/* 下切换按钮 */}
            <span className={ "nextBtn changeBtn"} onClick={ ()=> handleNext() }>
                <RightCircleOutlined style={ iconStyle } />
            </span>
        </div>
    </div>
    )
}
