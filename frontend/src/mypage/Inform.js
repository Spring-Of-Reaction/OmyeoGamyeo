import React, { Component } from 'react';
import MypageService from './MypageService';


class Inform extends Component{
  constructor(props) {
    super(props)
     
    this.state = { 
        UserInform: [],
        
    }
   this.goToEdit=this.goToEdit.bind(this);
}

componentDidMount() {
        MypageService.getUserInform().then( (res) => {
            this.setState({UserInform: res.data});
        });
}
goToEdit= (event)=>{
  event.preventDefault();
  this.props.history.push('/mypage/inform/update');
     
}


  render(){
    return (
  
      
      
      <div className = "container">
                
      <div className = "card col-md-6 offset-md-3">
          <h2 className='reviewnaming'> 회원정보입니다.</h2>
          <div className = "card-body">
              <div className='form-design2'>
                  <div className = "row">      
                      <label className="labels" > 이메일 </label>  <div className='contentbox'>{this.state.UserInform.email} </div>
                  </div>
                  <div className = "row">      
                      <label className="labels" > 비밀번호 </label>  <div className='contentbox'>{this.state.UserInform.password} </div>
                  </div>
                  <div className = "row">      
                      <label className="labels"  > 닉네임 </label>  <div className='contentbox'>{this.state.UserInform.nickname} </div>
                  </div>
                  <div className = "row">      
                      <label className="labels"  > 학교 </label>  <div className='contentbox'>{this.state.UserInform.univName} </div>
                  </div>
                
                  <button className="btn--primary" onClick={this.goToEdit} style={{marginTop:"100px", marginLeft:"10px"}}>수정하기</button>
                  </div> </div>
      </div>

  </div>
      
  )
}
}

export default Inform;