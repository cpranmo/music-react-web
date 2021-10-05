import React from 'react'
import { Link } from 'react-router-dom'
import SlotHead from '../slot/SlotHead'
import "./DjRadio.scss"

// 二次路由主播电台路由
export default function DjRadio() {

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

    return (
        <div className="DjRadioPage">
           {/* 电台分类 */}
            <div className="dj-cate">
                <ul className="cate-content">
                    {
                        Array(18).fill(0).map((item,index)=>{
                            return (
                                <li key={index} className={index === 0 ? "active" : ""}>
                                    <Link to="/category?id=">
                                        <div className="webUrl" style={{backgroundImage: 'url(https://p3.music.126.net/icULXvfqWJMFvcjTrXSLeA==/109951165406422565.jpg)'}}></div>
                                        <em>情感</em>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="cate-content" style={{"display":"none"}}>
                    {
                        Array(2).fill(0).map((item,index)=>{
                            return (
                                <li key={index}>
                                    <div className="webUrl" style={{backgroundImage: 'url(https://p1.music.126.net/7U7ktiXUIcKf3mtyCfrJ4g==/109951165620722077.jpg)'}}></div>
                                    <em>name</em>
                                </li>
                            )
                        })
                    }
                </ul>
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
                            Array(10).fill(0).map((item,index)=>{
                                return (
                                <li key={index}>
                                    <div className="pic" title="播放">
                                        <img width="100%" height="100%" src="http://p2.music.126.net/SLASkSEu_TZdKfukCtaEtA==/109951165776991634.jpg?param=40x40" alt=""/>
                                        <i className="icon"></i>
                                    </div>
                                    <div className="con">
                                        <Link to="/program?id=" className="title">《时光唱片店》第十八期：你有手机焦虑症吗？</Link>
                                        <Link to="/djradio?id=" className="des">时光唱片店</Link>
                                    </div>
                                    <Link to="djradio/category?id=" className="cate">音乐推荐</Link>
                                </li>
                                );
                            })
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
                            Array(10).fill(0).map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <div className="rank">
                                            <em className={index === 0 ? "red":""}>{index+1 < 10 ? "0"+ (index+1) : (index+1)}</em>
                                            {
                                                index === 1 ? <i className={"new"}></i>:<span className={index === 3 ? "up": "down"}><i></i>0</span>
                                            }
                                        </div>
                                        <div className="pic">
                                            <img width="100%" height="100%" src="https://p1.music.126.net/7U7ktiXUIcKf3mtyCfrJ4g==/109951165620722077.jpg" alt=""/>
                                            <i className="icon"></i>
                                        </div>
                                        <div className="con">
                                            <Link to="/program?id=" className="title">晚风</Link>
                                            <Link to="/djradio?id=" className="des">民当谣说这个世界会好的</Link>
                                        </div>
                                        <span className="hot">
                                            <i style={{width: index === 4 && "80%"}}></i>
                                        </span>
                                    </li>
                                )
                            })
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
