import React from 'react';
import logo from './logo.svg';
import portland from './portland.jpg';
import './App.css';
import Main from './components/Main';
import AppBar from './components/AppBar';
import Header from './components/Header';
import Grid from './components/Grid';
import Text from './components/Text';

function App() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <img src={portland} alt="portland" />
      <Header/>
      <AppBar/>
      <Main/>
      <Grid/>
      <Text/>
    </div>
  );
}

export default App;
