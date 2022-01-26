import React, { Component } from 'react';

import Routes from './routes';

import './App.css';

class App extends Component {  
  render() {
    return(
        <>
          <div className="content">
            <div className="main">
                <Routes />
            </div>
          </div>
        </>
    )
  }
}

export default App;
