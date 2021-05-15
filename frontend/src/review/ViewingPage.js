import React,{Component}  from 'react';
import ReviewService from './ReviewService';
import './Review.css';

class ViewingPage extends Component {
    constructor(props) {
        super(props)

         
        this.state = { 
            id: this.props.match.params.id,
            Review: []
        }

        this.goToEdit=this.goToEdit.bind(this);
          
    }
    
    componentDidMount() {
        ReviewService.getOneReview(this.props.match.params.id).then( (res) => {
            this.setState({Review: res.data});
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
        this.props.history.push('/review');
    }
   
    goToEdit= (event)=>{
        event.preventDefault();
        this.props.history.push(`/review/writingpage/${this.state.id}`);
           
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
    render() {
        
        return (
            <div className = "container">
      
                <div className = "card col-md-6 offset-md-3">
                    <h2 className='reviewnaming'> 강의 후기</h2>
                    <div className = "card-body">
                        <div className='form-design2'>
                            <div className = "row">      
                                <label className="labels" > 강의명 </label>  <div className='contentbox'>{this.state.Review.subjectName} </div>
                            </div>
                            <div className = "row">      
                                <label className="labels" > 학교 </label>  <div className='contentbox'>{this.state.Review.univName} </div>
                            </div>
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
                                <label className="labels"  > 평점 </label> <div className='contentbox'>{this.state.Review.rating} </div>
                            </div >
                            <div className = "row">
                                <label className="labels"  > 기타 </label> <div className='contentbox'> {this.state.Review.content} </div>
                            </div >
                            
                            {/*this.returnDate(this.state.Review.createdTime, this.state.Review.updatedTime) 
                            
                            <button className="btn--primary" onClick={this.goToList.bind(this)} style={{marginTop:"100px" }}>글 목록으로 이동</button>*/}
                           
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


