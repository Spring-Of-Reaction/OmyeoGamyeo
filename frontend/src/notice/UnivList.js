import React, { Component } from 'react';
import UnivInfo from './UnivInfo';

class UnivList extends Component {
  state = {
    style: {
      border: '2px solid black',
      padding: '10px',
      margin: '10px',
      width: 'wrapping',
      alignItems:'flex-start'
    },
  };
  
  render() {
    const { data } = this.props;
   

    return (
      <div className='Notice'>
        <ul >
          {data.map((data) => (
            <li className='btn--primary' style={this.state.style}>
              <UnivInfo data={data}> </UnivInfo>
            </li>))}
          
        </ul>
        </div>
      
    );
  }
}

export default UnivList;