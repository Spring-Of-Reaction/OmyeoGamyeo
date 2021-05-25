import React,{Component} from 'react';
import ReviewService from './ReviewService';
import './Review.css';

class WritingPage extends Component{
    constructor(props) {
    super(props);

    this.state = {
        id: this.props.match.params.id,
        subjectName:'',
        univName:'',
        professor:'',
        semester:'',
        testType:'',
        content:'',
<<<<<<< HEAD
        rating:1,
=======
        rating:0,
>>>>>>> feature/navermapapi
        nickname: new Date(),
        
    }

    this.changesubjectNameHandler = this.changesubjectNameHandler.bind(this);
    this.changeunivNameHandler = this.changeunivNameHandler.bind(this);
    this.changeprofessorHandler = this.changeprofessorHandler.bind(this);
    this.changesemesterHandler = this.changesemesterHandler.bind(this);
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

    console.log("Review sssW=> "+ JSON.stringify(Review)+this.state.id);

<<<<<<< HEAD
    if (!this.state.id) {
=======
    if (!this.state.id ) {
>>>>>>> feature/navermapapi
        ReviewService.createReview(Review).then(res => {
            this.props.history.push('/review');
        });
    } else {
        ReviewService.updateReview(this.state.id, Review).then(res => {
            this.props.history.push('/review');
        });
    } 
        
}

cancel() {
    this.props.history.push('/review');
}

getTitle() {
<<<<<<< HEAD
    if (!this.state.id) {
=======
    if (!this.state.id ) {
>>>>>>> feature/navermapapi
        return <h2 className="reviewnaming">새 글을 작성해주세요</h2>
    } else {
        return <h2 className="reviewnaming">글을 수정합니다</h2>
    }
}

componentDidMount() {
<<<<<<< HEAD
    if (!this.state.id) {
=======
    if (!this.state.id ) {
>>>>>>> feature/navermapapi
        return
    } else {
        ReviewService.getOneReview(this.state.id).then( (res) => {
            let Review = res.data;
            console.log("Review W=> "+ JSON.stringify(Review));
            
            this.setState({
                subjectName:Review.subjectName,
                univName:Review.univName,
                professor:Review.professor,
                semester:Review.semester,
                testType:Review.testType,
                content:Review.content,
                rating:Review.rating,
                nickname:Review.nickname,
                });
        });
    }
}

render() {
    return (
        <div>
            <div className = "container">
                        {this.getTitle()}
                        <div className = "card-body">
                            <form className = "form-design">
                                
                                <div className = "form-group">
                                    <label className="labels"> 강의명  </label>
                                    <input type="text" placeholder="강의명" name="subjectName" className="form-control" 
                                   value={this.state.subjectName} onChange={this.changesubjectNameHandler}/>
                                </div>
                                <div className = "form-group">
                                <label className="labels"> 학교  </label>
                                   <input type="text" placeholder="학교" name="univName" className="form-control" 
                                    value={this.state.univName} onChange={this.changeunivNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label className="labels"> 교수명  </label>
                                    <input type="text" placeholder="교수명" name="professor" className="form-control" 
                                    value={this.state.professor} onChange={this.changeprofessorHandler} />
                                </div>
                                <div className = "form-group">
                                <label className="labels"> 수강학기  </label>
                                <input type="text" placeholder="수강학기" name="semester" className="form-control" 
                                     value={this.state.semester} onChange={this.changesemesterHandler}/>
                                </div>
                                <div className = "form-group">
                                <label className="labels"> 시험유형  </label>

                                        
                                  <input type="text" placeholder="시험유형" name="testType" className="form-control" 
                                     value={this.state.testType} onChange={this.changetestTypeHandler}/> 
                            </div> 
                                
                                   <div className = "form-group">
                                       
                                        <label className="labels"> 평점  </label>                
                                        <select placeholder="type" name="type" className="form-control"
                                        value={this.state.rating} onChange={this.changeratingHandler}>
                                        <option value="1">1점</option>
                                        <option value="2">2점</option>
                                        <option value="3">3점</option>
                                        <option value="4">4점</option>
                                        <option value="5">5점</option>
                                        </select> 
                                        {/*                      
                                        <input placeholder="" name="rating" className="form-control" 
                                        value={this.state.rating} onChange={this.changeratingHandler}/>*/}

                                    </div>
                                
                                    <div className = "form-group">
                                        <label className="labels"> 기타  </label>
                                        <input placeholder="" name="content" className="form-control-sub" 
                                         value={this.state.content} onChange={this.changecontentHandler}/>
                                    </div>

                                    {/*<div className = "form-group">
                                        <label className="labels"> 닉네임  </label>
                                        <input placeholder="" name="nickname" className="form-control" 
                                         value={this.state.nickname} onChange={this.changenicknameHandler}/>
                                    </div>*/}


                                    {/*<select placeholder="type" name="type" className="form-control"
                                        value={this.state.rating} onChange={this.changeratingHandler}>
                                        <option value="1">일상</option>
                                        <option value="2">질문</option>
                                        </select>*/}

                                    <div className = "button-group">
                                    <button className="btn--primary" onClick={this.createReview} >등록</button>
                                    <button className="btn--primary" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>취소</button>
                                    </div>
                            </form>

                        </div>
                 
                              
            </div>
             </div>

        );
    }}

export default WritingPage;