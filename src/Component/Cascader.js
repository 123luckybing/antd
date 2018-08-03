import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Cascader } from 'antd';
class CascaderMenu extends Component {
  constructor() {
    super();
    this.onChangeOne = this.onChangeOne.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChangeOne(value) {
    console.log(value);
  }  
  onChange(value) {
    console.log(value);
  }
  render() {
    // 一级一级数组里面套对象,chilren表示子集
    const optionsOne = [
      {
      value: '浙江', // value: 一级菜单往后台传的内容
      label: '浙江', // label: 前端用户展示的内容
      children: [{
        value: '杭州',// value: 二级菜单往后台传的内容
        label: '杭州',// label: 二级菜单前端用户展示的内容
        children: [{
          value: '西湖',// value: 三级菜单往后台传的内容
          label: 'West Lake',// label: 三级菜单前端用户展示的内容
        }],
      }],
    }, {
      value: '江苏',
      label: '江苏',
      children: [{
        value: '南京',
        label: '南京',
        children: [{
          value: '中华门',
          label: '中华门',
        }],
      }],
    }
  ];  
  const options = [{
    value: '周芳冰',
    label: 'zhoufangbing',
    children:[{
      value:'01',
      label: '01',
      children:[{
        value:'one',
        label: 'one',
      },{
        value:'two',
        label: 'two',
      }]
    },{
      value:'02',
      label: '02',
    },{
      value:'03',
      label: '03',
    }]
  },{
    value: '刘诗诗',
    label: 'liushishi',
  },{
    value: '赵丽颖',
    label: 'zhaoliying',
  }]
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <Cascader 
          options={optionsOne} 
          onChange={this.onChangeOne} 
          placeholder="Please select" // placeholder是提示语
        />
        <Cascader 
          options={options} 
          onChange={this.onChange}
          // 默认值defaultValue={['zhoufangbing', '01', 'one']}
          defaultValue={['zhoufangbing', '01', 'one']} 
        />
      </div>
    );
  }
}
export default CascaderMenu;