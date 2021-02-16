import React from 'react';
import Light from './Components/Light';
import './App.css';

const Red = 0;
const Yellow = 1;
const Green = 2;

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentColor : Red
    };
    setInterval(() => {
      this.setState({
        currentColor : this.getNextColor(this.state.currentColor)
      })
    }, 1000);
  }
  
  getNextColor(color){
    switch (color) {
      case Red:
        return Green;
      case Green:
        return Yellow;
      default:
        return Red;
    }
  }

  render(){
    return(
      <Light currentColor={this.state.currentColor}/>
    )}
}

export default App;
