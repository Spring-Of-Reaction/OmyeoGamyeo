import React,{Component}  from 'react';
import FreePostService from './FreePostService';
import '../review/Review.css';

class FreepostViewingPage extends Component {
    constructor(props) {
        super(props)
         
        this.state = { 
            pid: this.props.match.params.pid,
            FreePost: [],
            Comments: [],
            c_writer:'',
            c_content:'',
            dateTime:new Date(),
            cid: this.props.match.params.cid,
            background: 'white',
            count:3
        }
        this.goToPEdit=this.goToPEdit.bind(this);
        this.changec_writerHandler = this.changec_writerHandler.bind(this);
        this.changec_contentHandler = this.changec_contentHandler.bind(this);    
        
       
    }

    changec_writerHandler = (event) => {
        this.setState({c_writer: event.target.value});
    }
    changec_contentHandler = (event) => {
        this.setState({c_content: event.target.value});
    }

    componentDidMount() {
        console.log(this.state.pid);
        FreePostService.getOnePost(this.state.pid).then( res => {
            this.setState({FreePost: res.data});
           console.log("POst => "+ JSON.stringify(this.state.FreePost));
        });
        FreePostService.getcomments(this.state.pid).then( res => {
            this.setState({Comments: res.data});
           /* console.log("댓글종류 => "+ JSON.stringify(this.state.Comments));*/
        });
    }

    createComments= (event) => {
        event.preventDefault();
        let newComments = {
            c_content:this.state.c_content,
            dateTime:this.state.dateTime,
            
        };
        FreePostService.createcomments(this.state.pid,newComments).then(res => {
            this.props.history.push(`/post/${this.state.pid}`);
            
        
        /*console.log("새댓글 => "+ JSON.stringify(newComments));*/
        window.location.reload();
    });

    }


    goToList() {
        this.props.history.push('/api/post');
    }
    
    goToPEdit= (event)=>{
        event.preventDefault();

        this.props.history.push(`/post/update/${this.state.pid}`);

           
    }
    deleteFreePost = async function (Comments) {
       
        Comments.map(
            Comments => FreePostService.deleteComments(this.state.pid,Comments.cid),
            console.log(Comments.cid)
        );

 
        if(window.confirm("글을 삭제하시겠습니까?")){
            FreePostService.deletePost(this.state.pid).then(res=> {
                let deletemessage=res.data; 
                console.log("delete result=>"+JSON.stringify(res));
                if(res.status===200){
                    alert(deletemessage);
                    this.props.history.push('/post');
                }else{
                    alert(deletemessage);
                    //alert("글 삭제를 실패하였습니다.");
                }
            });
        }
        
    }

    deleteComments = async function (cid) {
        if(window.confirm("댓글을 삭제하시겠습니까?")){
           /* console.log(cid);
            console.log(this.state.pid);*/
            FreePostService.deleteComments(this.state.pid,cid).then(res=> {
                console.log("delete result=>"+JSON.stringify(res));
                if(res.status===200){
                    this.props.history.push(`/post/${this.state.pid}`);
                    window.location.reload();
                }else{
                    alert("댓글 삭제를 실패하였습니다.");
                }
            });
        }
        
    }

    usercheck(){
        if(localStorage.getItem('uid')==this.state.FreePost.uid){
            return <div>
               
                <button className="btn--primary" onClick={this.goToPEdit} style={{marginTop:"50px", marginLeft:"10px"}}>수정하기</button>
        <button className="btn--primary" onClick={()=> this.deleteFreePost(this.state.Comments)} style={{marginTop:"50px", marginLeft:"10px"}}>삭제하기</button>
         </div>
    }else{
        return <button className= "scrapbutton" onClick={this.postlike} style={{width:"100px",height:"40px",marginTop:"50px", marginLeft:"10px",backgroundColor:this.state.background}}>좋아요 {this.state.count}</button>
    }

    }

    postlike = (event)=>{
        if(this.state.background=='white')
        {
        this.setState({background:'rgba(193, 208, 248, 0.2)'})
        this.state.count=this.state.count+1;
            window.alert("좋아요를 눌렀습니다.");
        }
        else
        {
        this.setState({background:'white'})
        this.state.count=this.state.count-1;
            window.alert("좋아요를 취소하였습니다.")
        }
        
           
    }

    render() {
        return (
            <div className = "container">
      
                <div className = "card col-md-6 offset-md-3">
                    <h2 className ='reviewnaming2'> {this.state.FreePost.title}</h2>
                    <div className = "row">
                                <label className="labels"  >  </label> <div className='contentbox'>  </div>
                            
                                <label className="labels" >  </label> <div className='contentbox'>{this.state.FreePost.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 작성자: {this.state.FreePost.nickname} </div>
                                </div >
                    <h3 className ='reviewnaming2'> {this.state.FreePost.content}</h3>
                    <div className = "card-body">

                    <div className='form-design2'>    
                    
                          {/*
                            <div className = "row">      
                               
                               <div className='contentbox'> {this.state.FreePost.title} </div>
                            </div>
                          
                          
                            <div className = "row">
                                <div className='contentbox'> {this.state.FreePost.content} </div>
                            </div >*/}
                            <div className = "row">
                                {this.state.FreePost.filename} 
                            </div >
                            </div >{this.usercheck()}
                <div className="table-boarder5" style={{marginTop:"10px"}}>
                        <table  >
                        <thead >
                            <tr>
                                <th width="30px"></th>
                                <th width="500px"> </th>
                                <th width="200px"></th>
                              
                            
                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.state.Comments.map(
                                    Comments => 
                                    <tr key = {Comments.cid}>
                                        <td width="30px"> {Comments.c_writer} </td>
                                        <td width="500px"> {Comments.c_content}</td>
                                        <td width="200px"> {Comments.dateTime}</td>
                                        <button onClick={()=> this.deleteComments(Comments.cid)} style={{width:"wrap-contents"}}>x</button>
                                    </tr>
                                )
                             }
                             </tbody>
                             </table>
                    
                           
                            {/*this.returnDate(this.state.Posts.createdTime, this.state.Posts.updatedTime) 
                            <div className = "form-group">
                                <label > 댓글작성자  </label>
                                   <input type="text" placeholder="내용" name="" className="form-control" 
                                    value={this.state.c_writer} onChange={this.changec_writerHandler}/>
                                </div>*/}
                                <div className="table-boarder6" style={{marginTop:"50px"}}>
                                    <label > 댓글달기  </label>
                                        <input type="text" placeholder="" name="" className="form-control-sub2" 
                                            value={this.state.c_content} onChange={this.changec_contentHandler}/>
                                    <button className="btn--primary" onClick={this.createComments} style={{marginLeft:"10px"}}>등록</button>
                                </div>    
                </div>
                            <div>
                           
                            
                        </div>
                    </div>
                </div>
                </div>
            
        );
    }
}

export default FreepostViewingPage;