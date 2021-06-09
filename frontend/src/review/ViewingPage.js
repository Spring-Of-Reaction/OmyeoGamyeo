import React,{Component}  from 'react';
import ReviewService from './ReviewService';
import './Review.css';
import star from '../components/star.png';

class ViewingPage extends Component {
    constructor(props) {
        super(props)

         
        this.state = { 
            id: this.props.match.params.id,
            Review: [],
            background: 'white'
        }

        this.goToEdit=this.goToEdit.bind(this);
        this.reviewscrap=this.reviewscrap.bind(this);
        this.reviewlike=this.reviewlike.bind(this);
          
    }
    
    componentDidMount() {
        ReviewService.getOneReview(this.props.match.params.id).then( (res) => {
            this.setState({Review: res.data});
            console.log("Review => "+ JSON.stringify(this.state.Review)+this.state.id); 
            
        });      
      
        
    }
   


    goToList() {
        this.props.history.push('/review');
    }
   
    goToEdit= (event)=>{
        event.preventDefault();
        this.props.history.push(`/review/update/${this.state.id}`);
           
    }

    reviewscrap = (event)=>{
        if(this.state.background=='white')
        {
        this.setState({background:'rgba(193, 208, 248, 0.2)'})
        event.preventDefault();
        let userscrap={
            uid:localStorage.getItem('uid')
        };
        console.log(this.state.id,localStorage.getItem('uid')); 
        ReviewService.reviewscrap(this.state.id).then(res=>
            window.alert("스크랩이 완료되었습니다."));
        }
        else
        {
        this.setState({background:'white'})
            window.alert("스크랩이 취소되었습니다.")
        }
        
           
    }
    reviewlike = (event)=>{
        event.preventDefault();
        let userlike={
            uid:localStorage.getItem('user'),
            
        };
        ReviewService.reviewscrap(this.state.id,userlike).then(res=>
            window.alert("좋아요를 누릅니다."));
           
    }
    
    deleteReview = async function () {
        if(window.confirm("글을 삭제하시겠습니까?")){
            ReviewService.deleteReview(this.state.id).then(res=> {
                console.log("delete result=>"+JSON.stringify(res));
                if(res.status===200){
                    this.props.history.push('/review');
                }else{
                    alert("글 삭제를 실패하였습니다.");
                }
            });
        }
        
    }

    getrating(startcount){
        if(startcount===1){
            return <div className='contentbox'><img src={star} width='30' height='30'/></div>
        }else if(startcount===2){
            return <div className='contentbox'><img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/></div>
        }
        else if(startcount===3){
            return <div className='contentbox'><img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/></div>
        }
        else if(startcount===4){
            return <div className='contentbox'><img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/></div>
        }
        else{
            return <div className='contentbox'><img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/></div>
        }

    }

    usercheck(){
        if(localStorage.getItem('uid')==this.state.Review.uid){
            return <div><button className="btn--primary" onClick={this.goToEdit} style={{ marginTop:"100px",marginLeft:"10px"}}>수정하기</button>
            <button className="btn--primary" onClick={()=> this.deleteReview()} style={{marginTop:"100px", marginLeft:"10px"}}>삭제하기</button>
         </div>
        }
         else{
             return <button className= "scrapbutton" onClick={this.reviewscrap} style={{width:"100px",height:"40px",marginTop:"100px", marginLeft:"10px",backgroundColor:this.state.background}}>스크랩하기</button>
    
         }
    }

    render() {
        
        return (
            <div className = "container">
               <div className="setcenter">
                    <h2 style={{paddingTop:"70px",paddingBottom:"50px"}}>{this.state.Review.subjectName}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.Review.univName}</h2>
                            <div className = "row">
                                <label className="labels"  >  </label> <div className='contentbox'>  </div>
                            
                                <label className="labels" >  </label> <div className='contentbox'>{this.state.Review.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 작성자: {this.state.Review.nickname} </div>
                            </div >
                        <div className='form-design2'>
                            <div className = "row">      
                                <label className="labels"  > 교수명 </label>  <div className='contentbox'>{this.state.Review.professor+' 교수님'} </div>
                            </div>
                            <div className = "row">      
                                <label className="labels"  > 수강학기 </label> <div className='contentbox'>{this.state.Review.semester} </div>
                            </div>
                            <div className = "row">      
                                <label className="labels"  > 시험유형 </label><div className='contentbox'>{this.state.Review.testType}</div>
                            </div>
                            
                            <div className = "row">
                                <label className="labels"  > 평점 </label> {this.getrating(this.state.Review.rating)}
                            </div >
                            {/*{this.returnCategory(this.state.Review.rating)}*/}
                            
                            <div className = "row">
                                <label className="labels"  > 기타 </label> <div className='contentbox'> {this.state.Review.content} </div>
                            </div >
                            
                         </div>
                            
        
                           
                            {this.usercheck()}
                            </div> </div>
               
               
           
        );
    }
}

export default ViewingPage;


