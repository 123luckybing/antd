import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip,Button } from 'antd';
class TooltipCom extends Component {
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li><br/>
        <p>鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。</p>
        <p>将文字用Tooltip用包起来 title是文字划入显示的文案</p>
        <div>一：基本用法</div>
        <Tooltip title='zhoufangbing'>
        {/* 行级元素 */}
          <span>Hello~周芳冰</span> 
        </Tooltip>
        <div>二：placement设置文案方向,还有很多，不一一举例啦</div>
        <Tooltip placement='left' title='朝阳公园'>
          <span>我在这里等你～</span>
        </Tooltip><br/>
        <Tooltip placement='right' title='黑龙江哈尔滨'>
          <span>东北农业大学</span>
        </Tooltip><br/>
        <Tooltip placement='bottomRight' title='朝阳公园'>
          <span>我在这里等你～</span>
        </Tooltip><br/>
        <div>三：arrowPointAtCenter～箭头指向中心～与Button一起使用</div>
        <Tooltip title='朝阳公园' arrowPointAtCenter>
          <Button>button～～～～～～～～～～</Button>
        </Tooltip><br/>
      </div>
    );
  }
}
export default TooltipCom;