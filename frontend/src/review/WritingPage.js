import React,{Component} from 'react';
import ReviewService from './ReviewService';
 
class WritingPage extends Component{
    constructor(props) {
    super(props);

    this.state = {
        subjectName:'',
        univName:'',
        professor:'',
        semester:'',
        testType:'',
        content:'',
        rating:0,
        nickname:'',
        
    }

    this.changesubjectNameHandler = this.changesubjectNameHandler.bind(this);
    this.changeunivNameHandler = this.changeunivNameHandler.bind(this);
    this.changeprofessorHandler = this.changeprofessorHandler.bind(this);
    this.changesemesterHandler = this.changesemesterHandler.bind(this);
   /* this.changesemestersHandler = this.changesemestersHandler.bind(this); */
    this.changetestTypeHandler = this.changetestTypeHandler.bind(this);
    this.changecontentHandler = this.changecontentHandler.bind(this);
    this.changeratingHandler = this.changeratingHandler.bind(this);
    this.changenicknameHandler = this.changenicknameHandler.bind(this);
    this.createReview=this.createReview.bind(this);

}

changesubjectNameHandler = (event) => {
    this.setState({subjectName: event.target.value});
}
changeunivNameHandler = (event) => {
    this.setState({univName: event.target.value});
}
changeprofessorHandler = (event) => {
    this.setState({professor: event.target.value});
}
changesemesterHandler = (event) => {
    this.setState({semester: event.target.value});
}
changetestTypeHandler = (event) => {
    this.setState({testType: event.target.value});
}
changecontentHandler = (event) => {
    this.setState({content: event.target.value});
}

changeratingHandler = (event) => {
    this.setState({rating: event.target.value});
}
changenicknameHandler = (event) => {
    this.setState({nickname: event.target.value});
}


createReview = (event) => {
    event.preventDefault();
    let Review = {
        subjectName:this.state.subjectName,
        univName:this.state.univName,
        professor:this.state.professor,
        semester:this.state.semester,
        testType:this.state.testType,
        content:this.state.content,
        rating:this.state.rating,
        nickname:this.state.nickname,
    };

    console.log("Review => "+ JSON.stringify(Review));

    ReviewService.createReview(Review).then(res => {
        this.props.history.push('/review');
    });
    
}

cancel() {
    this.props.history.push('/review');
}


render() {
    return (
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">새글을 작성해주세요</h3>
                        <div className = "card-body">
                            <form>
                                
                                <div className = "form-group">
                                    <label> 강의명 학교 </label>
                                    <input type="text" placeholder="강의명" name="subjectName" className="form-control" 
                                   value={this.state.subjectName} onChange={this.changesubjectNameHandler}/>

                                   <input type="text" placeholder="학교" name="univName" className="form-control" 
                                    value={this.state.univName} onChange={this.changeunivNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> 교수명  </label>
                                    <input type="text" placeholder="교수명" name="professor" className="form-control" 
                                    value={this.state.professor} onChange={this.changeprofessorHandler} />
                                </div>
                                <div className = "form-group">
                                <label> 수강학기  </label>
                                <input type="text" placeholder="수강학기" name="semester" className="form-control" 
                                     value={this.state.semester} onChange={this.changesemesterHandler}/>
                                   {/* <input type="text" placeholder="학기" name="semesters" className="form-control" 
                                    value={this.state.semesters} onChange={this.changesemestersHandler} />*/}
                                </div>
                                <div className = "form-group">
                                <label> 시험유형  </label>
                                    <input type="text" placeholder="" name="testType" className="form-control" 
                                     value={this.state.testType} onChange={this.changetestTypeHandler}/>
                                </div>
                                <div className = "form-group">
                                        <label> 기타  </label>
                                        <textarea placeholder="" name="content" className="form-control" 
                                         value={this.state.content} onChange={this.changecontentHandler}/>
                                    </div>
                                   <div className = "form-group">
                                        <label> 평점  </label>
                                        <textarea placeholder="" name="rating" className="form-control" 
                                         value={this.state.rating} onChange={this.changeratingHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 닉네임  </label>
                                        <textarea placeholder="" name="nickname" className="form-control" 
                                         value={this.state.nickname} onChange={this.changenicknameHandler}/>
                                    </div>
                                    <button  onClick={this.createReview} style={{marginLeft:"10px"}}>등록</button>
                                    <button  onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>취소</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}}

export default WritingPage;


