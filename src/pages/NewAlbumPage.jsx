import { Spin } from 'antd'
import React, { lazy, Suspense } from 'react'
// 懒加载组件
const  NewAlbum = lazy(()=> import('../components/newAlbum/NewAlbum'))

// 二次新碟上架路由组件
export default function NewAlbumPage() {
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
            <NewAlbum />
        </Suspense>
    )
}
