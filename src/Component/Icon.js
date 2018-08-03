import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// 从 antd 中引入 Icon
import { Icon } from 'antd';
import '../App.css';
class Home extends Component {
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        喜欢哪个去点击即可粘贴代码，举几个例子如下：<br/>
        <Icon type="up" />
        <Icon type="up-circle" />
        <Icon type="down-circle" />
        <Icon type="left-circle-o" />
        <Icon type="up-square-o" />
        <Icon type="exclamation-circle-o" />
        <Icon type="check-square-o" />
        <Icon type="check" />
        <Icon 
        type="ie"
        style={{
          fontSize: 25,
          color: 'red'
        }} 
        /><br/>
        <p style={{
          color: 'red'
        }}>可以通过fontSize和color来调整大小和颜色</p>

        <Icon 
        type="question" 
        style={{ 
          fontSize: 25, 
          color: '#08c',
        }} 
        />
      </div>
    );
  }
}
export default Home;