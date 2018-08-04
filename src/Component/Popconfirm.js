import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Popconfirm, message,Button } from 'antd';
class PopconfirmCom extends Component {
  constructor() {
    super();
    this.confirm = this.confirm.bind(this);
    this.cancel = this.cancel.bind(this);
    this.confirmS = this.confirmS.bind(this);
    this.cancelS = this.cancelS.bind(this);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.state = {
      visible: false,
    }
  }
  handleVisibleChange () {
    this.setState({
      visible: !this.state.visible,
    });
  }
  confirm() {
    message.success('删除成功');
  }
  cancel() {
    message.error('已取消');
  }
  confirmS() {
    message.success('删除成功');
  }
  cancelS() {
    message.error('已取消');
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回首页</Link></li><br/>
        <p>
          一：最基本的方式～<br/>
          title字段：点击后向用户展示的文字<br/>
          onConfirm：当用户点击确认时调用的函数<br/>
          onCancel：当用户点击取消时调用的函数<br/>
          okText:确认按钮的文本<br/>
          cancelText:取消按钮的文本<br/>
          message.error();点击取消时弹出的框内容(样式红色)<br/>
          message.success();点击确认时弹出的框的内容(样式绿色)<br/>
          message.info();(样式蓝色)<br/>
          里面套一个a标签，点击按钮<br/>
        </p>
        <Popconfirm 
          title='Are you sure to Delete them?'
          okText='确认删除'
          cancelText='取消'
          onConfirm={this.confirm}
          onCancel={this.cancel}
        >
          <a href='#'>Delete</a>
        </Popconfirm>
        <p>二：通过placement来设置弹窗弹出的方向</p>
        <Popconfirm 
          title='Are you sure to Delete them?'
          okText='确认删除'
          cancelText='取消'
          onConfirm={this.confirmS}
          onCancel={this.cancelS}
          placement='left' // 左侧弹出
          // placement可以去的值很多，具体看文档吧
        >
          <Button>DeleteLeft</Button>
        </Popconfirm>
      </div>
    );
  }
}
export default PopconfirmCom;