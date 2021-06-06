import React,{Component} from 'react';
import axios from 'axios';
import UserService from './UserService';
import '../user/user.css';
import '../components/Button.css';

class Signup extends Component{
  constructor(props) {
    super(props);


    this.state = {
      email:'',
      password:'',
      univ:'',
      nickname:'',
      token:'',
      message:''
        
    }
    this.changeemailHandler = this.changeemailHandler.bind(this);
    this.changepasswordHandler = this.changepasswordHandler.bind(this);
    this.changeunivHandler = this.changeunivHandler.bind(this);
    this.changenicknameHandler = this.changenicknameHandler.bind(this);
    this.createUser=this.createUser.bind(this);
    this.verifyUser=this.verifyUser.bind(this);
  }
changeemailHandler = (event) => {
    this.setState({email: event.target.value});
}
changepasswordHandler = (event) => {
    this.setState({password: event.target.value});
}
changeunivHandler = (event) => {
    this.setState({univ: event.target.value});
}
changenicknameHandler = (event) => {
  this.setState({nickname: event.target.value});
}

createUser = (event) => {
  event.preventDefault();
  let User = {
      email:this.state.email,
      password:this.state.password,
      univ:this.state.univ,
      nickname:this.state.nickname
      
  };

  
  {/*console.log("User => "+ JSON.stringify(User));*/}
    
  
      UserService.createUser(User).then(res => {
        let token=res.data;
        console.log(token);
        this.verifyUser();
      });
      console.log(JSON.stringify(User));
     {/* this.props.history.push('/join_email');*/}
   
}

verifyUser = (event) => {
  let User = {
    email:this.state.email,
    password:this.state.password,
    univ:this.state.univ,
    nickname:this.state.nickname
    
};
  
  
      UserService.emailverify(User).then(res => {
        let message=res.data;
        console.log(message);
        console.log("email 보냈음=> "+ JSON.stringify(User.email));
        window.alert("입력하신 이메일로 인증을 완료하세요.");
      });
}





 

render(){
return (
  
      <div class='container' >
        <div className='loginform'>
        <div style={{marginBottom:"30px"}}>
              <img src="logoimg.png" width="80" />
              <h2>Sign up to our account</h2>  
              </div>
                                <div className = "form-group">
                                
                                    <input type="text" placeholder="        이메일을 입력하세요"  style={{width:"300px", height:"40px", marginLeft:"50px", borderRadius:"10px"}} className="form-control"  
                                    value={this.state.email}  onChange={this.changeemailHandler}/>
                                </div>
                                <div className = "form-group">
                               
                                   <input type="password" placeholder="        비밀번호를 입력하세요" style={{width:"300px", height:"40px", marginLeft:"50px", borderRadius:"10px"}} className="form-control" 
                                    value={this.state.password} onChange={this.changepasswordHandler}/>
                                </div> 
                                <div className = "form-group">
                                 
                                    <input type="text" placeholder="        학교 이름을 입력하세요"  style={{width:"300px", height:"40px", marginLeft:"50px", borderRadius:"10px"}} className="form-control" 
                                    value={this.state.univ}  onChange={this.changeunivHandler}/>
                                </div>
                                <div className = "form-group">
                                    
                                    <input type="text" placeholder="        닉네임을 입력하세요" style={{width:"300px", height:"40px", marginLeft:"50px", borderRadius:"10px"}}  className="form-control" 
                                    value={this.state.nickname}  onChange={this.changenicknameHandler}/>
                                </div>
                                
                                <button className="btn--outline2" onClick={this.createUser} style={{width:"300px", height:"40px", borderRadius:"10px", fontWeight:"bold"}}>회원가입</button> 
                                
                               
      </div>
      </div>

  )

}}


export default Signup;