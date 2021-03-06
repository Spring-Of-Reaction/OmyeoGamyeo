import React,{Component}  from 'react';
import { Link } from 'react-router-dom';
import FreePostService from './FreePostService';
import '../review/Review.css';

class FreepostListPageS1 extends Component{
  constructor(props) {
    super(props)

    this.state = { 
        keywords: this.props.match.params.keywords,
      Freepost: [],
      
  }
 
    this.createFreepost = this.createFreepost.bind(this);
    this.readpost = this.readpost.bind(this);
    this.category=this.category.bind(this);
    this.category1=this.category1.bind(this);
    this.category2=this.category2.bind(this);

    
}
  componentDidMount() {
      console.log(this.state.keywords);
        FreePostService.searchTPost(this.state.keywords).then((res) => {
            this.setState({ Freepost : res.data});
        });
    
} 
changekeywordsHandler = (event) => {
    this.setState({keywords: event.target.value});
}
changesearchoptionHandler = (event) => {
    this.setState({searchoption: event.target.value});
}
createFreepost(){
  this.props.history.push('/post/create')
}

readpost(no){
    this.props.history.push(`/post/${no}`)
}
category(){
    this.props.history.push('/post')
}
category1(){
    this.props.history.push('/post/category/1')
}
category2(){
    this.props.history.push('/post/category/2')
}



  render(){
  return (
  
      <div class='container'>
      <h2 class='reviewnaming' >자유게시판</h2>
    
      <div className = "card-body"> 

                    <table className="table-boarder">
                        <thead className="tablest">
                            <tr>
                                <th width="100px">글 번호 </th>
                                <th width="600px">제목 </th>
                                <th width="500px">작성일 </th>
                            
                            </tr>
                        </thead>
                        <tbody className="tablest">
                            {
                                this.state.Freepost.map(
                                    Freepost => 
                                    <tr key = {Freepost.pid}>
                                        <td width="100px"> <a onClick = {() => this.readpost(Freepost.pid)}>{Freepost.pid} </a></td>
                                        <td width="600px"> <a onClick = {() => this.readpost(Freepost.pid)}>{Freepost.title} </a></td>
                                        <td width="500px"> <a onClick = {() => this.readpost(Freepost.pid)}>{Freepost.date}</a> </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                
                
      
      <button className="btn--primary2" onClick={this.createFreepost}> 글 작성 </button> 
      
      </div></div>
  )
  }
}

export default FreepostListPageS1;