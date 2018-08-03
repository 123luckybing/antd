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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
