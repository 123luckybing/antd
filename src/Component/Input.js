import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Select,Icon } from 'antd';
const Option = Select.Option;
const Search = Input.Search;
const { TextArea } = Input;
class InputCom extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
    this.httpChange = this.httpChange.bind(this);
    this.picChange = this.picChange.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      http: '',
      pic:'',
    }
  }
  search(value) {
    console.log(value);
  }
  httpChange(value) {
    this.setState({
      http: value,
    });
  }
  picChange(value) {
    this.setState({
      pic: value,
    });
  }
  change(e) {
    const inputValue = e.target.value;
    const {http,pic}= this.state;
    console.log( http + inputValue + pic);
  }
  render() {
    const Before =(
      <Select style={{width:'100px'}} defaultValue='http://' onChange={this.httpChange}>
        <Option value='http://'>http://</Option>
        <Option value='https://'>https://</Option>
      </Select>
    );
    const After =(
      <Select style={{width:'100px'}} defaultValue='.com' onChange={this.picChange}>
        <Option value='.com'>.com</Option>
        <Option value='.jp'>.jp</Option>
        <Option value='.cn'>.cn</Option>
        <Option value='.org'>.org</Option>
      </Select> 
    );
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>一：基本用法</p>
        <Input placeholder='Basic User'/>
        <p>二:尺寸大小 size='large' size='small'</p>
        <Input placeholder='Basic User' size='large'/>
        <Input placeholder='Basic User'/>
        <Input placeholder='Basic User' size='small'/>
        <p>三：前后配置标签</p>
        <Input 
          addonBefore='http://'  // 前置
          addonAfter='.com' // 后置
          placeholder='baidu'
        />
          <Input
            addonBefore={Before}
            addonAfter={After}
            placeholder='XX'
            onBlur={this.change}
          />
        <p>Icon</p>
        <Input 
          placeholder='请输入密码'
          addonAfter={<Icon type="key" />}
        />
        <p>四：带有搜索按钮的输入框</p>
        <Search
          placeholder='请输入搜索内容'
          style={{width:'200px'}}
          onSearch={this.search} // 点击搜索按钮发生的事件
        /><br/>
        <Search
          placeholder='请输入搜索内容'
          style={{width:'200px'}}
          onSearch={this.search} // 点击搜索按钮发生的事件
          enterButton // 搜索的样式
        /><br/>
          <Search
          placeholder='请输入搜索内容'
          style={{width:'200px'}}
          onSearch={this.search} // 点击搜索按钮发生的事件
          enterButton='Search' // 搜索的文本
        /><br/>
        <p>五：在输入框上添加前缀或后缀图标。</p>
        <Input
          placeholder='请输入内容'
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} // 前面的小人图标
        />
        <p>六：textarea文本框(用于多行输入)</p>
        <TextArea row={4}/>
        <p>七：适应文本高度的文本域autosize</p>
        <TextArea placeholder='Autosize height based on content lines' autosize/>
        <TextArea 
          placeholder='Autosize height with minimum and maximum number of lines' 
          autosize={{ minRows:2, maxRows:6 }} // 自动高度最大最小行数
        />
      </div>
    );
  }
}
export default InputCom;