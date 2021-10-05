import React from 'react'
import { Link } from 'react-router-dom'
import SlotHead from '../slot/SlotHead'

// 推荐首页榜单
export default function BillList() {
    return (
        <div className='HotRecommend'>
            {/* 插槽 */}
            <SlotHead>
               {/* 标题 */}
               <Link className='title' to='/discover/toplist'>榜单</Link>
                {/* 更多 */}
                <span className='more'>
                    <Link className='title' to='/discover/album/'>更多</Link>
                    <i className="cor s-bg s-bg-6">&nbsp;</i>
                </span>
            </SlotHead>

            {/* 数据列表 */}
            
           
        </div>
    )
}
