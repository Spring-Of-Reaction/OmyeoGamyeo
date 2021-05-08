import React,{Component}  from 'react';
import PostService from './FreePostService';

class FreepostViewingPage extends Component {
    constructor(props) {
        super(props);

         
        this.state = { 
            title: this.props.match.params.title,
            Posts: {}
        }

    }

   
    componentDidMount() {
        PostService.getOnePost(this.state.title).then( res => {
            this.setState({Posts: res.data});
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
        this.props.history.push('/post');
    }

    render() {
        return (
            <div>
      
                <div className = "card col-md-6 offset-md-3">
                    <h3 className ="text-center"> 조회 페이지</h3>
                    <div className = "card-body">
                            
                          
                            <div className = "row">      
                               
                                <label> 제목 </label> : {this.state.Posts.title}
                            </div>

                            <div className = "row">
                                <label> Contents </label> : 
                                {this.state.Posts.contents} 
                            </div >
                            

                            {this.returnDate(this.state.Posts.createdTime, this.state.Posts.updatedTime) }
                            
                            <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default FreepostViewingPage;