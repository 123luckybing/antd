import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
class ListCom extends Component {
  render() {
    const data = [
      '中国',
      '日本',
      '韩国',
      '澳大利亚',
    ];
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>一：基本用法</p>
        <List
          size='small' // size大小：small／large/不写size默认大小
          header={<div>基本信息如下</div>} // 头部
          footer={<div>欢迎了解</div>} // 脚部
          bordered // 列表有边框
          dataSource={data} // 列表内容
          renderItem={item => (<List.Item>{item}</List.Item>)} // 数据渲染
        />
      </div>
    );
  }
}
export default ListCom;