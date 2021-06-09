import React,{Component} from 'react';
import '../review/Review.css';
import MypageService from './MypageService';

class FreepostWritingPage extends Component{
    constructor(props){
    super(props);
    this.state = {
        email:'',
        password:'',
        univ:'',
        nickname:'',
        
    }

    this.changeemailHandler = this.changeemailHandler.bind(this);
    this.changepasswordHandler = this.changepasswordHandler.bind(this);
    this.changeunivHandler = this.changeunivHandler.bind(this);
    this.changenicknameHandler = this.changenicknameHandler.bind(this);
    this.createUser=this.createUser.bind(this);
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
        univ:this.state.univ,
        nickname:this.state.nickname
        
    };
  
    
    {/*console.log("User => "+ JSON.stringify(User));*/}
      
    
        MypageService.updateUserInform(User).then(res => {
          let token=res.data;
          console.log(token);
          this.props.history.push('/mypage/inform');
        });
        console.log(JSON.stringify(User));
     
  }



componentDidMount() {
        MypageService.getUserInform().then( (res) => {
            let User=res.data;
            this.setState({
                email:User.email,
                password:User.password,
                univ:User.univ,
                nickname:User.nickname})
            
             });    
}

render() {
    return (
        <div>
            <div className = "container">
            <h2 className='reviewnaming'> 회원정보를 수정합니다.</h2>
                        <div className = "card-body">
                            <form className = "form-design">

                            <div className = "form-group">
                                    <label className="labels"> 이메일  </label>
                                    <input type="text" placeholder="이메일" name="email" className="form-control" 
                                   value={this.state.email} onChange={this.changeemailHandler} disabled/>
                                </div>
                                                              
    
                                <div className = "form-group">
                                <label className="labels"> 학교명  </label>
                                    <input placeholder="학교명" name="univ" className="form-control" 
                                     value={this.state.univ} onChange={this.changeunivHandler}/>
                                </div>
                                
                                   
                                    <div className = "form-group">
                                        <label className="labels"> 닉네임  </label>
                                        <input type="text" placeholder="" name="nickname" className="form-control" 
                                         value={this.state.nickname} onChange={this.changenicknameHandler}/>
                                    </div>
                                    
                                    
                                
                                <div className = "button-group">
                                    <button className="btn btn-success" onClick={this.createUser} style={{marginLeft:"10px"}}>등록</button>
                                   
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            
    );
}}

export default FreepostWritingPage;




