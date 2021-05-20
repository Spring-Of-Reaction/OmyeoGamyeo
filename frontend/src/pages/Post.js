import React,{Component}  from 'react';
import PostWritingPage from '../post/FreePostWritingPage';
import PostListPage from '../post/FreePostListPage';
import PostListPage1 from '../post/FreePostListPage1';
import PostListPage2 from '../post/FreePostListPage2';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostViewingPage from '../post/FreePostViewingPage';

function Post() 


    {
        return (
       
            
        <Switch>
        <Route exact path='/post' component={PostListPage} />
        <Route exact path='/post/category/1' component={PostListPage1} />
        <Route exact path='/post/category/2' component={PostListPage2} />
        <Route path='/post/create' component={PostWritingPage} />
        <Route path='/post/update/:pid' component={PostWritingPage} />
        <Route path='/post/:pid' component={PostViewingPage} />
        </Switch>

          
        )
      }
 


export default Post;

