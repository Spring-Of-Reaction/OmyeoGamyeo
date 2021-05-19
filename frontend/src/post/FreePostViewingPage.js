import React,{Component}  from 'react';
import FreePostService from './FreePostService';
import '../review/Review.css';

class FreepostViewingPage extends Component {
    constructor(props) {
        super(props);

         
        this.state = { 
            pid: this.props.match.params.pid,
            Freepost: {}
        }
        this.goToPEdit=this.goToPEdit.bind(this);
    }

   
    componentDidMount() {
        FreePostService.getOnePost(this.state.pid).then( res => {
            this.setState({FreePost: res.data});
        });
    }

  

    returnDate(cTime, uTime) {
        return (
            <div className = "row">
                <label>생성일 : [ {cTime} ] / 최종 수정일 : [ {uTime} ] </label>
            </div>
        )
    }

    goToList() {
        this.props.history.push('/post');
    }
    goToPEdit= (event)=>{
        event.preventDefault();
        this.props.history.push(`/post/update/${this.state.pid}`);
           
    }
    deleteFreepost = async function () {
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
    render() {
        return (
            <div className = "container">
      
                <div className = "card col-md-6 offset-md-3">
                    <h2 className ='reviewnaming'> 조회 페이지</h2>
                    <div className = "card-body">
                    <div className='form-design2'>    
                          
                            <div className = "row">      
                               
                                <label className="labels"> 제목 </label>  <div className='contentbox'> {this.state.Freepost.title} </div>
                            </div>

                            <div className = "row">
                                <label className="labels"> Contents </label>  <div className='contentbox'> {this.state.Freepost.content} </div>
                            </div >
                            
                            

                            {/*this.returnDate(this.state.Posts.createdTime, this.state.Posts.updatedTime) */}
                            
                            <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
                            <button className="btn--primary" onClick={this.goToPEdit} style={{marginTop:"100px", marginLeft:"10px"}}>수정하기</button>
                            <button className="btn--primary" onClick={()=> this.deletePost()} style={{marginTop:"100px", marginLeft:"10px"}}>삭제하기</button>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default FreepostViewingPage;