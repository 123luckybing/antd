import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
class TagCom extends Component {
  constructor() {
    super();
    this.close = this.close.bind(this);
    this.state = {
      tag: ['Lucy','Lily','Jack','Tom'],
    }
  }
  close(e) {
    e.preventDefault(); // 阻止浏览器默认行为
  }
  render() {
    const { tag } = this.state;
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>一：基本用法</p>
        <Tag>确认</Tag>
        <a href="http://baidu.com">
          <Tag>点击跳转百度</Tag>
        </a>
        <p>加closable点击X消失</p>
        <Tag closable>小仙女呀</Tag> 
        <p>点击阻止消失onClose事件</p>
        <Tag closable onClose={this.close}>小仙女</Tag>
        <p>二：Tag加背景颜色 color='magenta'</p>
        <Tag color='magenta'>magenta</Tag>
        <Tag color='orange'>orange</Tag>
        <Tag color='blue'>blue</Tag>
        <Tag color='gold'>gold</Tag>
        <Tag color='lime'>lime</Tag>
        <p>三：动态添加和删除</p>
        {
          tag.map((elem,index) => {
            return (
            <Tag key={index} closable>{elem}</Tag>
            )
          })
        }
      </div>
    );
  }
}
export default TagCom;