import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar,Button } from 'antd';
class AvatarCom extends Component {
  constructor() {
    super();
    this.state = {
      name: '~',
    }
    this.pushName = this.pushName.bind(this);
  }
  pushName() {
    // console.log(this.refs.name.value);
    this.setState({
      name: this.refs.name.value,
    });
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>用来代表用户或事物，支持图片、图标或字符展示。</p>
        <h3>一:头像有三种尺寸（size='small'），两种形状可选默认圆型(shape='square'方形)。icon='user' </h3>
        <Avatar size={64} icon="user" /><br/><br/>
        <Avatar size="large" icon="user" /><br/><br/>
        <Avatar icon="user" /><br/><br/>
        <Avatar size="small" icon="user" /><br/><br/>
        <Avatar shape="square" size={64} icon="user" /><br/><br/>
      <Avatar shape="square" size="large" icon="user" /><br/><br/>
      <Avatar shape="square" icon="user" /><br/><br/>
      <Avatar shape="square" size="small" icon="user" /><br/><br/>
      <h3>二：支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。</h3>
      基本: <Avatar icon="user" /><br/><br/>
      字符: <Avatar>ZZ</Avatar><br/><br/>
      图片: <Avatar src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=371517014,89404046&fm=27&gp=0.jpg' /><br/><br/>
      背景颜色/文字颜色: <Avatar 
        style={{
          background: 'Black',
          color:'white',
      }}>ZZ</Avatar><br/><br/>
      <h3>模仿钉钉利用名字做头像</h3>
      <Avatar 
        style={{
          background: '#7265e6',
          color:'white',
        }}
      >{this.state.name}</Avatar><br/><br/>
      <input type="text" ref='name'/>
      <Button type='dashed' onClick={this.pushName}>确定</Button>
      </div>
    );
  }
}
export default AvatarCom;