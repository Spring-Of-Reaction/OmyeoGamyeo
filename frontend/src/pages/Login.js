import React,{Component} from 'react';
import axios from 'axios';

class Login extends Component{
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:''
        
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.signup=this.signup.bind(this);
  }
  
signup(){
  this.props.history.push('/sign-up');
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

                                <div className = "form-group">
                                    <label className="labels"> 이메일  </label>
                                    <input type="text" placeholder=""  className="form-control" 
                                    value={this.state.email}  onChange={this.changeemail}/>
                                </div>
                                <div className = "form-group">
                                <label className="labels"> 비밀번호  </label>
                                   <input type="password" placeholder=""  className="form-control" 
                                    value={this.state.password} onChange={this.changepassword}/>
                                </div> 


                                <button className="btn btn-danger" onClick={() => alert(`${this.state.email}, ${this.state.password}`)}>회원?</button> 
                                <div>아직 회원이 아니신가요? <button className="btn btn-danger" onClick={this.signup}> 회원가입하세요. </button></div>
                               
      </div>
      
  )

}}


export default Login;