import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row,Col } from 'antd';
class GridCom extends Component {
  render() {
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>一：基本用法引用Row，Col span={1} 每行最多24列</p>
        <div>
          {/* 一行有两列 */}
          <Row>
            <Col span={12} className='border'>col-12</Col>
            <Col span={12} className='border'>col-12</Col>
          </Row>
          <Row>
            <Col span={6} className='border'>col-6</Col>
            <Col span={6} className='border'>col-6</Col>
            <Col span={6} className='border'>col-6</Col>
            <Col span={6} className='border'>col-6</Col>
          </Row>
          <Row>
            <Col span={8} className='border'>col-8</Col>
            <Col span={8} className='border'>col-8</Col>
            <Col span={8} className='border'>col-8</Col>
          </Row>
        </div>
        <p>二：列之间间隔</p>
        <Row gutter={20}>
          <Col span={8} className='border'>col-8</Col>
          <Col span={8} className='border'>col-8</Col>
          <Col span={8} className='border'>col-8</Col>
        </Row>
        <p>三：向右偏移offset={4}</p>
        <Row>
          <Col span={8} className='border' >col-8</Col>
          <Col span={8} className='border' offset={8}>col-8</Col>
        </Row>
      </div>
    );
  }
}
export default GridCom;