import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Drawer,Button } from 'antd';
class DrawerCom extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
    this.open = this.open.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  onClose() {
    this.setState({
      visible: false,
    });
  }
  open() {
    this.setState({
      visible: true,
    });
  }
  render() {
    const { visible } = this.state;
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>一：基本用法</p>
        <Drawer
          title='基本信息' // 弹出的标题
          placement='right' // 弹出的方向(从右弹出) left top bottom
          visible={visible} // visible为true显示,visible为false不显示
          onClose={this.onClose} // 点击遮罩关闭
        >
          <p>姓名：周芳冰</p>
          <p>年龄：21</p>
          <p>职业：程序员</p>
          <p>公司：36kr</p>
        </Drawer>
        <Button type='primary' onClick={this.open}>Open</Button>
      </div>
    );
  }
}
export default DrawerCom;