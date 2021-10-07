import { Spin } from 'antd'
import React, { lazy, Suspense } from 'react'
// 懒加载
const DjRadio = lazy(()=>import('../components/djRadio/DjRadio'))

// 二次路由主播电台组件
export default function DjRadioPage() {
    const style = {
        display: "flex",
        width: "980px",
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
            <DjRadio />
        </Suspense>
    )
}
