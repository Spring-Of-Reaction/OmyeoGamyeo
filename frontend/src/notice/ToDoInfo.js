import React, { Component } from 'react';

class ToDoInfo extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <a href={data.text2}><span>{data.text}</span></a>
      </div>
    );
  }
}

export default ToDoInfo;