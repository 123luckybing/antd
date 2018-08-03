import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
class Home extends Component {
  render() {
    return (
      <div>
        <a href='https://ant.design/docs/react/use-with-create-react-app-cn'>参考网站</a>
        <div>项目配置步骤是按在create-react-app中来配置的,按着高级配置一步步来就可以</div>
        <h3>antd学习目录</h3>
        <li><Link to='/Button'>button点击按钮</Link></li>
        <li><Link to='/Icon'>Icon小图标</Link></li>
        <li><Link to='/Cascader'>级联选择</Link></li>
        <li><Link to='/Breadcrumb'>面包屑导航</Link></li>
        <li><Link to='/Rate'>星级评分</Link></li>
      </div>
    );
  }
}
export default Home;