/* eslint-disable react/jsx-no-target-blank */  // 屏蔽 jsx 中 a 标签的 target 属性
import React from 'react'
import { NavLink } from 'react-router-dom';
import "./GlobalHeader.scss";
// 全局头部导航
export default function GlobalHeader() {
    return (
        // 全局头部组件
        <header className="GlobalHeader">
            <div className="container">
                <div className="top-left">
                    {/* logo 主页 */}
                    <h1 className="logo">
                        <NavLink to="/" />
                    </h1>
                    {/* 导航列表 */}
                    <ul className="nav">
                        <li>
                            <NavLink to="/discover">
                                <em>发现音乐</em>
                                <i className="arrow" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/my">
                                <em>我的音乐</em>
                                <i className="arrow" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/friend">
                                <em>朋友</em>
                                {/* 激活的状态的下三角形 */}
                                <i className="arrow" />
                            </NavLink>
                        </li>
                        <li>
                            <a href="https://music.163.com/store/product" target="_blank">
                                <em>商城</em>
                            </a>
                        </li>
                        <li>
                            <a href="https://music.163.com/st/musician" target="_blank">
                                <em>音乐人</em>
                            </a>
                        </li>
                        <li>
                            <NavLink to="/download">
                                <em>下载客户端</em>
                                <i className="arrow" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="search-and-login-container">
                    <div className="search-wraper">
                        <input
                            type="text"
                            placeholder="音乐/视频/电台/用户"
                        />
                    </div>
                    <a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter" className="m-top" target="_blank">创作者中心</a>
                    <i  className="loginBtn" onClick={()=>{}}>登录</i>
                </div>
            </div>
        </header>
    )
}



