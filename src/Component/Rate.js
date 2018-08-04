import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Rate,Icon } from 'antd';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      value: 3,
    }
    this.startChange = this.startChange.bind(this);
  }
  startChange(value) {
    this.setState({
      value,
    });
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>(一):基本用法</p>
        <Rate />
        <p>(二):支持选中半颗星 添加属性 allowHalf
               默认点亮几颗星defalutValue ={2.5}
        </p>
        <Rate allowHalf defaultValue={2.5}/>
        <p>(三):给评分加上文案展示</p>
        <div>
          <Rate 
            value={this.state.value} 
            onChange={this.startChange} // 点击的时候触发
          /> 
          {/* value是点亮几颗星的体现 */}
          {this.state.value} Stars
        </div>
        <p>(四): 只读(无鼠标交互) 添加disabled</p>
        <Rate disabled allowHalf defaultValue={2.5}/> 
        <p>(五): 将星星换成其他字符 character='' style中fontSize控制大小</p>
        <Rate character='A' defaultValue={2} style={{fontSize:46}}/><br/>
        <Rate character='BING' allowHalf defaultValue={2.5} />
        <p>也可以引入Icon</p>
        <Rate character={ <Icon type="aliwangwang-o" />} defaultValue={4.5} allowHalf/>
        <p>(六): 再次点击清除 allowClear={true}/allowClear={false} 默认true</p>
        <div>清除</div>
        <Rate defaultValue={2.5} allowClear={true}/> 
        <div>不清除</div>
        <Rate defaultValue={2.5} allowClear={false}/> 
      </div>
    );
  }
}
export default Home;