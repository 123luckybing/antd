import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'antd';
class BreadcrumbMenu extends Component {
  constructor() {
    super();
    this.close = this.close.bind(this);
  }
  close() {
    console.log(1);
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>一：Alert警告提示</p>
        <p>message是指警告内容，type是警告框的类型：warning/info/error/success</p>
        <Alert message='success Text' type='success'/>
        <Alert message='info Text' type='info'/>
        <Alert message='warning Text' type='warning'/>
        <Alert message='error Text' type='error'/>
        <p>二：显示关闭按钮，点击可关闭警告提示。</p>
        <Alert 
          message='这是一个弹出框'  // 弹出框标题
          description='弹出框弹出框' // 弹出框内容(辅助性的提示文字)
          type='success' // 弹出框类型
          closable //  弹出框可以关闭
          onClose={this.close} // 当弹出框关闭时执行的函数
        />
        <p>三：显示图标:添加showIcon</p>
        <Alert
          message='警告标题'
          decription='警告内容'
          closable
          type='success'
          showIcon
        />
        <Alert
          message='警告标题'
          decription='警告内容'
          closable
          type='info'
          showIcon
        />
        <Alert
          message='警告标题'
          decription='警告内容'
          closable
          type='warning'
          showIcon
        />
        <Alert
          message='警告标题'
          decription='警告内容'
          closable
          type='error'
          showIcon
        />
        <p>四：自定义关闭文字 closeText；页面顶部通告形式，banner</p>
        <Alert
          message='这是一个bug'
          description='这是bug内容啦啦啦啦啦啦啦啦啦啦'
          type='info'
          showIcon
          closeText='点击关闭'
          banner
        />
      </div>
    );
  }
}
export default BreadcrumbMenu;