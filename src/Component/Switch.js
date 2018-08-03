import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Switch, Icon} from 'antd';
class Home extends Component {
  constructor(){
    super();
    this.changeOne = this.changeOne.bind(this);
  }
  // checked有两种状态： false／true
  changeOne(checked) {
    console.log('目前的状态是：' + checked);
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <h3>switch开关</h3>
        <h4>(一):最简单的用法:输出结果</h4>
        <Switch defaultChecked onChange={this.changeOne}/>
        <h4>(二):switch不可用 默认位开</h4>
        <Switch disabled={true} defaultChecked/>
        <h4>(三):switch不可用 默认位关</h4>
        <Switch disabled={true} />
        <h4>(四):switch型号size:small小型的</h4>
        <Switch defaultChecked size='small'/><br/>
        <Switch defaultChecked />
        <h4>(五):带有文字和图标,通过checkedChildren（unCheckedChildren）字段</h4>
        <Switch defaultChecked 
        checkedChildren="开"
        unCheckedChildren="关"
        />
        <br/>
        <Switch defaultChecked 
        checkedChildren="1"
        unCheckedChildren="0"
        />
        <br/>
        <p style={{
          color: 'red'
        }}>变成小图标</p>
        <Switch defaultChecked 
        checkedChildren={<Icon type="check" />}
        unCheckedChildren={<Icon type="close" />}
        />
        <h4>(六)标识开关操作仍在执行中：加loading字段</h4>
        <Switch loading defaultChecked/><br/>
        <Switch loading />
      </div>
    );
  }
}
export default Home;