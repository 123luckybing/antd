import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Spin,Icon } from 'antd';
class BreadcrumbMenu extends Component {
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <h3>(一)最简单的加载</h3>
        <Spin />
        <h3>(二)尺寸控制:通过size字段来控制 large，small</h3>
        <Spin size='small'/><br/>
        <Spin /><br/>
        <Spin size='large'/><br/>
        <h3>(三)放入一个容器中</h3>
        <div 
          className="wrapper"
          style={{
            width: '300px',
            height: '100px',
            background: '#ccc',
            textAlign: 'center',
            lineHeight: '100px'
          }}
        >
          <Spin />
        </div>
        <h3>(四)自定义使用自定义指示符 indicator属性</h3>
        <Spin indicator={<Icon type="loading" />}/>
      </div>
    );
  }
}
export default BreadcrumbMenu;