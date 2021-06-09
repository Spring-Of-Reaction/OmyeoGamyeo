import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import ReviewService from './ReviewService';
import './Review.css';

class ListPage extends Component{
  constructor(props) {
    super(props)

    this.state = { 
      Review: [],
      number: 100
    }
 
    this.createReview = this.createReview.bind(this);
    this.readReview = this.readReview.bind(this);
   
    this.searchkeywords = this.searchkeywords.bind(this);
    this.changekeyworsdHandler = this.changekeywordsHandler.bind(this);
    this.changesearchoptionHandler = this.changesearchoptionHandler.bind(this);
  }

componentDidMount() {
  ReviewService.getReview().then((res) => {
    this.setState({ Review : res.data});
        /*console.log("Review => "+ JSON.stringify(this.state.Review));*/
  });

}

changekeywordsHandler = (event) => {
  this.setState({keywords: event.target.value});
}

changesearchoptionHandler = (event) => {
  this.setState({searchoption: event.target.value});
}

createReview() {
  this.props.history.push('/review/create')
}

readReview(id){
  if(localStorage.getItem('nickname')){
  this.props.history.push(`/review/${id}`)}
  else{
    window.alert("로그인을 해야 서비스를 사용할 수 있습니다.");
    this.props.history.push('/login');
  }
}

searchkeywords(option,keywords){

  if(option==='1'){
  this.props.history.push(`/review/search/univ/${this.state.keywords}`);
  console.log(this.state.searchoption,"+",this.state.keywords);
  }
  else if(option==='2'){
      this.props.history.push(`/review/search/subject/${this.state.keywords}`);
     /* this.props.history.push(`/post/search/content/?keyword=${keywords}`);
      console.log(option,"+",keywords);*/
    
  }
  else{
      return
  }

}

usernull(){
  if(localStorage.getItem('nickname')){
     return <button className="btn--primary2" onClick={this.createReview}> 글 작성 </button> 
  }
}

  render(){
     return (
    <div class='container' >
      {/*<img src={star} width='30' height='30'/>*/}
      <h2 class='reviewnaming'>강의 후기</h2> 
        <div className = "form-group">
          <div className='search-group'>
            <select className="category" placeholder="type" name="searchoption" 
               value={this.searchoption}  onChange={this.changesearchoptionHandler}>
              <optgroup label='카테고리를 선택하세요'>
               <option value='1'>학교명</option>
               <option value='2'>과목명</option></optgroup>
            </select>
            <input className="category" type="text" placeholder="검색어를 입력하세요" name="keyword"  
              value={this.keywords} onChange={this.changekeywordsHandler}/>
            <button className="category2" onClick={() => this.searchkeywords(this.state.searchoption,this.state.keywords)}> 검색 </button> 
          </div>
        </div>
      <div className = "card-body">
        <table className="table-boarder">
          <thead className="tablest">
            <tr>
              <th width="100px" >글 번호 </th>
              <th width="600px" >강의명 </th>
              <th width="500px" >학교명 </th>
            </tr>
          </thead>

          <tbody className="tablest">
            {
            this.state.Review.map(
            Review => 
            <tr key = {Review.id}>
              <td width="100px"> <a onClick = {() => this.readReview(Review.id)}>{Review.id} </a></td>
              <td width="600px"> <a onClick = {() => this.readReview(Review.id)}>{Review.subjectName} </a></td>
              <td width="500px"> <a onClick = {() => this.readReview(Review.id)}>{Review.univName}</a> </td>
            </tr>
            )
            }
          </tbody>
        </table>
        {this.usernull()}
       
      </div>
    </div>
  );
  }}


export default ListPage;