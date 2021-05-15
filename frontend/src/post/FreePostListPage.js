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
    
}
  componentDidMount() {
    FreePostService.getPost().then((res) => {
        this.setState({ Freepost : res.data});
    });
} 

createFreepost(){
  this.props.history.push('/api/post/writingpage/create')
}

readFreepost(no){
    this.props.history.push(`/api/post/${no}`)
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
                                <th width="500px">타입 </th>
                            
                            </tr>
                        </thead>
                        <tbody className="tablest">
                            {
                                this.state.Freepost.map(
                                    Freepost => 
                                    <tr key = {Freepost.pid}>
                                        <td width="100px"> <a onClick = {() => this.readPosts(Freepost.pid)}>{Freepost.pid} </a></td>
                                        <td width="600px"> <a onClick = {() => this.readPosts(Freepost.pid)}>{Freepost.title} </a></td>
                                        <td width="500px"> <a onClick = {() => this.readPosts(Freepost.pid)}>{Freepost.type}</a> </td>
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