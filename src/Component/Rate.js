import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// 从 antd 中引入 Icon
import { Rate } from 'antd';
class Home extends Component {
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>(一):基本用法</p>
        <Rate />
      </div>
    );
  }
}
export default Home;