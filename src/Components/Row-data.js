import React from 'react';

class RowData extends React.Component{
    render(){
        return(
            <li>Item {this.props.number}</li>       
        )
    }  
}

export default RowData;