import React, { Component } from 'react';
import MypageService from './MypageService';

class Scraplist extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      Scraplist: [],
    }
    this.readScrap=this.readScrap.bind(this);
    
  }

componentDidMount() {
  MypageService.getMyscraplist().then((res) => {
    this.setState({ Scraplist : res.data});
        /*console.log("Review => "+ JSON.stringify(this.state.Review));*/
  });

}

readScrap(id){
  this.props.history.push(`/mypage/scrap/${id}`)
}


  render(){
  return (
    <div class='container' >
    {/*<img src={star} width='30' height='30'/>*/}
    <h2 class='reviewnaming'>스크랩한 글 목록</h2> 
    <div className = "card-body">
      <table className="table-boarder">
                      <thead className="tablest">
                          <tr >
                              
                              <th width="600px" >제목 </th>
                              
                          </tr>
                      </thead>
                      <tbody className="tablest">
                          {
                              this.state.Scraplist.map(
                                Scraplist => 
                                  <tr key = {Scraplist.id}>
                                      <td width="100px"> <a onClick = {() => this.readScrap(Scraplist.id)}>{Scraplist.subjectName} </a></td>
          
                                  </tr>
                              )
                          }
                      </tbody>
      </table>
    
    </div>
  </div>
      
  )}
}

export default Scraplist;