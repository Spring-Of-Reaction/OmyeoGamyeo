import React,{Component} from 'react';
import axios from 'axios';
import UserService from '../user/UserService';
import '../user/user.css';


class Login extends Component{
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:'',
      token:''
        
    }
    this.signup=this.signup.bind(this);
  }
  
signup(){
  this.props.history.push('/join');
}

loginUser = (event) => {
  event.preventDefault();
  
  let User = {
    email:this.state.email,
    password:this.state.password,
  
    
};
  let Email={
    email:this.state.email,
  }
  const headers=new Headers({
    "Content-Type":"application/json"
  })
  
      UserService.loginUser(User).then(res => {
        let token=res.data;
        localStorage.setItem('user',token);

        console.log(localStorage.getItem('user'));
        this.props.history.push("/mypage");
        
      });
}


  changeemail = (event) => {
    this.setState({ email : event.target.value });
};

changepassword = (event) => {
    this.setState({ password : event.target.value });
};

render(){
return (
  
      <div class='container' >
      <h2 class='reviewnaming'>로그인하세요.</h2>   
          <div className='loginform'>
                                <div className = "form-group">
                                    <label className="labels"> 이메일  </label>
                                    <input type="text" placeholder=""  className="form-control" 
                                    value={this.state.email}  onChange={this.changeemail}/>
                                </div>
                                <div className = "form-group">
                                <label className="labels"> 비밀번호  </label>
                                   <input type="password" placeholder=""  className="form-control" 
                                    value={this.state.password} onChange={this.changepassword}/>
                                </div> </div>


                            
                                <div>아직 회원이 아니신가요? <button className="btn btn-danger" onClick={this.signup}> 회원가입하세요. </button></div>
                                <button className="btn btn-danger" onClick={this.loginUser}>로그인</button> 
      </div>
      
  )

}}


export default Login;