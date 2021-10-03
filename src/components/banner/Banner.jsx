import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Banner.scss"
// 轮播组件
export default function Banner() {
    // 背景蒙城
    const bgUrl = {
        backgroundImage: 'url("http://p1.music.126.net/dK8NbsPXiXu1xJGR19zzkA==/109951166480297045.jpg?imageView&blur=40x20")',
        backgroundSize: '6000px',
        backgroundPosition: 'center center'
    };
    return (
        <div className="BannerWrapper" style={bgUrl}>
        <div className="container">
            <div className="banner">
                <a href="##">
                    <img src="http://p1.music.126.net/dK8NbsPXiXu1xJGR19zzkA==/109951166480297045.jpg?imageView&quality=89" alt="" width="100%" height="100%" />
                </a>
            </div>
            <div className="download-wrapper">
                <NavLink to="/download" className="btn"></NavLink>
                <p>pc端--安卓--鸿蒙</p>
                <span className="shadow"></span>
                <span className="shadowr"></span>
            </div>
        </div>
    </div>
    )
}
