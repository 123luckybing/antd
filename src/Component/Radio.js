import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Radio, Button, Modal,message } from 'antd';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
class RadioCom extends Component {
  constructor() {
    super();
    this.state = {
      value: 'A', // 默认value是A的亮
      disabled: false,
      sexValue:'男',
      hobbyValue:'足球',
      goodValue:'麻将',
      show: false,
      valueButton: '杭州',
    }
    this.change = this.change.bind(this);
    this.toggle = this.toggle.bind(this);
    this.sexChange = this.sexChange.bind(this);
    this.hobbyChange = this.hobbyChange.bind(this);
    this.goodChange = this.goodChange.bind(this);
    this.del = this.del.bind(this);
    this.push = this.push.bind(this);
    this.buttonValue = this.buttonValue.bind(this);
  }
  buttonValue(e) {
    this.setState({
      valueButton: e.target.value,
    });
    message.info(e.target.value);
  }
  push() {
    this.setState({
      show: true,
    });
  }
  del() {
    this.setState({
      show: false,
    });
  }
  sexChange(e) {
    this.setState({
      sexValue: e.target.value,
    });
  }
  hobbyChange(e) {
    this.setState({
      hobbyValue: e.target.value,
    });
  }
  goodChange(e) {
    this.setState({
      goodValue: e.target.value,
    });
  }
  toggle() {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
  change(e) {
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    const {sexValue, hobbyValue, goodValue, show,valueButton} = this.state;
    const sex = [{
      value:'男',
      label:'男'
    },{
      value:'女',
      label:'女'
    }];
    const hobby = [{
      value:'足球',
      label:'足球'
    },{
      value:'台球',
      label:'台球'
    },{
      value:'网球',
      label:'网球'
    }];
    const good = [{
      value:'麻将',
      label:'麻将',
    },{
      value:'打代码',
      label:'打代码'
    },{
      value:'跳舞',
      label:'跳舞'
    }];
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li><br/>
        <h3>一：基本用法</h3>
        <Radio>Radio</Radio>
        <h3>二：单选按钮(横向),引入const RadioGroup = Radio.Group ,这句话写在import下面,有RadioGroup之后就相当于分组了</h3>
        <p>用RadioGruop包起来</p>
        <div>您的选择是：{this.state.value}</div>
        <RadioGroup 
          value={this.state.value} // 显示的值
          onChange={this.change}
        >
          {/* value向后台传的数据 */}
          <Radio value={'A'}>A</Radio>
          <Radio value={'B'}>B</Radio>
          <Radio value={'C'}>C</Radio>
          <Radio value={'D'}>D</Radio>
        </RadioGroup>
        <h3>三：单选按钮(竖向)，设置每个Radio的style为display:block</h3>
        <RadioGroup>
          <Radio 
            style= {{
              display: 'block',
              height: '30px',
              lineHeight: '30px'
            }} 
            value={'A'}
          >A</Radio>
          <Radio 
            style= {{
              display: 'block',
              height: '30px',
              lineHeight: '30px'
            }} 
            value={'B'}
          >B</Radio><Radio 
            style= {{
              display: 'block',
              height: '30px',
              lineHeight: '30px'
          }} 
          value={'C'}
          >C</Radio>
          <Radio 
            style= {{
              display: 'block',
              height: '30px',
              lineHeight: '30px'
            }} 
            value={'D'}
          >D</Radio>
        </RadioGroup>
        <h3>四：disabled:为true不可用为false可用 defaultChecked为true勾选,为false不勾选</h3>
        <Radio defaultChecked={false} disabled={this.state.disabled}>disable</Radio><br/><br/>
        <Button type='primary' onClick={this.toggle}>toggle</Button>
        <h3>五：RadioGroup组合按钮 增加options</h3>
          性别：<RadioGroup options={sex} value={sexValue} onChange={this.sexChange}/><br/>
          爱好：<RadioGroup options={hobby} value={hobbyValue} onChange={this.hobbyChange}/><br/>
          特长：<RadioGroup options={good} value={goodValue} onChange={this.goodChange}/><br/><br/>
          <Modal
            title='您的信息将提交如下'
            visible={show}
            onOk={this.del}
            onCancel={this.del}
          >
            <p>性别---{sexValue}</p>
            <p>爱好---{hobbyValue}</p>
            <p>特长---{goodValue}</p>
          </Modal>
          <Button type='primary' onClick={this.push}>提交</Button>
          <h3>六：按钮样式的单选组合，引用RadioButton = Radio.Button</h3>
          <h3>添加disabled不可点击：在RadioButton上添加</h3>
          <RadioGroup value={valueButton} onChange={this.buttonValue}>
            <RadioButton value='杭州' disabled>杭州</RadioButton>
            <RadioButton value='哈尔滨'>哈尔滨</RadioButton>
            <RadioButton value='武汉'>武汉</RadioButton>
          </RadioGroup>
          <h3>添加disabled不可点击：在RadioGroup上添加</h3>
          <RadioGroup value={valueButton} disabled>
            <RadioButton value='杭州'>杭州</RadioButton>
            <RadioButton value='哈尔滨'>哈尔滨</RadioButton>
            <RadioButton value='武汉'>武汉</RadioButton>
          </RadioGroup>
          <h3>实色填底Radio.Button~Radio.Group buttonStyle="solid"</h3>
          <Radio.Group buttonStyle="solid">
            <Radio.Button value='杭州'>杭州</Radio.Button>
            <Radio.Button value='哈尔滨'>哈尔滨</Radio.Button>
            <Radio.Button value='武汉'>武汉</Radio.Button>
          </Radio.Group>
          <h3>七：大小size='large' sixe='small'</h3>
          <Radio.Group buttonStyle="solid" size='large'>
            <Radio.Button value='杭州'>杭州</Radio.Button>
            <Radio.Button value='哈尔滨'>哈尔滨</Radio.Button>
            <Radio.Button value='武汉'>武汉</Radio.Button>
          </Radio.Group><br/><br/>
          <Radio.Group buttonStyle="solid">
            <Radio.Button value='杭州'>杭州</Radio.Button>
            <Radio.Button value='哈尔滨'>哈尔滨</Radio.Button>
            <Radio.Button value='武汉'>武汉</Radio.Button>
          </Radio.Group><br/><br/>
          <Radio.Group buttonStyle="solid" size='small'>
            <Radio.Button value='杭州'>杭州</Radio.Button>
            <Radio.Button value='哈尔滨'>哈尔滨</Radio.Button>
            <Radio.Button value='武汉'>武汉</Radio.Button>
          </Radio.Group><br/><br/>
      </div>
    );
  }
}
export default RadioCom;