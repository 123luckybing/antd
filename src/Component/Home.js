import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
class Home extends Component {
  render() {
    return (
      <div>
        <a 
        target='_blank' 
        href='https://ant.design/docs/react/use-with-create-react-app-cn'
        >参考网站</a>
        <div>项目配置步骤是按在create-react-app中来配置的,按着高级配置一步步来就可以</div>
        <h3>antd学习目录</h3>
        <li><Link to='/Button'>Button点击按钮</Link></li>
        <li><Link to='/Icon'>Icon小图标</Link></li>
        <li><Link to='/Cascader'>Cascader级联选择</Link></li>
        <li><Link to='/Breadcrumb'>Breadcrumb面包屑导航</Link></li>
        <li><Link to='/Rate'>Rate星级评分</Link></li>
        <li><Link to='/Switch'>Switch开关</Link></li>
        <li><Link to='/Spin'>Spin加载中</Link></li>
        <li><Link to='/InputNumber'>InputNumber数字输入框</Link></li>
        <li><Link to='/Divider'>Divider分割线</Link></li>
        <li><Link to='/Progress'>Progress进度条</Link></li>
        <li><Link to='/Popconfirm'>Popconfirm确认框</Link></li>
        <li><Link to='/Message'>Message提示框</Link></li>
        <li><Link to='/TimePicker'>TimePicker时间选择框</Link></li>
        <li><Link to='/Notification'>Notification通知提醒框</Link></li>
        <li><Link to='/Grid'>Grid栅格</Link></li>
        <li><Link to='/Layout'>Layout布局</Link></li>
        <li><Link to='/Affix'>Affix固钉</Link></li>
        <li><Link to='/Dropdown'>Dropdown下拉菜单</Link></li>
        <li><Link to='/Menu'>Menu导航菜单</Link></li>
        <li><Link to='/Pagination'>Pagination分页</Link></li>
        <li><Link to='/Steps'>Steps步骤条</Link></li>
        <li><Link to='/AutoComplete'>AutoComplete自动保存</Link></li>
        <li><Link to='/Checkbox'>Checkbox多选框</Link></li>
        <li><Link to='/Form'>Form表单</Link></li>
        <li><Link to='/Input'>Input输入框</Link></li>
        <li><Link to='/Mention'>Mention提及</Link></li>
        <li><Link to='/Radio'>Radio单选框</Link></li>
        <li><Link to='/Select'>Select选择器</Link></li>
        <li><Link to='/Slider'>Slider划入滚动条</Link></li>
        <li><Link to='/TreeSelect'>TreeSelect树选择器</Link></li>
        <li><Link to='/Transfer'>Transfer穿梭框</Link></li>
        <li><Link to='/Upload'>Upload上传</Link></li>
        <li><Link to='/Avatar'>Avatar头像上传</Link></li>
        <li><Link to='/Badge'>Badge徽标数</Link></li>
        <li><Link to='/Calendar'>Calendar日历</Link></li>
        <li><Link to='/Card'>Card卡片</Link></li>
        <li><Link to='/BackTop'>BackTop回到顶部</Link></li>
      </div>
    );
  }
}
export default Home;