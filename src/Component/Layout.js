import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
const { Header,Content,Footer,Sider} = Layout;
class BreadcrumbMenu extends Component {
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>一：基本用法</p>
        <Layout>
          <Header style={{color:'white'}}>头部</Header>
          <Content>区内容去</Content>
          <Footer>脚部</Footer>
        </Layout>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default BreadcrumbMenu;