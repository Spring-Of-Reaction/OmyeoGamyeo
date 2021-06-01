import React,{Component}  from 'react';
import '../review/Review.css';
import star from '../components/star.png';
import MypageService from './MypageService';

class MypagePostView extends Component {
    constructor(props) {
        super(props)
         
        this.state = { 
            pid: this.props.match.params.pid,
            MyPost: [],
            
        }
       
    }

    componentDidMount() {
            MypageService.getOnePost(this.state.pid).then( (res) => {
                this.setState({MyPost: res.data});
               // let MyPost = res.data;
                //console.log("Post => "+ JSON.stringify(MyPost));
                
               {/*} this.setState({
    
                    title:FreePost.title,
                    content:FreePost.content,
                    date:FreePost.date,
                    category:FreePost.category,
                    views:FreePost.views,
                    filename:FreePost.filename,
                    filepath:FreePost.filepath,
                    nickname:FreePost.nickname,
                    });*/}
            });
    }

    getrating(startcount){
        if(startcount===1){
            return <div><img src={star} width='30' height='30'/></div>
        }else if(startcount===2){
            return <div><img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/></div>
        }
        else if(startcount===3){
            return <div><img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/></div>
        }
        else if(startcount===4){
            return <div><img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/>
            <img src={star} width='30' height='30'/></div>
        }
        else{
            return <div><img src={star} width='30' height='30'/>
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
                    <h2 className='reviewnaming'> 강의 후기</h2>
                    <div className = "card-body">
                        <div className='form-design2'>
                            <div className = "row">      
                                <label className="labels" > 강의명 </label>  <div className='contentbox'>{this.state.MyPost.subjectName} </div>
                            </div>
                            <div className = "row">      
                                <label className="labels" > 학교 </label>  <div className='contentbox'>{this.state.MyPost.univName} </div>
                            </div>
                            <div className = "row">      
                                <label className="labels"  > 교수명 </label>  <div className='contentbox'>{this.state.MyPost.professor+' 교수님'} </div>
                            </div>
                            <div className = "row">      
                                <label className="labels"  > 수강학기 </label> <div className='contentbox'>{this.state.MyPost.semester} </div>
                            </div>
                            <div className = "row">      
                                <label className="labels"  > 시험유형 </label> <div className='contentbox'>  {this.state.MyPost.testType}</div>
                            </div>
                            
                            <div className = "row">
                                <label className="labels"  > 평점 </label> 
                                {this.getrating(this.state.MyPost.rating)}
                               
                            </div >
                         

                            <div className = "row">
                                <label className="labels"  > 기타 </label> <div className='contentbox'> {this.state.MyPost.content} </div>
                            </div >
                            <div className = "row">

                                <label className="labels"  > 작성자</label> <div className='contentbox'> {this.state.MyPost.nickname} </div>

                            </div>
                            
                           
                            </div> </div>
                </div>
              
            </div>
        );
    }
}

export default MypagePostView;


