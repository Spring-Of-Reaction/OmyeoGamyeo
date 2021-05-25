import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import ReviewService from './ReviewService';
import './Review.css';
import ReviewSearch from './ReviewSearch';


class ListPage extends Component{
  constructor(props) {
    super(props)

    this.state = { 
      Review: [],
      number: 100
    }
 
    this.createReview = this.createReview.bind(this);
    this.readReview = this.readReview.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
  this.props.history.push(`/review/${id}`)
}

searchkeywords(option,keywords){

  if(option==='1'){
  this.props.history.push(`/review/search/univName/${this.state.keywords}`);
  /*console.log(this.state.searchoption,"+",this.state.keywords);*/
  }
  else if(option==='2'){
      this.props.history.push(`/review/search/subjectName/${this.state.keywords}`);
     /* this.props.history.push(`/post/search/content/?keyword=${keywords}`);
      console.log(option,"+",keywords);*/
    
  }
  else{
      return
  }

}

handleSearch = (e) => {
  let SearchReview={};
  SearchReview[e.target.name]=e.target.value;
  this.setState(SearchReview);
};

  render(){
     return (
  
    <div class='container' >
      <h2 class='reviewnaming'>강의 후기</h2> 
      <div className = "form-group">
                                
                                <select placeholder="type" name="searchoption" 
                                        value={this.searchoption}  onChange={this.changesearchoptionHandler}>
                                            <optgroup label='카테고리를 선택하세요'>
                                        
                                        <option value='1'>학교명</option>
                                        <option value='2'>과목명</option></optgroup>
                                        </select>
                                
                                    
                                    <input type="text" placeholder="검색어를 입력하세요" name="keyword"  
                                   value={this.keywords} onChange={this.changekeywordsHandler}/>
                                   <button onClick={() => this.searchkeywords(this.state.searchoption,this.state.keywords)}> 검색 </button> 

                                   
                                
      </div>
      <div className = "card-body">
        <table className="table-boarder">
                        <thead className="tablest">
                            <tr >
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
        
                
      
      <button className="btn--primary2" onClick={this.createReview}> 글 작성 </button> 
      </div>
    </div>
  );
  }}


export default ListPage;