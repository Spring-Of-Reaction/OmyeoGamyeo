import React,{Component}  from 'react';
import { Link } from 'react-router-dom';
import FreePostService from './FreePostService';

class FreepostListPage extends Component{
  constructor(props) {
    super(props)

    this.state = { 
      Freepost: []
  }
 
    this.createFreepost = this.createFreepost.bind(this);
}
  componentDidMount() {
    FreePostService.getPost().then((res) => {
        this.setState({ Freepost : res.data});
    });
} 

createFreepost(){
  this.props.history.push('/post/writingpage')
}

readFreepost(no){
    this.props.history.push(`/post/${no}`)
}

  render(){
  return (
  
      <div>
      <h2>자유게시판</h2>
      <div className='Listpage'> 목록 페이지 입니다.</div>
      <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호 </th>
                                <th>제목 </th>
                                <th>작성자 </th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Freepost.map(
                                    Freepost => 
                                    <tr key = {Freepost.title}>
                                        <td> {Freepost.no} </td>
                                        <td> <a onClick = {() => this.readPosts(Freepost.title)}>{Freepost.title} </a></td>
                                        <td> <a onClick = {() => this.readPosts(Freepost.title)}>{Freepost.univName}</a> </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
      
      <button onClick={this.createFreepost}> 글 작성 </button> 
      <Link to="/Post/viewingpage"> <button> 글을보러가기 </button></Link>
      </div>
  )
  }
}

export default FreepostListPage;