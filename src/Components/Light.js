import React from 'react';
import className from 'classnames';

const Red = 0;
const Yellow = 1;
const Green = 2;

class Light extends React.Component{
    render(){
        return(
            <div className="Traffic">
                <div className={className("Bulb", "Red", {Active : this.props.currentColor === Red})}></div>
                <div className={className("Bulb", "Yellow", {Active : this.props.currentColor === Yellow})}></div>
                <div className={className("Bulb", "Green", {Active : this.props.currentColor === Green})}></div>
            </div>       
        )
    }  
}

export default Light;