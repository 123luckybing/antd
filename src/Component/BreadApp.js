import React, { Component } from 'react';
import { Alert } from 'antd';
import { Link,BrowserRouter as Router , Route } from 'react-router-dom';
class BreadApp extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <li>
              <Link to='/apps/1'>Application1</Link>:
              <Link to='/apps/1/Detail'>Detail</Link>
            </li>
            <li>
              <Link to='/apps/2'>Application1</Link>:
              <Link to='/apps/2/Detail'>Detail</Link>
            </li>
          </div>
        </Router>
      </div>
    );
  }
}
export default BreadApp;