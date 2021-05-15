import React,{Component}  from 'react';
import PostWritingPage from '../post/FreePostWritingPage';
import PostListPage from '../post/FreePostListPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostViewingPage from '../post/FreePostViewingPage';

function Post() 


    {
        return (
       
            
        <Switch>
        <Route exact path='/api/post' component={PostListPage} />
        <Route path='/api/post/writingpage/:pid' component={PostWritingPage} />
        <Route path='/api/post/:pid' component={PostViewingPage} />
        </Switch>

          
        )
      }
 


export default Post;

