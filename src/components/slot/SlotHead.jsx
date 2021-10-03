import React from 'react'
import "./SlotHead.scss"
// 插槽模板组件
export default function SlotHead(props) {
    // 插槽的数据
    const {children} = props;
    // 渲染对象
    // console.log(children);

    // 处理插槽数据
    function handleChildPosition(className) {
        return children.map((item)=>{
            // 根据类名插入不同位置(相当于vue中具名插槽)
            if (item.props.className === className) return item
            return []
        })
    }
    return (
        // 分类头部
        <div className='cate-nav'>
            <div className="left-cate">
                {/* 分类名  */}
                {handleChildPosition('title')}
                {/* 列表条 */}
                {handleChildPosition('tab')}
            </div>
            {/* 更多 */}
            {handleChildPosition('more')}
        </div>
    )
}
