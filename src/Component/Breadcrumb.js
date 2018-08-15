import React, { Component } from 'react';
import { Link,BrowserRouter as Router, Route } from 'react-router-dom';
import { Breadcrumb,Icon } from 'antd';
import HomeBreadcrumb from './HomeBreadcrumb';
import BreadApp from './BreadApp';
class BreadcrumbMenu extends Component {
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>一：基本用法 Breadcrumb里面套Breadcrumb.Item</p>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href='http://baidu.com'>Person</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>SEM</Breadcrumb.Item>
          <Breadcrumb.Item>happy</Breadcrumb.Item>
        </Breadcrumb>
        <p>二：带Icon图标的导航 里面有Icon和span</p>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Icon type="heart-o" />
            <span>Heart-o</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Icon type="picture" />
            <span>Picture</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Icon type="cloud-o" />
            <span>cloud-o</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Icon type="car" />
            <span>car</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <p>三: 结合路由使用</p>
        <Breadcrumb>
          <Router>
            <div>
          <Breadcrumb.Item>
            <Link to='/HomeList'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to='/app'>Application List</Link>
          </Breadcrumb.Item>
              <Route path='/HomeList' component= {HomeBreadcrumb}/>
              <Route path='/app' component={BreadApp}/>
              </div>
          </Router>
        </Breadcrumb>
        <p>四:分隔符separator</p>
        <Breadcrumb separator='>'> 
        {/* separator分隔符 */}
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Qiqi</Breadcrumb.Item>
          <Breadcrumb.Item>xilong</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
export default BreadcrumbMenu;