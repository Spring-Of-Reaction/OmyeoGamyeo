import React, { Component } from 'react';
import MypageService from './MypageService';

class Mylist extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      Mylist: [],
    }
    this.readPost=this.readPost.bind(this);
    
  }

componentDidMount() {
  MypageService.getMylist().then((res) => {
    this.setState({ Mylist : res.data});
        console.log("Mylist => "+ JSON.stringify(this.state.Mylist));
  });

}

readPost(no){
  this.props.history.push(`/mypage/post/${no}`)
}


  render(){
  return (
    <div class='container' >
    {/*<img src={star} width='30' height='30'/>*/}
    <h2 class='reviewnaming'>내가 쓴 글 목록</h2> 
    <div className = "card-body">
      <table className="table-boarder">
                      <thead className="tablest">
                          <tr >
                              
                              <th width="600px" >자유게시판 </th>
                              
                          </tr>
                      </thead>
                      <tbody className="tablest">
                          {
                              this.state.Mylist.map(
                                Mylist => 
                                  <tr key = {Mylist.pid}>
                                      <td width="100px"> <a onClick = {() => this.readPost(Mylist.pid)}>{Mylist.title} </a></td>
          
                                  </tr>
                              )
                          }
                      </tbody>
      </table>
      
            
    </div>
  </div>
      
  )}
}

export default Mylist;