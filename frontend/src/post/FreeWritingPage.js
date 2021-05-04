import React,{Component} from 'react';

class FreeWritingPage extends Component{


    constructor(props)
{
    super(props);
}
cancel() {
    this.props.history.push('/post');
}

save() {
    this.props.history.push('/post/viewingpage');
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
                                        <textarea placeholder="" name="contents" className="form-control" 
                                        />
                                    </div>
                                    <button className="btn btn-success" onClick={this.save.bind(this)} style={{marginLeft:"10px"}}>등록</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>취소</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}}

export default FreeWritingPage;


