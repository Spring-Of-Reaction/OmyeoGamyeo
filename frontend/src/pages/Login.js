import React,{Component} from 'react';
import axios from 'axios';
import UserService from '../user/UserService';
import '../user/user.css';
import '../components/Button.css';
import Navbar from '../components/Navbar';


class Login extends Component{
  
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:'',
      token:[],
        
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
  
  
      UserService.loginUser(User).then(res => {
          
        let token=res.data;
        localStorage.setItem('nickname',token.nickname);
        localStorage.setItem('jwt',token.jwt);
        localStorage.setItem('uid',token.uid);
        console.log(localStorage.getItem('uid'));
        console.log(localStorage.getItem('nickname'));
        console.log(localStorage.getItem('jwt'));
        this.props.history.push("/mypage");
        
      });
}


  changeemail = (event) => {
    this.setState({ email : event.target.value });
};

changepassword = (event) => {
    this.setState({ password : event.target.value });
};
logoutuser(){
  localStorage.removeItem('nickname');
  localStorage.removeItem('uid');
  localStorage.removeItem('jwt');
}
render(){
return (<>
  <Navbar/>
  {this.logoutuser()}
      <div class='container' >
          <div class='loginform'>
              <div style={{marginBottom:"30px"}}>
              <img src="logoimg.png" width="80" />
              <h2>Login to your account</h2>
              </div>
                                <div className = "form-group">
                                    { /* <label className="labels"> 이메일  </label>*/}
                                    <input type="text" placeholder="     이메일을 입력하세요" style={{width:"300px", height:"40px", marginLeft:"50px", borderRadius:"10px"}}  className="form-control"
                                    value={this.state.email}  onChange={this.changeemail}/>
                                </div>
                                <div className = "form-group">
                                    {/*<label className="labels"> 비밀번호  </label> */}
                                   <input type="password" placeholder="     비밀번호를 입력하세요" style={{width:"300px", height:"40px", marginLeft:"50px", borderRadius:"10px"}}  className="form-control"
                                    value={this.state.password} onChange={this.changepassword}/>
                                </div>
                  <button className="btn--outline2" onClick={this.loginUser} style={{width:"300px", height:"40px", borderRadius:"10px", fontWeight:"bold"}}>로그인</button>
              <div style={{marginRight:"5px",fontSize:"13px", fontWeight:"bold", marginTop:"20px"}}>
                                    아직 회원이 아니신가요?
                  <button className='btn--outline3' onClick={this.signup} style={{borderRadius:"10px", marginLeft:"50px", width:"100px"}}>
                      회원가입 </button>
              </div>

      </div>
</div>
   </>   
  )

}}


export default Login;