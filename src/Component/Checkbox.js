import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Button, Modal } from 'antd';
const CheckboxGroup = Checkbox.Group;
class CheckboxBox extends Component {
  constructor() {
    super();
    this.state = {
      checkValue: 'Checked',
      disabledValue: 'Enabled',
      check:'Uncheck',
      disable:'Disable',
      checked: true,
      Isdisable: false,
      visible: false,
      schoolList: [],
      hobbyList:[],
      checkList:[],
      list: [{
        value:'周芳冰',
        label:'周芳冰'
      },{
        value:'刘诗诗',
        label:'刘诗诗'
      },{
        value:'许魏洲',
        label:'许魏洲'
      },{
        value:'黄静怡',
        label:'黄静怡',
      }],
      checkAllAll:'',
    }
    this.change = this.change.bind(this);
    this.Ischeck = this.Ischeck.bind(this);
    this.able = this.able.bind(this);
    this.hobbyResult = this.hobbyResult.bind(this);
    this.schoolResult = this.schoolResult.bind(this);
    this.modalShow = this.modalShow.bind(this);
    this.disappear = this.disappear.bind(this);
  }
  disappear() {
    this.setState({
      visible: false,
    });
  }
  modalShow() {
    this.setState({
      visible: true,
    });
  }
  schoolResult(value) {
    this.setState({
      schoolList: value,
    });
    // console.log(value);  多选框的结果，直接value不用e.target
  }
  hobbyResult(value) {
    this.setState({
      hobbyList: value,
    });
    // console.log(value);  多选框的结果，直接value不用e.target
  }
  able() {
    this.setState({
      disable: this.state.disable === 'Disable'? 'Enable' : 'Disable',
      disabledValue: this.state.disabledValue === 'Enabled'? 'Disabled' :'Enabled',
      Isdisable: this.state.Isdisable ? false : true,
    });
  }
  Ischeck() {
    this.setState({
      checkValue: this.state.checkValue === 'Checked' ? 'Unchecked' : 'Checked',
      check:this.state.check === 'Uncheck' ? 'Check' : 'Uncheck',
      checked: this.state.checked ? false : true,
    });
  }
  change(e) {
    console.log(e.target.checked); // e.target.checked 选中为true 未选中为false
  }
  render() {
    const hobby = [{
      value:'周芳冰',
      label:'周芳冰'
    },{
      value:'刘诗诗',
      label:'刘诗诗',
    },{
      value:'许魏洲',
      label:'许魏洲',
    },{
      value:'黄静怡',
      label:'黄静怡',
    }];
    const school = [{
      value:'东北农业大学',
      label:'东北农业大学',
    },{
      value:'黑龙江大学',
      label:'黑龙江大学',
    },{
      value:'东北林业大学',
      label:'东北林业大学',
    },{
      value:'哈尔滨理工大学',
      label:'哈尔滨理工大学',
    }];
      const { checkValue, disabledValue,check,disable,checked,Isdisable,visible, schoolList,hobbyList} = this.state;
      const schoolItem = schoolList.map((elem,index) => {
        return (
        <li key={index} style={{listStyle:'none'}}>{elem}</li>
        )
      });
      const hobbyItem = hobbyList.map((elem,index) => {
        return(
          <li key={index} style={{listStyle:'none'}}>{elem}</li>
        )
      });
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li><br/>
        <h3>一：基本用法</h3>
        <Checkbox onChange={this.change}>apple</Checkbox>
        <h3>二：不可用添加disabled</h3>
        <Checkbox disabled>apple</Checkbox>
        <h3>三：defaultChecked为true默认勾选，为false默认不勾选</h3>
        <Checkbox defaultChecked={true}>apple</Checkbox><br/>
        <Checkbox defaultChecked={false}>apple</Checkbox>
        <h3>四：联动的checkbox: checked为true勾选～为false不勾选 disabled为true不可用为false可用</h3>
        <Checkbox checked={checked} disabled={Isdisable}>{checkValue}--{disabledValue}</Checkbox><br/><br/>
        <Button type='primary' onClick={this.Ischeck}>{check}</Button>&nbsp;
        <Button type='primary' onClick={this.able}>{disable}</Button>
        <h3>五：Checkbox数组 const CheckboxGroup = Checkbox.Group; options</h3>
        favorite Star:<br/><CheckboxGroup options={hobby} onChange={this.hobbyResult}></CheckboxGroup><br/>
        favorite school:<CheckboxGroup options={school} onChange={this.schoolResult}></CheckboxGroup>
        <Modal
          title='提交结果'
          visible={visible}
          onOk={this.disappear}
          onCancel={this.disappear}
        >
          <h3>您所选的star是：</h3>
          <p>{hobbyItem}</p>
          <h3>您所选的学校是：</h3>
          <p>{schoolItem}</p>
        </Modal>
        <br/><br/>
        <Button type='primary' onClick={this.modalShow}>提交</Button>
      </div>
    );
  }
}
export default CheckboxBox;