import React,{Component} from 'react';
import FreepostService from './FreePostService';

class FreepostWritingPage extends Component{
    constructor(props){
        
    super(props);
    this.state = {
        title:'',
        content:'',
        date:0,
        category:0,
        views:'',
        filename:'',
        filepath:'',
        nickname:'',
        
    }

    this.changetitleHandler = this.changetitleHandler.bind(this);
    this.changecontentHandler = this.changecontentHandler.bind(this);
    this.changedateHandler = this.changedateHandler.bind(this);
    this.changecategoryHandler = this.changecategoryHandler.bind(this);
    this.changeviewsTypeHandler = this.changeviewsHandler.bind(this);
    this.changefilenameHandler = this.changefilenameHandler.bind(this);
    this.changefilepathHandler = this.changefilepathHandler.bind(this);
    this.changenicknameHandler = this.changenicknameHandler.bind(this);
    this.createPost=this.createPost.bind(this);
}

cancel() {
    this.props.history.push('/post');
}

 

changetitleHandler = (event) => {
    this.setState({title: event.target.value});
}
changecontentHandler = (event) => {
    this.setState({content: event.target.value});
}
changedateHandler = (event) => {
    this.setState({date: event.target.value});
}
changecategoryHandler = (event) => {
    this.setState({category: event.target.value});
}
changeviewsHandler = (event) => {
    this.setState({views: event.target.value});
}
changefilenameHandler = (event) => {
    this.setState({filename: event.target.value});
}

changefilepathHandler = (event) => {
    this.setState({filepath: event.target.value});
}
changenicknameHandler = (event) => {
    this.setState({nickname: event.target.value});
}


createPost = (event) => {
    event.preventDefault();
    let Freepost = {
        title:this.state.title,
        content:this.state.content,
        date:this.state.date,
        category:this.state.category,
        views:this.state.views,
        filename:this.state.filename,
        filepath:this.state.filepath,
        nickname:this.state.nickname,
    };
    
    console.log("Freepost => "+ JSON.stringify(Freepost));

    FreepostService.createPost(Freepost).then(res => {
        this.props.history.push('/post');
    });
    
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
                                    <label> Type </label>
                                    <select placeholder="type" name="type" className="form-control" 
                                   >
                                        <option value="1">일상</option>
                                        <option value="2">질문</option>
                                    </select>
                                </div>
                                <div className = "form-group">
                                    <label> 제목 </label>
                                    <input type="text" placeholder="title" name="title" className="form-control" 
                                   />
                                </div>
                                <div className = "form-group">
                                        <label> 내용  </label>
                                        <textarea placeholder="" name="content" className="form-control" 
                                        />
                                    </div>
                                    <button className="btn btn-success" onClick={this.createPost} style={{marginLeft:"10px"}}>등록</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>취소</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}}

export default FreepostWritingPage;




