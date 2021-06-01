import React, { Component } from 'react';
import '../review/Review.css';

class UnivInfo extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <button  className="btn--primary4" ><a href={data.text2}><span>{data.text}</span></a></button>
      </div>
    );
  }
}

export default UnivInfo;