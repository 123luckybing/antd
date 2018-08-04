import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { message,Button } from 'antd';
class MessageMenu extends Component {
  constructor() {
    super();
    this.info = this.info.bind(this);
    this.success = this.success.bind(this);
    this.successTime = this.successTime.bind(this);
    this.successLoading = this.successLoading.bind(this);
    this.error = this.error.bind(this);
    this.warn = this.warn.bind(this);
    this.promiss = this.promiss.bind(this);
  }
  promiss() {
    //执行完第一个.then 执行第二个.then 以此循环下去
    message.loading('loading...',2.5)
    .then( () => message.info('loading finished!', 2)) 
    .then( () => message.success('loading finished is finished!', 2));
  }
  success() {
    message.success('成功');
  }
  successLoading () {
    // 异步
    const hide = message.loading('小主别急～加载ing~'); // 第二个参数秒数
    setTimeout(hide,2500);
  }
  successTime() {
    message.success('成功', 10); // 第二个参数秒数 现在是10s
  }
  error() {
    message.error('失败');
  }
  warn() {
    message.warn('警告');
  }
  info() {
    message.info('You Click Me'); // 弹出的内容
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>一：信息提醒反馈，点击弹出蓝色的框（message.info）</p>
        <Button type='dashed' onClick={this.info}>Normal Message</Button>
        <p>二： 成功(message.success) 绿色框、失败(message.error) 红色框、警告(message.warn)橙色框</p>
        <Button type='primary' onClick={this.success}>成功</Button><br/><br/>
        <Button type='dashed' onClick={this.error}>失败</Button><br/><br/>
        <Button type='danger' onClick={this.warn}>警告</Button><br/><br/>
        <p>三：设置弹框的显示时间,只需在message.函数~第二个参数传时间即可，单位s,默认3s</p>
        <Button type='primary' onClick={this.successTime}>成功</Button><br/><br/>
        <p>四：message.loading加载</p>
        <Button type='dashed' onClick={this.successLoading}>加载</Button><br/><br/>
        <p>五：promiss接口</p>
        <Button onClick={this.promiss}>Promiss接口</Button>


      </div>
    );
  }
}
export default MessageMenu;