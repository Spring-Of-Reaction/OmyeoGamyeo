import React, { Component } from 'react';
import ToDoInfo from './ToDoInfo';

class ToDoList extends Component {
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
              <ToDoInfo data={data}> </ToDoInfo>
            </li>))}
          
        </ul>
        </div>
      
    );
  }
}

export default ToDoList;