import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Spin,Icon,Alert,Switch } from 'antd';
class BreadcrumbMenu extends Component {
  constructor() {
    super();
    this.changeLoading = this.changeLoading.bind(this);
    this.state = {
      loading: false,
    }
  }
  changeLoading(value) {
    this.setState({
      loading: value,
    });
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <h3>(一)最简单的加载</h3>
        <Spin />
        <h3>(二)尺寸控制:通过size字段来控制 large，small</h3>
        <Spin size='small'/><br/>
        <Spin /><br/>
        <Spin size='large'/><br/>
        <h3>(三)放入一个容器中</h3>
        <div 
          className="wrapper"
          style={{
            width: '300px',
            height: '100px',
            background: '#ccc',
            textAlign: 'center',
            lineHeight: '100px'
          }}
        >
          <Spin />
        </div>
        <h3>(四)自定义使用自定义指示符Icon  indicator属性</h3>
        <Spin indicator={<Icon type="loading" />}/>
        <h4>(五)：卡片加载中 Spin里面套Alert</h4>
        <Spin 
          spinning={this.state.loading} // spining为true的时候出现,spining为false时消失
        >
          <Alert
            message='Alert message title'
            description='Alert message content'
          />
        </Spin>
        Loading State: <Switch onChange={this.changeLoading}/>
        <h4>(六)：自定义文案tip</h4>
        <Spin tip='loading'/>
      </div>
    );
  }
}
export default BreadcrumbMenu;