import React,{Component}  from 'react';
import ReviewService from './ReviewService';

class ViewingPage extends Component {
    constructor(props) {
        super(props);

         
        this.state = { 
            subjectName: this.props.match.params.subjectName,
            Review: {}
        }

    }

    
    componentDidMount() {
        ReviewService.getOneReview(this.state.subjectName).then( (res) => {
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

    render() {
        return (
            <div>
      
                <div className = "card col-md-6 offset-md-3">
                    <h3 className ="text-center"> 조회 페이지</h3>
                    <div className = "card-body">
                            <div className = "row">      
                               <div>{this.props.match.params.subjectName}</div>
                                <label> 과목명 </label>:{this.props.match.params.subjectName}
                            </div>

                            <div className = "row">
                                <label> Contents </label> : 
                                {this.state.Review.contents} 
                            </div >
                            <div className = "row">
                                <label> professor  </label>: 
                                {this.state.Review.professor}
                            </div>
                           
                            {this.returnDate(this.state.Review.createdTime, this.state.Review.updatedTime) }
                            
                            <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default ViewingPage;