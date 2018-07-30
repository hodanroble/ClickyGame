import React, { Component } from 'react';
import NavBar from './components/Bootstrap/Navbar';
import Panel from './components/Bootstrap/Panel';
import Wrapper from './components/Wrapper';
import Rules from './components/Rules';
import HanziCard from './components/HanziCard';
import hanzi from './hanzi.json';
import './App.css';

class App extends Component {
  // Set the information from the Hanzi.json information to be the default info in an array.
  state = {
    hanzi,
  };

  // Set up a object to handle flipping


  // Set another object to handle fliping back


  // Set up the layout of the page
  render() {
    return [
      <NavBar />,
      <Panel />,
      <Wrapper>,
        <Rules> Place holder information will be pladed here</Rules>
        {this.state.hanzi.map(myHanzi => (
          <HanziCard
            id={myHanzi.id}
            key={myHanzi.id}
            name={myHanzi.name}
            image={myHanzi.image}
            pinyin={myHanzi.pinyin}
            strokes={myHanzi.strokes}
            clicked={myHanzi.clicked}
          />
        ))}
      </Wrapper>,
    ];
  }
}

export default App;