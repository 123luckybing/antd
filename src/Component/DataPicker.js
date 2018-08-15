import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';
const { MonthPicker,RangePicker,WeekPicker } = DatePicker;
class DataPickerCom extends Component {
  constructor() {
    super();
    this.date = this.date.bind(this);
    this.month = this.month.bind(this);
    this.range = this.range.bind(this);
    this.week = this.week.bind(this);
  }
  week(value) {
    console.log(value);
  }
  range(value) {
    console.log(value); // 输出的时两个范围的数组
  }
  month(value) {
    console.log(value._d);
  }
  date(value) {
    console.log(value._d); // 在value的_d字段下
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>一：基本用法 大小size='large' size='small'</p>
        <DatePicker onChange={this.date}/>
        <p>选择月份 MonthPicker</p>
        <MonthPicker onChange={this.month} placeholder='Select Month' size='large'/>
        <p>日期范围RangePicker</p>
        <RangePicker onChange={this.range}/>
        <p>周范围WeekPicker</p>
        <WeekPicker onChange={this.week} size='small'/>
        <p>二：disabled不可用状态</p>
        <DatePicker onChange={this.date} disabled/>
      </div>
    );
  }
}
export default DataPickerCom;