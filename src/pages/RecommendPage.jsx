import React from 'react'
import Banner from '../components/banner/Banner'
import DiscoverMainContainer from '../components/dMContainer/DiscoverMainContainer'
// 首页二级推荐路由组件
export default function RecommendPage() {
    return (
        <React.Fragment>
            {/* 录播图 */}
            <Banner />
            {/* 主体区 */}
            <DiscoverMainContainer />
        </React.Fragment>
    )
}
