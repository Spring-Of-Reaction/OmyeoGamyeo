import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import ReviewService from './ReviewService';
import './Review.css';
import ReviewSearch from './ReviewSearch';


class ListPageS1 extends Component{
  constructor(props) {
    super(props)

    this.state = { 
      Review: [],
      number: 100
    }
 
    this.createReview = this.createReview.bind(this);
    this.readReview = this.readReview.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

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



handleSearch = (e) => {
  let SearchReview={};
  SearchReview[e.target.name]=e.target.value;
  this.setState(SearchReview);
};

  render(){
     return (
  
    <div class='container' >
      <h2 class='reviewnaming'>강의 후기</h2> 
      
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
        
                
      
      
      </div>
    </div>
  );
  }}


export default ListPageS1;