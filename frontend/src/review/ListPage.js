import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class ListPage extends Component{
  /*constructor(props) {
    super(props)

    this.state = { 
      Review: []
  }
 
    this.createReview = this.createReview.bind(this);
}
  componentDidMount() {
    ReviewService.getReview().then((res) => {
        this.setState({ Review : res.data});
    });
} */

createReview(){
  this.props.history.push('/review/writingpage')
}

  render(){
  return (
  
      <div>
         <h2>강의 후기</h2>
      <div className='Listpage'> 목록 페이지 입니다.</div>
      <button onClick={this.createReview}> 글 작성 </button>
      <Link to="/review/viewingpage"> <button> 글을보러가기 </button></Link>
      </div>
  )
  }
}

export default ListPage;