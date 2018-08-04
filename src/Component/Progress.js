import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Progress, Button,Tooltip } from 'antd';
const ButtonGroup = Button.Group;

class ProgressCom extends Component {
  constructor() {
    super();
    this.state = {
      percent: 0,
      percentS: 0,
    }
    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
    this.addS = this.addS.bind(this);
    this.delS = this.delS.bind(this);
  }
  // 其实应做一个临界值判断的，但是不判断的话好像也不会报错，所以就不判断了吧
  add() {
    this.setState({
      percent: this.state.percent + 10,
    });
  }
  del() {
    this.setState({
      percent: this.state.percent - 10,
    });
  }
  addS() {
    this.setState({
      percentS: this.state.percentS + 10,
    });
  }
  delS() {
    this.setState({
      percentS: this.state.percentS - 10,
    });
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <h4>一：环形进度条 type='circle', 百分比 percent={30}</h4>
        <Progress type='circle' percent={30}/>
        <h4>二：status(状态): success蓝色、active(对号)、exception(叉)</h4>
        <Progress status='active' percent={60} type='circle'/><br/><br/>
        <Progress status='success' percent={80} type='circle'/><br/><br/>
        <Progress status='exception' percent={30} type='circle'/><br/>
        <h4>三：status(状态): success蓝色、active(对号)、exception(叉)，把type='circle'去掉，就变成条形的了</h4>
        <Progress status='active' percent={60}/><br/><br/>
        <Progress status='success' percent={80}/><br/><br/>
        <Progress status='exception' percent={30}/><br/>
        <h4>四： 将进度条缩小,将其放在狭小的父元素中</h4>
        <div style={{width:'170px'}}>
          <Progress status='active' percent={60} /><br/><br/>
          <Progress status='success' percent={80} /><br/><br/>
          <Progress status='exception' percent={30} /><br/>
        </div>
        <h4>五： 将环形进度条缩小,设置如：width={80}</h4>
        <Progress status='active' percent={60} width={70} type='circle'/><br/><br/>
        <Progress status='success' percent={80} width={80} type='circle'/><br/><br/>
        <Progress status='exception' percent={30} width={40} type='circle'/><br/>
        <h4>六： 动态环形进度条</h4>
        <p>也是通过this.state来控制percent</p>
        <Progress type='circle' percent={this.state.percent}/>
        <ButtonGroup style={{
          marginLeft: '20px',
          marginTop: '20px',
        }}>
          <Button  icon="minus" onClick={this.del}/>
          <Button  icon="plus" onClick={this.add}/>
        </ButtonGroup>
        <h4>七： 动态条形进度条</h4>
        <Progress percent={this.state.percentS}/>
        <ButtonGroup style={{
          marginLeft: '20px',
          marginTop: '20px',
        }}>
          <Button  icon="minus" onClick={this.delS}/>
          <Button  icon="plus" onClick={this.addS}/>
        </ButtonGroup>
        <h4>八： 环形自定义文字format={()=>''},里面传的是箭头函数,还可以传递参数</h4>
        <p>传参</p>
        <Progress percent={30} type='circle' format={ percent => `${percent} Day`}/> <br/>
        <p>不传参</p>
        <Progress percent={30} type='circle' format={ () => 'Undone'}/>
        <h4>九： 仪表盘样式的进度条 type='dashboard'</h4>
        <Progress percent={30} type='circle' format={ () => 'Undone'} type='dashboard'/>
        <h4>十： 分段引入Tooltip</h4>
        <Tooltip>
          <Progress percent={50} successPercent={30} />
          <p>successPercent显示已完成百分比</p>
        </Tooltip>,
      </div>
    );
  }
}
export default ProgressCom;