import React, { Component } from 'react';
import { Alert } from 'antd';
class HomeBreadcrumb extends Component {
  render() {
    return (
      <div>
        <h3>Home Page</h3>
        <Alert type='info' message="Click the navigation above to switch:"/>
        <h4>Home</h4>
      </div>
    );
  }
}
export default HomeBreadcrumb;