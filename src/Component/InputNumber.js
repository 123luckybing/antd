import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { InputNumber, Button } from 'antd';
class Home extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      disabled: true,
    }
  }
  toggle() {
    this.setState({
      disabled: false,
    });
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
        <p>(四):禁用</p>
        <InputNumber min={1} max={10} disabled={this.state.disabled} defaultValue={1}/><br/><br/>
        <Button type='primary' onClick={this.toggle}>toggle</Button>
        <p>(五)格式化数字</p>
        <InputNumber
          defaultValue={1000}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
        /><br/>
        <InputNumber
          defaultValue={100}
          min={0}
          max={100}
          formatter={value => `${value}%`}
          parser={value => value.replace('%', '')}
        />
      </div>
    );
  }
}
export default Home;