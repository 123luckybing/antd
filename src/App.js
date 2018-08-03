import React, { Component } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Button from './Component/Button';
import Icon from './Component/Icon';
import Cascader from './Component/Cascader';
import Breadcrumb from './Component/Breadcrumb';
import Rate from './Component/Rate';
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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
