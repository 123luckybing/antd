import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge,Icon,Button,Switch } from 'antd';
class BadgeCom extends Component {
  constructor() {
    super();
    this.state = {
      count: 4,
      dot: true
    }
    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
    this.change = this.change.bind(this);
  }
  change(value) {
    this.setState({
      dot: value,
    });
  }
  add() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  del() {
    if(this.state.count < 0) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
          <div style={{marginTop:'20px'}}>
            <p>一:基本用法 count表示消息数量</p>
            <Badge count={5}>
              <div style={{
                width: '50px',
                height:'50px',
                background:'#ccc',
                borderRadius:'10px'
              }} /> 
              {/* a链接，点击之后跳到别的地方去 */}
            </Badge>
            <p>二:消息为0时是否显示 默认不显示，showZero可以让它显示</p>
            <Badge count={0} showZero>
              <div style={{
                width: '50px',
                height:'50px',
                background:'#ccc',
                borderRadius:'10px'
              }} /> 
            </Badge>
            <p>三:不包裹任何元素独立使用，可以自定义样式</p>
            <Badge count={2}/><br/>
            <Badge count={110} style={{background:'green'}}/>
            <p>四：overflowCount~当大于n值,显示为n+,不写默认为99</p>
            <p>超过10，变成10+</p>
            <Badge count={20} overflowCount={10}>
              <div style={{
                width: '50px',
                height:'50px',
                background:'#ccc',
                borderRadius:'10px'
                }}/> 
            </Badge><br/>
            <div style={{marginTop:'20px'}}>
              <Badge count={10000} overflowCount={999}>
                <div style={{
                  width: '50px',
                  height:'50px',
                  background:'#ccc',
                  borderRadius:'10px',
                  }}/> 
              </Badge>
            </div>
            <p>五：有小红点,没有具体数字 dot</p>
            <Badge dot>
              <Icon type="phone" />
            </Badge><br/>
            <Badge dot>
              <span>哈哈哈哈哈哈</span>
            </Badge>
            <p>六：按钮控制count加减</p>
            <Badge count={this.state.count} overflowCount={10}>
            <div style={{
              width: '50px',
              height:'50px',
              background:'#ccc',
              borderRadius:'10px'
              }}
            /> 
            </Badge>
            <div style={{marginTop:'10px'}}>
              <Button onClick={this.del}>
                <Icon type="minus" />
              </Button>
              <Button onClick={this.add}>
                <Icon type="plus" />
              </Button>
            </div>
          </div>
          <p>七：红点可控 dot=true显示，dot为false不显示</p>
          <Badge dot={this.state.dot}>
            <Icon type="smile-o" />
          </Badge><br/>
          <Switch onChange={this.change}/>
          <p>八：状态小圆点status text</p>
          <Badge status="success" />
          <Badge status="error" />
          <Badge status="default" />
          <Badge status="processing" />
          <Badge status="warning" />
          <br />
          <Badge status="success" text="Success" />
          <br />
          <Badge status="error" text="Error" />
          <br />
          <Badge status="default" text="Default" />
          <br />
          <Badge status="processing" text="Processing" />
          <br />
          <Badge status="warning" text="Warning" />
      </div>
    );
  }
}
export default BadgeCom;