import React, { useEffect, useState } from 'react'
import {  Link, NavLink } from 'react-router-dom';
import "./SingerList.scss";

// 二次歌手路由组件
export default function SingerList() {
    // 字母数据
    const [az,setAz] = useState([])
    // 获取 a-z 字母
    useEffect(()=>{
        const arr = []
        for (let i=65;i<91;i++){
            arr.push(String.fromCharCode(i))
        }
        // setAz() 相当于进行赋值操作 az = arr;  
        setAz(arr)
    },[]);

    function changeTitle(index){
        switch(index){
            case 0:
                return "推荐"
            case 1:
                return "华语";
            case 2:
                return "欧美";
            case 3:
                return "日本";
            case 4:
                return "韩国";
            case 5:
                return "其他";
            default :
                return ""
        }
    }

    return (
        <div className="SingerPage">
            {/* 歌手类型 */}
            <div className="singer-cate">
                <div className="cate-wrap">
                    <ul>
                        {
                            Array(6).fill(0).map((item,index)=>{
                                return (
                                    <li className="cate" key={index}>
                                        <h2 className="title">{ changeTitle(index) }</h2>
                                        <ul className="item">
                                            {
                                                Array(3).fill(0).map((item,index)=>{
                                                    return (
                                                        <li key={index}>
                                                            <NavLink to="/discover/artist/cat?id=1" className="name">华语男歌手</NavLink>
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
            </div>
            {/* 歌手列表 */}
            <div className="singer-list-wrapper">
                <h3 className="cate-type">华语男歌手</h3>
                {/* 字母表 */}
                <ul className="initial" initial="initial">
                    <li>
                        <a href="artist/cat?" className="hot">热门</a>
                    </li>
                    {
                        az.length>0 && az.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <a href="artist/cat?" code={item}>{item}</a>
                                </li>
                            )
                        })
                    }
                    <li>
                        <a href="artist/cat?" className="other">其他</a>
                    </li>
                </ul>
                {/* 字母表 */}
                {/* 歌手列表 */}
                <ul className="singer-list">
                    {/* 带封面图 */}
                    {
                        Array(10).fill(0).map((item,index)=>{
                            return (
                                <li key={index} className={ (index <= 10 && index >=5) ? "line": ""}>
                                    <div className="pic" title="">
                                        <img width={'100%'} height={'100%'} src=" http://p1.music.126.net/R5fsMgpLHC9mJbLLA6EKLA==/109951164561120345.jpg?param=130y130" alt="封面"/>
                                        <p className="bgImg"></p>
                                    </div>
                                    <p className={"name"}>
                                        <Link to="/artist?id=">邓紫棋</Link>
                                        <i> </i>
                                    </p>
                                </li>
                            )
                        })
                    }
                    {/* 带封面图 */}
                    {/* 不带封面图 */}
                    {
                        Array(100).fill(0).map((item,index)=>{
                            return (
                                <li key={index} className="small">
                                     <p className={"name"}>
                                        <Link to="/artist?id=">邓紫棋</Link>
                                        <i> </i>
                                     </p>
                                </li>
                            )
                        })
                    }
                    {/* 不带封面图 */}
                </ul>
                {/* 歌手列表 */}
            </div>
        </div>
    )
}
