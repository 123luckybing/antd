import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { InputNumber } from 'antd';
class Home extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    console.log(value);
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>(一):基本用法</p>
        <InputNumber 
         min={1} // 最小值
         max={10} // 最大值
         defaultValue={3} // 默认值
         onChange={this.onChange}
        />
        <p>(二):大小通过size来设置</p>
        <InputNumber size='small'/><br/><br/>
        <InputNumber /><br/><br/>
        <InputNumber size='large'/>
        <p>(三):设置小数:value 的精度由 step 的小数位数决定。每次增长下降0.1</p>
        <InputNumber step={0.1} min={1} max={2} defaultValue={1}/>
      </div>
    );
  }
}
export default Home;