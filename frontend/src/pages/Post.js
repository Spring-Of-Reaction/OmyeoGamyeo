import React,{Component}  from 'react';
import PostWritingPage from '../post/FreePostWritingPage';
import PostListPage from '../post/FreePostListPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostViewingPage from '../post/FreePostViewingPage';

function Post() 


    {
        return (
       
            
        <Switch>
        <Route exact path='/post' component={PostListPage} />
        <Route path='/post/writingpage' component={PostWritingPage} />
        <Route path='/post/:title' component={PostViewingPage} />
        </Switch>

          
        )
      }
 


export default Post;

