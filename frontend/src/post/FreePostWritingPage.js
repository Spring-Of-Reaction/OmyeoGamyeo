import React,{Component} from 'react';
import FreePostService from './FreePostService';
import '../review/Review.css';

class FreepostWritingPage extends Component{
    constructor(props){
    super(props);
    this.state = {
        pid: this.props.match.params.pid,
        title:'',
        content:'',
        date: new Date(),
        category:1,
        views:0,
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
    let FreePost = {
        title:this.state.title,
        content:this.state.content,
        date:this.state.date,
        category:this.state.category,
        views:this.state.views,
        filename:this.state.filename,
        filepath:this.state.filepath,
        nickname:this.state.nickname,
    };
    
    console.log("Freepost => "+ JSON.stringify(FreePost));

    if (!this.state.pid) {
        FreePostService.createPost(FreePost).then(res => {
            this.props.history.push('/post');
        });
    } else {
        FreePostService.updatePost(this.state.pid,FreePost).then(res => {
            this.props.history.push(`/post/${this.state.pid}`);
        });
        
    } 
}

getTitle() {
    if (!this.state.pid) {
        return <h2 className="reviewnaming">??? ?????? ??????????????????</h2>
    } else {
        return <h2 className="reviewnaming">?????? ???????????????</h2>
    }
}

componentDidMount() {
    if (!this.state.pid) {
        return
    } else {
        FreePostService.getOnePost(this.state.pid).then( (res) => {
            let FreePost = res.data;
            console.log("FreePost => "+ JSON.stringify(FreePost));
            
            this.setState({

                title:FreePost.title,
                content:FreePost.content,
                date:FreePost.date,
                category:FreePost.category,
                views:FreePost.views,
                filename:FreePost.filename,
                filepath:FreePost.filepath,
                nickname:FreePost.nickname,
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
                                <label className="labels"> ????????????  </label>
                                <select placeholder="type" name="category" className="select-group"
                                        value={this.state.category}  onChange={this.changecategoryHandler}>
                                            <optgroup label='??????????????? ???????????????'>
                                        
                                        <option value='1'>??????</option>
                                        <option value='2'>??????</option></optgroup>
                                        </select>
                                
                          
                                </div>
                            <div className = "form-group">
                                    <label className="labels"> ??????  </label>
                                    <input type="text" placeholder="??????" name="subjectName" className="form-control" 
                                   value={this.state.title} onChange={this.changetitleHandler}/>
                                </div>
                                <div className = "form-group">
                                <label className="labels"> ??????  </label>
                                   <input type="text" placeholder="??????" name="content" className="form-control-sub" 
                                    value={this.state.content} onChange={this.changecontentHandler}/>
                                </div>

                                
                                
                                {/*<div className = "form-group">
                                <label className="labels"> ?????????  </label>
                                    <input placeholder="?????????" name="views" className="form-control" 
                                     value={this.state.views} onChange={this.changeviewsHandler}/>
    </div>*/}
                                
                                   <div className = "form-group">
                                        <label className="labels"> ????????????  </label>
                                        <input type="file" placeholder="" name="filename" className="form-control" 
                                         value={this.state.filename} onChange={this.changefilenameHandler}/>
                                    </div>
                                   {/* <div className = "form-group">
                                        <label className="labels"> ?????????  </label>
                                        <input type="text" placeholder="" name="nickname" className="form-control" 
                                         value={this.state.nickname} onChange={this.changenicknameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label className="labels"> ????????????  </label>
                                        <input type="file" placeholder="" name="filepath" className="form-control" 
                                         value={this.state.filepath} onChange={this.changefilepathHandler}/>
</div>*/}
                                    
                                {/*
                                <div className = "form-group">
                                    <label> Type </label>
                                    <select placeholder="type" name="type" className="form-control" 
                                   >
                                        <option value="1">??????</option>
                                        <option value="2">??????</option>
                                    </select>
                                </div>
                                <div className = "form-group">
                                    <label> ?????? </label>
                                    <input type="text" placeholder="title" name="title" className="form-control" 
                                   />
                                </div>
                                <div className = "form-group">
                                        <label> ??????  </label>
                                        <textarea placeholder="" name="content" className="form-control" 
                                        />
                                </div>*/}
                                <div className = "button-group">
                                    <button className="btn--primary" onClick={this.createPost} style={{marginLeft:"10px"}}>??????</button>
                                    <button className="btn--primary" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>??????</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            
    );
}}

export default FreepostWritingPage;




