import { Spin } from 'antd'
import React, { lazy, Suspense } from 'react'
// 懒加载组件
const RankList = lazy(()=>import('../components/rankLink/RankList'))

// 二次路由排行榜组件
export default function RankListPage() {
    const style = {
        display: "flex",
        width: "100%",
        height: "100px",
        alignItems: "center",
        marginTop: "30px",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.05)",
        borderRadius: "4px"
    }
    return (
        <Suspense fallback={
            <div style={ style }>
                <Spin tip="Loading..."/>
            </div>
        }>
            <RankList />
        </Suspense>
    )
}
