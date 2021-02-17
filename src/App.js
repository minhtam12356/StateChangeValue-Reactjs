import React from 'react';
import './App.css';
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      valueInput : "",
      valueP : ""
    }
    this.change = this.changeEvent.bind(this);
  }

  async changeEvent(event){
    await new Promise((resolve, reject) => {
      this.setState({
        valueInput: event.target.value
      });
      resolve();
    });
    this.setState({
      valueP: this.state.valueInput
    });
    
  }

  render(){
    return(
      <div>
        <h2>Binding value</h2>
        <p id="binding-block" >Hello, {this.state.valueP}</p>
        <input id="typing-area" type="text" placeholder="Nhap ten cua ban" onChange={this.change}/>
      </div>     
    )}
}

export default App;
