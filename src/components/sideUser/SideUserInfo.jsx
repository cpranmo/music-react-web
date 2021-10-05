import React from 'react'
import "./SideUserInfo.scss"
// 用户登录后的组件
export default function SideUserInfo() {
    return (
        <div className="SideUserInfo">
            <div className="user-wrap">
                <a href='##' className="avatar">
                    <img width={'100%'} height={'100%'} src="http://p1.music.126.net/T_0GRXDRqVIQlEnHi2ivew==/109951165695160138.jpg" alt=""/>
                </a>
                <div className="info">
                    <h4 className="nickname">
                        <a href='##'>染墨</a>
                    </h4>
                    <p className="level">
                        <a href='##'>
                            3
                            <i> </i>
                        </a>
                    </p>
                    <p className={`sign signUp`}>
                        <a href='##'>{1 ? '已签到' : '签到'}</a>
                    </p>
                </div>
            </div>
            <ul className="charm">
                <li>
                    <b>6</b>
                    <span>动态</span>
                </li>
                <li>
                    <b>8</b>
                    <span>关注</span>
                </li>
                <li>
                    <b>10</b>
                    <span>粉丝</span>
                </li>
                <li>
                    <b>5</b>
                    <span>私信</span>
                </li>
            </ul>
        </div>
    )
}
