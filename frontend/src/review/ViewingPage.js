import React,{Component}  from 'react';
import ReviewService from './ReviewService';
import './Review.css';
import star from '../components/star.png';

class ViewingPage extends Component {
    constructor(props) {
        super(props)

         
        this.state = { 
            id: this.props.match.params.id,
            Review: []
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
        event.preventDefault();
        let userscrap={
            uid:localStorage.getItem('user')
        };
        ReviewService.reviewscrap(this.state.id,userscrap).then(res=>
            window.alert("스크랩이 완료되었습니다."));
           
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
    render() {
        
        return (
            <div className = "container">
                
                <div className = "card col-md-6 offset-md-3">
                    <h2 className ='reviewnaming2'>{this.state.Review.subjectName}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.Review.univName}</h2>
                    <div className = "card-body">
                        <div className='form-design2'>
                           {/* <div className = "row">      
                                <label className="labels" > 강의명 </label>  <div className='contentbox'>{this.state.Review.subjectName} </div>
                            </div>
                            <div className = "row">      
                                <label className="labels" > 학교 </label>  <div className='contentbox'>{this.state.Review.univName} </div>
        </div>*/}
                            <div className = "row">      
                                <label className="labels"  > 교수명 </label>  <div className='contentbox'>{this.state.Review.professor+' 교수님'} </div>
                            </div>
                            <div className = "row">      
                                <label className="labels"  > 수강학기 </label> <div className='contentbox'>{this.state.Review.semester} </div>
                            </div>
                            <div className = "row">      
                                <label className="labels"  > 시험유형 </label> <div className='contentbox'>  {this.state.Review.testType}</div>
                            </div>
                            
                            <div className = "row">
                                <label className="labels"  > 평점 </label> 
                                {this.getrating(this.state.Review.rating)}
                               
                            </div >
                            {/*{this.returnCategory(this.state.Review.rating)}*/}

                            <div className = "row">
                                <label className="labels"  > 기타 </label> <div className='contentbox'> {this.state.Review.content} </div>
                            </div >
                            {/*
                            <div className = "row">

                                <label className="labels"  > 작성자</label> <div className='contentbox'> {this.state.Review.nickname} </div>

                            </div>*/}
                            
        
                           <button className="btn--primary" onClick={this.reviewscrap} style={{marginTop:"100px", marginLeft:"10px"}}>스크랩하기</button>
                           <button className="btn--primary" onClick={this.reviewlike} style={{marginTop:"100px", marginLeft:"10px"}}>좋아요</button>
                            <button className="btn--primary" onClick={this.goToEdit} style={{marginTop:"100px", marginLeft:"10px"}}>수정하기</button>
                            <button className="btn--primary" onClick={()=> this.deleteReview()} style={{marginTop:"100px", marginLeft:"10px"}}>삭제하기</button>
                            </div> </div>
                </div>
                {/*<td width="500px"> <a onClick = {() => this.readReview(Review.id)}>{Review.univName}</a> </td>*/}
            </div>
        );
    }
}

export default ViewingPage;


