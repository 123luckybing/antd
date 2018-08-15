import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
class MenuCom extends Component {
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        
      </div>
    );
  }
}
export default MenuCom;