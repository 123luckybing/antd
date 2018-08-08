import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Notification, Button } from 'antd';
class NotificationCom extends Component {
  constructor() {
    super();
    this.open = this.open.bind(this);
    this.noticeOpen = this.noticeOpen.bind(this);
  }
  noticeOpen(type) {
    Notification[type]({ // 传type
      message: 'hello~小可爱～', // message弹出的标题
      description: '欢迎来到36kr~', // description弹出的内容
    });
  }
  open() {
    // 不用任何样式的情况下,用Notification.open({});
    Notification.open({ 
      message: 'hello~小可爱～', // message弹出的标题
      description: '欢迎来到36kr~', // description弹出的内容
      duration: 0, // 取消自动关闭,不写这个有自动关闭
    });
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>一:简单用法 自动4.5s关闭</p>
        <Button type='primary' onClick={this.open}>Open the Notification</Button>
        <p>二： 带有图标的消息提示框(四种success,info,warning,error)</p>
        <Button type='dashed' onClick={() => this.noticeOpen('success')}>success</Button><br/><br/>
        <Button type='dashed' onClick={() => this.noticeOpen('info')}>info</Button><br/><br/>
        <Button type='dashed' onClick={() => this.noticeOpen('warning')}>warning</Button><br/><br/>
        <Button type='dashed' onClick={() => this.noticeOpen('error')}>error</Button><br/><br/>
      </div>
    );
  }
}
export default NotificationCom;