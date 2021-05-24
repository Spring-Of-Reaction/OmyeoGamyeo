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
           /*console.log("POst => "+ JSON.stringify(this.state.FreePost));*/
        });
        FreePostService.getcomments(this.state.pid).then( res => {
            this.setState({Comments: res.data});
           /* console.log("댓글종류 => "+ JSON.stringify(this.state.Comments));*/
        });
    }

    createComments= (event) => {
        event.preventDefault();
        let newComments = {
            c_writer:this.state.c_writer,
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
        this.props.history.push('/post');
    }
    
    goToPEdit= (event)=>{
        event.preventDefault();
        this.props.history.push(`/post/update/${this.state.pid}`);
           
    }
    deleteFreePost = async function (comments) {
       /* console.log("삭제예정댓글 => "+ JSON.stringify(comments));*/
        comments.map(
            Comments => FreePostService.deleteComments(this.state.pid,Comments.cid)
            /*,console.log(Comments.cid)*/
        );

 
        if(window.confirm("글을 삭제하시겠습니까?")){
            FreePostService.deletePost(this.state.pid).then(res=> {
                console.log("delete result=>"+JSON.stringify(res));
                if(res.status===200){
                    this.props.history.push('/post');
                }else{
                    alert("글 삭제를 실패하였습니다.");
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
    render() {
        return (
            <div className = "container">
      
                <div className = "card col-md-6 offset-md-3">
                    <h2 className ='reviewnaming'> 조회 페이지</h2>
                    <div className = "card-body">
                    <div className='form-design2'>    
                          
                            <div className = "row">      
                               
                                <label className="labels"> 제목 </label>  <div className='contentbox'> {this.state.FreePost.title} </div>
                            </div>

                            <div className = "row">
                                <label className="labels"> Contents </label>  <div className='contentbox'> {this.state.FreePost.content} </div>
                            </div >
                            

                            <table >
                        <thead >
                            <tr>
                                <th width="100px">댓글 작성자 </th>
                                <th width="600px">댓글의 내용 </th>
                                <th width="600px">시간 </th>
                              
                            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Comments.map(
                                    Comments => 
                                    <tr key = {Comments.cid}>
                                        <td width="600px"> {Comments.c_writer} </td>
                                        <td width="500px"> {Comments.c_content}</td>
                                        <td width="500px"> {Comments.dateTime}</td>
                                        <button onClick={()=> this.deleteComments(Comments.cid)} style={{width:"wrap-contents"}}>x</button>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                           
                            {/*this.returnDate(this.state.Posts.createdTime, this.state.Posts.updatedTime) */}
                            <div className = "form-group">
                                <label className="labels"> 댓글작성자  </label>
                                   <input type="text" placeholder="내용" name="" className="form-control" 
                                    value={this.state.c_writer} onChange={this.changec_writerHandler}/>
                                </div>
                                <label className="labels"> 댓글달기  </label>
                                   <input type="text" placeholder="작성자" name="" className="form-control-sub" 
                                    value={this.state.c_content} onChange={this.changec_contentHandler}/>
                                
                                <form>
                            <button className="btn btn-success" onClick={this.createComments} style={{marginLeft:"10px"}}>등록</button>
                            </form>
                            <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
                            <button className="btn--primary" onClick={this.goToPEdit} style={{marginTop:"100px", marginLeft:"10px"}}>수정하기</button>
                            <button className="btn--primary" onClick={()=> this.deleteFreePost(this.state.Comments)} style={{marginTop:"100px", marginLeft:"10px"}}>삭제하기</button>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default FreepostViewingPage;