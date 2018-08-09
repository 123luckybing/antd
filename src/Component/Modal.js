import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal,Button } from 'antd';
class ModalCom extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
    this.show = this.show.bind(this);
    this.ok = this.ok.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  // 点击ok/cancel弹出层消失
  ok() {
    this.setState({
      visible: false,
    });
  }
  cancel() {
    this.setState({
      visible: false,
    });
  }
  // 点击按钮弹出层显示
  show() {
    this.setState({
      visible: true,
    });
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li><br/>
        <p>一：基本用法</p>
        <Button type='primary' onClick={this.show}>click to start</Button>
        <Modal
          title='基本资料' // 弹出层的标题
          visible={this.state.visible} // visible弹出层是否展示， true展示false不展示
          onOk={this.ok}
          onCancel={this.cancel}
        >
          <div>姓名:周芳冰</div>
          <div>年龄:21</div>
          <div>毕业院校:东北农业大学</div>
          <div>职业:前端工程师</div>
          {/* 里面的内容是弹出层的内容 */}
        </Modal>
        <p>二：点击确定后异步关闭对话框，例如提交表单</p>
      </div>
    );
  }
}
export default ModalCom;