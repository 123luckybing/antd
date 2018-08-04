import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TimePicker } from 'antd';
class BreadcrumbMenu extends Component {
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        
      </div>
    );
  }
}
export default BreadcrumbMenu;