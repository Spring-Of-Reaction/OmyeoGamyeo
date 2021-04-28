import React, { Component } from 'react';
import ToDoInfo from './ToDoInfo';

class ToDoList extends Component {
  state = {
    style: {
      border: '1px solid black',
      padding: '10px',
      margin: '10px',
    },
  };
  render() {
    const { data } = this.props;

    return (
      <div>
        <ul>
          {data.map((data) => (
              <div>
            <li style={this.state.style}>
              <ToDoInfo data={data}> </ToDoInfo>

            </li>
            
            </div>
          ))}
        
        </ul>
      </div>
    );
  }
}

export default ToDoList;