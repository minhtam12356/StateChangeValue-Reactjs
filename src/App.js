import React from 'react';
import RowTitle from './Components/Row-title';
import RowData from './Components/Row-data';

class App extends React.Component{
  constructor(){
    super();
    this.number = [1, 2, 3];
    this.width = 200;
    this.src = "http://bit.ly/3ayPusa";
  }
  render(){
    return(
      <div>
        <h2>Table gallery</h2>
        <table>
          <thead>
            <tr>
              {
                this.number.map((item, index) => <RowTitle number={item} key={index}/>)
              }
            </tr>
          </thead>
          <tbody>
            {
              this.number.map((item, index) => 
              <tr key={index}>
                {
                  this.number.map((item, index) => <RowData src={this.src} width={this.width} key={index}/>)
                } 
              </tr>)
            }
          </tbody>
        </table>
      </div>
    )}
}

export default App;
