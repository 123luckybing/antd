import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button,Icon } from 'antd';
const ButtonGroup = Button.Group;
class Home extends Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
    this.load = this.load.bind(this);
    this.state = {
      loading: false,
    }
  }
  load() {
    this.setState({
      loading: true,
    });
  }
  click(e) {
    console.log(e.target.dataset.index);
  }
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <span>button有四种类型：主按钮、次按钮、虚线按钮、危险按钮，通过type值来控制</span>
        <p>(一) 主按钮：type='primary'</p>
        <Button type="primary" data-index={'确定'} onClick={this.click}>确认</Button>
        <br/>
        <p>(二) 次按钮，不写type</p>
        <Button>取消</Button>
        <br/>
        <p>(三) 虚线按钮，type='dashed'</p>
        <Button type="dashed">登录</Button>
        <br/>
        <p>(四) 危险按钮，type='danger'</p>
        <Button type="danger">下线</Button>
        <br/>
        <p>(五)：图标按钮</p>
        <Button 
          type='primary' //背景蓝色
          icon='search'  // icon type='icon'
          shape='circle' // 圆形的
        />
        <br/><br/>
        <Button
          type='dashed'
          icon='search'
          shape='circle'
        />
        <p>图标加文字</p>
        <Button
          type='primary'
          icon='search'
        >
          Search
        </Button>
        <Button
          icon='search'
        >
          Search
        </Button>
       <p>(六)：按钮尺寸 size='small' size='large'</p>
        <Button size='small'>
            Forward <Icon type="right" />
        </Button>
        <Button>
            Forward <Icon type="right" />
        </Button>
        <Button size='large'>
            Forward <Icon type="right" />
        </Button>
        <p>七：按钮不可点击disabled</p>
        <Button disabled>Search(disabled)</Button>
        <p>八： loading状态,添加loading属性true/false默认true size='small'</p>
        <Button type='primary' loading>
          Loading
        </Button><br/><br/>
        <Button type='primary' loading size='small'>
          Loading
        </Button><br/><br/>
        <Button 
          shape='circle'
          loading
        /><br/><br/>
        <Button 
          type='primary'
          shape='circle'
          loading
        /><br/><br/>
         <Button 
          loading={this.state.loading} 
          onClick={this.load}
          icon="poweroff" // icon
        >
            Click Me
         </Button><br/><br/>
         <Button 
          loading={this.state.loading} 
          onClick={this.load}
        >
            Click Me
         </Button>
         <p>九：幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。</p>
         <div style={{background:'red',height:'50px'}}>
          <Button type='dashed' ghost>
            Click me
          </Button>
         </div>
         <p>十：按钮组合</p>
         <ButtonGroup>
           <Button>OK</Button>
           <Button>Cancel</Button>
         </ButtonGroup>
         <p>disabled不可点击</p>
         <ButtonGroup>
           <Button disabled>small</Button>
           <Button disabled>large</Button>
           <Button disabled>medium</Button>
         </ButtonGroup>
         <p>带有Icon</p>
         <ButtonGroup>
           <Button icon='left'>Go back</Button>
           <Button>Go forward<Icon type='right'/></Button>
         </ButtonGroup><br/><br/>
         <ButtonGroup>
          <Button type="primary" icon="cloud" />
          <Button type="primary" icon="cloud-download" />
        </ButtonGroup>
      </div>
    );
  }
}
export default Home;