import React,{Component}  from 'react';
import PostWritingPage from '../post/FreeWritingPage';
import PostListPage from '../post/FreeListPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostViewingPage from '../post/FreeViewingPage';

function Post() 


    {
        return (
       
            
        <Switch>
        <Route exact path='/post' component={PostListPage} />
        <Route path='/post/writingpage' component={PostWritingPage} />
        <Route path='/post/viewingpage' component={PostViewingPage} />
        </Switch>

          
        )
      }
 


export default Post;

