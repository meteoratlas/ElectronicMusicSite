import React, { Component } from 'react';
import './App.css';
import PageHeader from './PageHeader';
import RecordingContainer from './RecordingContainer';
import PageBottom from './PageBottom';
import Credits from './Credits';

class App extends Component {
  render() {
    return (
    
        <div className="App">
        <div className="app-overlay"></div>
          <PageHeader/>
          <RecordingContainer />
          <Credits/>
          <PageBottom />
        </div>
      
    );
  }
}

export default App;
