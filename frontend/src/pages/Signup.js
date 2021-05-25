import React,{Component} from 'react';
import axios from 'axios';
import UserService from './UserService';

class Signup extends Component{
  constructor(props) {
    super(props);


    this.state = {
      email:'',
      password:'',
      univName:'',
      nickname:''
        
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.changeemailHandler = this.changeemailHandler.bind(this);
    this.changepasswordHandler = this.changepasswordHandler.bind(this);
    this.changeunivNameHandler = this.changeunivNameHandler.bind(this);
    this.changenicknameHandler = this.changenicknameHandler.bind(this);
    this.createUser=this.createUser.bind(this);
  }
changeemailHandler = (event) => {
    this.setState({email: event.target.value});
}
changepasswordHandler = (event) => {
    this.setState({password: event.target.value});
}
changeunivNameHandler = (event) => {
    this.setState({univName: event.target.value});
}
changenicknameHandler = (event) => {
  this.setState({nickname: event.target.value});
}

createUser = (event) => {
  event.preventDefault();
  let User = {
      email:this.state.email,
      password:this.state.password,
      univName:this.state.univName,
      nickname:this.state.nickname
      
  };
  
  console.log("User => "+ JSON.stringify(User));

  
      UserService.createUser(User).then(res => {
          this.props.history.push('/post');
      });
}


  handleSubmit=e=>{
   e.preventDefault();
        
    let data={
      email:this.state.email,
      password:this.state.password
    };

    axios.post('url',data)
    .then(res=>{
      console.log(res.data);
      const{accessToken}=res.date;
    localStorage.setItem('token',res.data); //localstorage 저장
    axios.defaults.headers.common['Authorization']=`Bearer ${accessToken}`; //위랑 반대 상황
  })
  .catch(err=>{
    console.log(err)
  })
  };
 

 

render(){
return (
  
      <div class='container' >
      <h2 class='reviewnaming'>오며가며 회원가입</h2>   

                                <div className = "form-group">
                                    <label className="labels"> 이메일  </label>
                                    <input type="text" placeholder=""  className="form-control" 
                                    value={this.state.email}  onChange={this.changeemailHandler}/>
                                </div>
                                <div className = "form-group">
                                <label className="labels"> 비밀번호  </label>
                                   <input type="password" placeholder=""  className="form-control" 
                                    value={this.state.password} onChange={this.changepasswordHandler}/>
                                </div> 
                                <div className = "form-group">
                                    <label className="labels"> 학교이름  </label>
                                    <input type="text" placeholder=""  className="form-control" 
                                    value={this.state.univName}  onChange={this.changeunivNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label className="labels"> 닉네임  </label>
                                    <input type="text" placeholder=""  className="form-control" 
                                    value={this.state.nickname}  onChange={this.changenicknameHandler}/>
                                </div>
                                
                                <button className="btn btn-danger" onClick={this.createUser}>회원가입</button> 
                                <button className="btn btn-danger" onClick={() => alert(`${this.state.email}, ${this.state.univName}, ${this.state.password}`)}>회원정보는?</button> 
      </div>
      

  )

}}


export default Signup;