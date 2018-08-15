import React, { Component } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Button from './Component/Button';
import Icon from './Component/Icon';
import Cascader from './Component/Cascader';
import Breadcrumb from './Component/Breadcrumb';
import Switch from './Component/Switch';
import Rate from './Component/Rate';
import Spin from './Component/Spin';
import InputNumber from './Component/InputNumber';
import Divider from './Component/Divider';
import Progress from './Component/Progress';
import Popconfirm from './Component/Popconfirm';
import Message from './Component/Message';
import TimePicker from './Component/TimePicker';
import Notification from './Component/Notification';
import Grid from './Component/Grid';
import Layout from './Component/Layout';
import Affix from './Component/Affix';
import Dropdown from './Component/Dropdown';
import Menu from './Component/Menu';
import Pagination from './Component/Pagination';
import Steps from './Component/Steps';
import AutoComplete from './Component/AutoComplete';
import Checkbox from './Component/Checkbox';
import Form from './Component/Form';
import Input from './Component/Input';
import Mention from './Component/Mention';
import Radio from './Component/Radio';
import Select from './Component/Select';
import  Slider from './Component/Slider';
import TreeSelect from './Component/TreeSelect';
import Transfer from './Component/Transfer';
import Upload from './Component/Upload';
import Badge from './Component/Badge';
import Avatar from './Component/Avatar';
import Calendar from './Component/Calendar';
import Card from './Component/Card';
import BackTop from './Component/BackTop';
import Anchor from './Component/Anchor';
import Modal from './Component/Modal';
import Drawer from './Component/Drawer';
import Alert from './Component/Alert';
import Tree from './Component/Tree';
import Timeline from './Component/Timeline';
import Tag from './Component/Tag';
import Tabs from './Component/Tabs';
import Table from './Component/Table';
import Tooltip from './Component/Tooltip';
import Popover from './Component/Popover';
import List from './Component/List';
import Collapse from './Component/Collapse';
import Carousel from './Component/Carousel';
import DataPicker from './Component/DataPicker';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/Button' component={Button}/>
            <Route path='/Icon' component={Icon}/>
            <Route path='/Cascader' component={Cascader}/>
            <Route path='/Breadcrumb' component={Breadcrumb}/>
            <Route path='/Rate' component={Rate}/>
            <Route path='/Switch' component={Switch}/>
            <Route path='/Spin' component={Spin}/>
            <Route path='/InputNumber' component={InputNumber}/>
            <Route path='/Divider' component={Divider}/>
            <Route path='/Progress' component={Progress}/>
            <Route path='/Popconfirm' component={Popconfirm}/>
            <Route path='/Message' component={Message}/>
            <Route path='/TimePicker' component={TimePicker}/>
            <Route path='/Notification' component={Notification}/>
            <Route path='/Grid' component={Grid}/>
            <Route path='/Layout' component={Layout}/>
            <Route path='/Affix' component={Affix}/>
            <Route path='/Dropdown' component={Dropdown}/>
            <Route path='/Menu' component={Menu}/>
            <Route path='/Pagination' component={Pagination}/>
            <Route path='/Steps' component={Steps}/>
            <Route path='/AutoComplete' component={AutoComplete}/>
            <Route path='/Checkbox' component={Checkbox}/>
            <Route path='/Avatar' component={Avatar}/>
            <Route path='/Form' component={Form}/>
            <Route path='/Input' component={Input}/>
            <Route path='/Mention' component={Mention}/>
            <Route path='/Radio' component={Radio}/>
            <Route path='/Select' component={Select}/>
            <Route path='/Slider' component={Slider}/>
            <Route path='/TreeSelect' component={TreeSelect}/>
            <Route path='/Transfer' component={Transfer}/>
            <Route path='/Upload' component={Upload}/>
            <Route path='/Badge' component={Badge}/>
            <Route path='/Calendar' component={Calendar}/>
            <Route path='/Card' component={Card}/>
            <Route path='/BackTop' component={BackTop}/>
            <Route path='/Anchor' component={Anchor}/>
            <Route path='/Modal' component={Modal}/>
            <Route path='/Drawer' component={Drawer}/>
            <Route path='/Alert' component={Alert}/>
            <Route path='/Tree' component={Tree}/>
            <Route path='/Timeline' component={Timeline}/>
            <Route path='/Tag' component={Tag}/>
            <Route path='/Tabs' component={Tabs}/>
            <Route path='/Table' component={Table}/>
            <Route path='/Tooltip' component={Tooltip}/>
            <Route path='/Popover' component={Popover}/>
            <Route path='/List' component={List}/>
            <Route path='/Collapse' component={Collapse}/>
            <Route path='/Carousel' component={Carousel}/>
            <Route path='/DataPicker' component={DataPicker}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
