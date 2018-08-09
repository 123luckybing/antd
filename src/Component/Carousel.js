import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
class BreadcrumbMenu extends Component {
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>Carousel轮播图</p>
        <p>一：基本用法</p>
        <Carousel className='slick'>
          <div>我</div>
          <div>是</div>
          <div>许</div>
          <div>魏</div>
          <div>洲</div>
        </Carousel>
        <p>二：过渡效果渐变 effect="fade"</p>
        <Carousel className='slick' effect="fade">
          <div>我</div>
          <div>是</div>
          <div>许</div>
          <div>魏</div>
          <div>洲</div>
        </Carousel>
        <p>三：自动切换下一张 autoplay</p>
        <Carousel className='slick' autoplay>
          <div>我</div>
          <div>是</div>
          <div>许</div>
          <div>魏</div>
          <div>洲</div>
        </Carousel>
      </div>
    );
  }
}
export default BreadcrumbMenu;