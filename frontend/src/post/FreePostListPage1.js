import React,{Component}  from 'react';
import { Link } from 'react-router-dom';
import FreePostService from './FreePostService';
import '../review/Review.css';

class FreepostListPage extends Component{
  constructor(props) {
    super(props)

    this.state = { 
      Freepost: []
  }
 
    this.createFreepost = this.createFreepost.bind(this);
    this.readFreepost = this.readFreepost.bind(this);
    this.category=this.category.bind(this);
    this.category1=this.category1.bind(this);
    this.category2=this.category2.bind(this);
    
}
  componentDidMount() {
     
        FreePostService.getPostC(1).then((res) => {
            this.setState({ Freepost : res.data});
        });
    
} 

createFreepost(){
  this.props.history.push('/post/create')
}

readFreepost(no){
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
      <div className="button-group2">
      <button className="btn--primary3" onClick={this.category}> 전체 보기 </button>
      <button className="btn--primary3" onClick={this.category1}> 일상 </button> 
      <button className="btn--primary3" onClick={this.category2}> 질문 </button> 
      </div>
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
                                        <td width="100px"> <a onClick = {() => this.readPosts(Freepost.pid)}>{Freepost.pid} </a></td>
                                        <td width="600px"> <a onClick = {() => this.readPosts(Freepost.pid)}>{Freepost.title} </a></td>
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

export default FreepostListPage;