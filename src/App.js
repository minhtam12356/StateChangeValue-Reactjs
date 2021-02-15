import React from 'react';
import RowData from './Components/Row-data';

class App extends React.Component{
  constructor(){
    super();
    this.number = [1, 2, 3];
  }
  render(){
    return(
      <div>
        <p>Use only HTML to set list type</p>
        {
          this.number.length > 0 && <div className="render">
            <ol type="1">
              {
                this.number.map((item, index) => <RowData type="1" key={index} number={item}/>)
              }
            </ol>
            <ol type="A">
              {
                this.number.map((item, index) => <RowData type="1" key={index} number={item}/>)
              }
            </ol>
            <ol type="a">
              {
                this.number.map((item, index) => <RowData type="1" key={index} number={item}/>)
              }
            </ol>
            <ol type="I">
              {
                this.number.map((item, index) => <RowData type="1" key={index} number={item}/>)
              }
            </ol>
            <ol type="i">
              {
                this.number.map((item, index) => <RowData type="1" key={index} number={item}/>)
              }
            </ol>
            <ol start="24">
              {
                this.number.map((item, index) => <RowData type="1" key={index} number={item}/>)
              }
            </ol>
          </div>  
        }
        {
          this.number.length === 0 && <div className="render">Nothing Information!!</div>  
        }
      </div>
    )}
}

export default App;
