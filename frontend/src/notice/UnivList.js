import React, { Component } from 'react';
import UnivInfo from './UnivInfo';

class UnivList extends Component {
  state = {
    style: {
      border: '10px',
      padding: '10px',
      margin: '10px',
      width: '200px',
      height: '80px',
      alignItems:'flex-start'
    },
  };
  
  render() {
    const { data } = this.props;
   

    return (
      <div className='Notice' style={{marginLeft:"75px"}}>
        <ul >
          {data.map((data) => (
            <li className='button-for-notice' style={this.state.style}>
              <UnivInfo data={data}> </UnivInfo>
            </li>))}
          
        </ul>
        </div>
      
    );
  }
}

export default UnivList;