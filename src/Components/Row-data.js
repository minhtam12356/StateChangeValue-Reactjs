import React from 'react';

class RowData extends React.Component{
    render(){
        const click = () => {
            var getTr = document.getElementsByTagName('tr');
            var numberGetTr = parseInt(this._reactInternals.return.key) + 1;
            var numberGetImg = this._reactInternals.key;
            var getChoice = getTr[numberGetTr].children[numberGetImg];
            getChoice.children[0].setAttribute('width', parseInt(getChoice.children[0].width) + 10)
        }
        return (  
            <td>
                <img src={this.props.src} alt="Image 1" width={this.props.width} onClick={click}/>
            </td> 
        )}       
    
}

export default RowData;