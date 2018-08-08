import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Select,message } from 'antd';
const Option = Select.Option;
class SelecCom extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
  }
  change(value) {
    message.info(value);
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>一：基本用法Select包在Option外面 const Option = Select.Option</p>
        <p>禁止点击disabled</p>
        <Select 
          style={{width:'100px'}} // 写个width
          defaultValue='Jack' // 默认值
          onChange={this.change}
        >
          <Option value='Jack'>Jack</Option> 
          {/* value是往后台传的值 */}
          <Option value='Lucy'>Lucy</Option>
          <Option value='Lily' disabled>Lily</Option>
          <Option value='Happy'>Happy</Option>
        </Select>
        <p>二：整体不允许点击,在Select上加disabled</p>
        <Select style={{width:'100px'}} defaultValue='Lucy' disabled>
          <Option value='Lucy'>Lucy</Option>
          <Option value='Lily'>Lily</Option>
          <Option value='Happy'>Happy</Option>
        </Select>
        <p>三：展开可以搜索</p>
        <Select
          style={{width: '100px'}}
          defaultValue='Tom'
        >
          <Option value='Tom'>Tom</Option>
          <Option value='Jack'>Jack</Option>
          <Option value='Lucy'>Lucy</Option>
          <Option value='Hello'>Hello</Option>
        </Select>
      </div>
    );
  }
}
export default SelecCom;