import React,{Component} from 'react';
import ReviewService from './ReviewService';
import './Review.css';
import axios from 'axios';

class WritingPage extends Component{
    constructor(props) {
    super(props);

    this.state = {
        id: this.props.match.params.id,
        subjectName:'',
        univName:'',
        professor:'',
        semestery:'',
        semesters:'',
        testType:'',
        content:'',
        rating:1,
        nickname: '',
   

    }

    this.changesubjectNameHandler = this.changesubjectNameHandler.bind(this);
    this.changeunivNameHandler = this.changeunivNameHandler.bind(this);
    this.changeprofessorHandler = this.changeprofessorHandler.bind(this);
    this.changesemesteryHandler = this.changesemesteryHandler.bind(this);
    this.changesemestersHandler = this.changesemestersHandler.bind(this);
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
changesemesteryHandler = (event) => {
    this.setState({semestery: event.target.value});
}
changesemestersHandler = (event) => {
    this.setState({semesters: event.target.value});
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
        semester:this.state.semestery+"-"+this.state.semesters,
        testType:this.state.testType,
        content:this.state.content,
        rating:this.state.rating,
        nickname:localStorage.getItem('user'),
    };

    


    if (!this.state.id) {

        ReviewService.createReview(Review).then(res => {
            this.props.history.push('/review');
            console.log("새로운 Review=> "+ JSON.stringify(Review)+this.state.id);
        });



    } else {
        ReviewService.updateReview(this.state.id, Review).then(res => {
            this.props.history.push(`/review/${this.state.id}`);
            console.log("수정 후 새로운 Review=> "+ JSON.stringify(Review)+this.state.id);
        });
    } 
        
}

cancel() {
    this.props.history.push('/review');
}

getTitle() {

    if (!this.state.id) {
        return <h2 className="reviewnaming">새 글을 작성해주세요</h2>
    } else {
        return <h2 className="reviewnaming">글을 수정합니다</h2>
    }
}

componentDidMount() {
  
    if (!this.state.id ) {

        return
    } else {
        ReviewService.getOneReview(this.props.match.params.id).then( (res) => {
            let Review = res.data;
            console.log("수정 전 원래 Review => "+ JSON.stringify(Review));
            
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
                                <select placeholder="type" name="type"  className = "select-group"
                                        value={this.state.semestery} onChange={this.changesemesteryHandler}>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                </select>
                                <select placeholder="type" name="type"  className = "select-group"
                                        value={this.state.semesters} onChange={this.changesemestersHandler}>
                                        <option value="1학기">1학기</option>
                                        <option value="여름계절">여름계절</option>
                                        <option value="2학기">2학기</option>
                                        <option value="겨울계절">겨울계절</option>
                                </select>
                            
                                </div>
                                <div className = "form-group">
                                <label className="labels"> 시험유형  </label>

                                        
                                  <input type="text" placeholder="시험유형" name="testType" className="form-control" 
                                     value={this.state.testType} onChange={this.changetestTypeHandler}/> 
                            </div> 
                                
                                   <div className = "form-group">
                                       
                                        <label className="labels"> 평점  </label>                
                                        <select placeholder="type" name="type" className = "select-group"
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