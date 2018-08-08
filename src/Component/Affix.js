import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Affix,Button } from 'antd';
class AffixCom extends Component {
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>一：基本用法</p>
        <Affix>
          <Button type='primary'>Affix Top</Button>
        </Affix>
        <br/>
        <Affix>
          <Button type='primary'>Affix Bottom</Button>
        </Affix>
      </div>
    );
  }
}
export default AffixCom;