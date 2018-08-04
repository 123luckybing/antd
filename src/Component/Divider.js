import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <h4>(一)默认为水平分割线</h4>
        <Divider />
        <h4>(二)分割线中间加文字</h4>
        <Divider>我是分割线～</Divider>
        <h4>(三)虚线分割线 加dashed</h4>
        <Divider dashed/>
        <h4>(四)垂直分割线 type='vertical'</h4>
        <Divider type="vertical"/>
        <h4>(五)分割线内容靠左 orientation="left"</h4>
        <Divider orientation="left">left</Divider>
        <h4>(六)分割线内容靠右 orientation="right"</h4>
        <Divider orientation='right'>right</Divider>
      </div>
    );
  }
}
export default Home;