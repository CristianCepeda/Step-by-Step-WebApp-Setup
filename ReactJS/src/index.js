import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

import './index.css';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Hello Worlds from App Compontent</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// console.log("Hello");
