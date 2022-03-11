import React, { Component } from 'react';
import Banner from './Component/Banner';
import Navbar from './Component/Navbar';
import Slider from './Component/Slider';
import Nav from './Component/Nav';

export class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <Nav/> */}
        <Navbar/>
        <Banner/>
        <Slider/>
      </div>
    )
  }
}

export default App

