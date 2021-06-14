import React,{Component}  from 'react';
import { Link } from 'react-router-dom';
import FreePostService from './FreePostService';
import '../review/Review.css';
import '../components/Navbar.css';

class FreepostListPage extends Component{
  constructor(props) {
    super(props)
    
    this.state = { 
      Freepost: [],
      keywords:'',
      searchoption:0,
      lgth:0,
      Newpost:[],
      start:0,
      end:5,
      
  }
    this.searchkeywords = this.searchkeywords.bind(this);
    this.changekeyworsdHandler = this.changekeywordsHandler.bind(this);
    this.changesearchoptionHandler = this.changesearchoptionHandler.bind(this);
    this.createFreepost = this.createFreepost.bind(this);
    this.readpost = this.readpost.bind(this);
    this.category=this.category.bind(this);
    this.category1=this.category1.bind(this);
    this.category2=this.category2.bind(this);
    
    
}
  componentDidMount() {
      
        FreePostService.getPost().then((res) => {
            this.setState({ Freepost : res.data});
            this.setState({lgth : res.data.length});
            console.log(this.state.lgth);
            console.log((this.state.lgth-this.state.lgth%5)/5);
            this.setState({Newpost: this.state.Freepost.slice(this.state.start,this.state.end)});
            console.log(JSON.stringify(this.state.Newpost));
        });
        
        
    
} 
changekeywordsHandler = (event) => {
    this.setState({keywords: event.target.value});
}
changesearchoptionHandler = (event) => {
    this.setState({searchoption: event.target.value});
}
createFreepost(){
  this.props.history.push('/post/create')
}


readpost(no){
    if(localStorage.getItem('nickname')){
        this.props.history.push(`/post/${no}`)}
    else{
      window.alert("로그인을 해야 서비스를 사용할 수 있습니다.");
      this.props.history.push('/login');
    }
  }

category(){
    this.props.history.push('/post')
}
category1(){
    this.props.history.push('/post/category/1')
}
category2(){
    this.props.history.push('/post/category/2')
}



searchkeywords(option,keywords){

    if(option==='1'){
    this.props.history.push(`/post/search/title/${this.state.keywords}`);
    /*console.log(this.state.searchoption,"+",this.state.keywords);*/
    }
    else if(option==='2'){
        this.props.history.push(`/post/search/content/${this.state.keywords}`);
       /* this.props.history.push(`/post/search/content/?keyword=${keywords}`);
        console.log(option,"+",keywords);*/
      
    }
    else{
        return
    }
 
}
usernull(){
    if(localStorage.getItem('nickname')){
       return <button className="btn--primary2" onClick={this.createFreepost} style={{marginTop:"100px"}}> 글 작성 </button> 
    }
  }
  render(){
  return (
      <div class='container'>
        <h2 class='reviewnaming' >자유게시판</h2>
        <div className="button-group2">
          <h4 style={{width:"140px",float:"left", marginTop:'10px'}} className="nav-links" onClick={this.category}> 전체 보기 </h4>
          <h4 style={{width:"100px",float:"left",marginTop:'10px'}} className="nav-links" onClick={this.category1}> 일상 </h4> 
          <h4 style={{width:"100px",float:"left",marginTop:'10px'}} className="nav-links" onClick={this.category2}> 질문 </h4> 
        

        
        <div className='search-group' style={{marginTop:"10px"}}>
            <select className="category" placeholder="type" name="searchoption" value={this.searchoption}  onChange={this.changesearchoptionHandler}>
                <optgroup label='카테고리를 선택하세요'>
                    <option value='1'>제목</option>
                    <option value='2'>내용</option>
                </optgroup>
            </select>
            <input className="category" type="text" placeholder="검색어를 입력하세요" name="keyword" value={this.keywords} onChange={this.changekeywordsHandler}/>
            <button className="category2" onClick={() => this.searchkeywords(this.state.searchoption,this.state.keywords)}> 검색 </button> 
        </div></div>
      

      <div className = "card-body"> 
             
                    <table className="table-boarder">
                        <thead className="tablest">
                            <tr>
                                <th width="100px">글 번호 </th>
                                <th width="600px">제목 </th>
                                <th width="500px">작성일 </th>
                            
                            </tr>
                        </thead>
                        <tbody className="tablest">
                            {
                                this.state.Freepost.map(
                                    Freepost => 
                                    <tr key = {Freepost.pid}>
                                        <td width="100px"> <a onClick = {() => this.readpost(Freepost.pid)}>{Freepost.pid} </a></td>
                                        <td width="600px"> <a onClick = {() => this.readpost(Freepost.pid)}>{Freepost.title} </a></td>
                                        <td width="500px"> <a onClick = {() => this.readpost(Freepost.pid)}>{Freepost.date}</a> </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                
                
                  {/*  <button className="btn--primary2" > 1 </button>
                    */}
      {this.usernull()}
      
      </div></div>
  )
  }
}

export default FreepostListPage;