import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
class Home extends Component {
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <span>button有四种类型：主按钮、次按钮、虚线按钮、危险按钮，通过type值来控制</span>
        <p>(一) 主按钮：type='primary'</p>
        <Button type="primary">确认</Button>
        <br/>
        <p>(二) 次按钮，不写type</p>
        <Button>取消</Button>
        <br/>
        <p>(三) 虚线按钮，type='dashed'</p>
        <Button type="dashed">登录</Button>
        <br/>
        <p>(四) 危险按钮，type='danger'</p>
        <Button type="danger">下线</Button>
        <br/>
      </div>
    );
  }
}
export default Home;