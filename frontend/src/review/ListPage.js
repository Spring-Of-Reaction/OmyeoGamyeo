import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import ReviewService from './ReviewService';

class ListPage extends Component{
  constructor(props) {
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
} 

createReview(){
  this.props.history.push('/review/writingpage')
}

readReview(no){
    this.props.history.push(`/review/${no}`)
}

  render(){
  return (
  
      <div>
      <h2>강의 후기</h2>
      <div className='Listpage'> 목록 페이지 입니다.</div>
      <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호 </th>
                                <th>강의명 </th>
                                <th>학교명 </th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Review.map(
                                    Review => 
                                    <tr key = {Review.subjectName}>
                                        <td> {Review.no} </td>
                                        <td> <a onClick = {() => this.readReview(Review.subjectName)}>{Review.subjectName} </a></td>
                                        <td> <a onClick = {() => this.readReview(Review.subjectName)}>{Review.univName}</a> </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
      
      <button onClick={this.createReview}> 글 작성 </button> 
      <Link to="/review/viewingpage"> <button> 글을보러가기 </button></Link>
      </div>
  )
  }
}

export default ListPage;