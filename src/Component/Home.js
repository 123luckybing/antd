import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
class Home extends Component {
  render() {
    return (
      <div>
        <a 
        target='_blank' 
        href='https://ant.design/docs/react/use-with-create-react-app-cn'
        >参考网站</a>
        <div>项目配置步骤是按在create-react-app中来配置的,按着高级配置一步步来就可以</div>
        <h3>antd学习目录</h3>
        <li><Link to='/Button'>Button点击按钮</Link></li>
        <li><Link to='/Icon'>Icon小图标</Link></li>
        <li><Link to='/Cascader'>Cascader级联选择</Link></li>
        <li><Link to='/Breadcrumb'>Breadcrumb面包屑导航</Link></li>
        <li><Link to='/Rate'>Rate星级评分</Link></li>
        <li><Link to='/Switch'>Switch开关</Link></li>
        <li><Link to='/Spin'>Spin加载中</Link></li>
        <li><Link to='/InputNumber'>InputNumber数字输入框</Link></li>
      </div>
    );
  }
}
export default Home;