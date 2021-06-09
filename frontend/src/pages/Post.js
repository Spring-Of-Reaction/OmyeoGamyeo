import React,{Component}  from 'react';
import PostWritingPage from '../post/FreePostWritingPage';
import PostListPage from '../post/FreePostListPage';
import PostListPage1 from '../post/FreePostListPage1';
import PostListPageS1 from '../post/FreePostListPageS1';
import PostListPageS2 from '../post/FreePostListPageS2';
import PostListPage2 from '../post/FreePostListPage2';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostViewingPage from '../post/FreePostViewingPage';
import notice from '../pages/Notice';
import Navbar from '../components/Navbar';

function Post() 


    {
        return (
         <> <Navbar/>       
        <Switch>
        <Route exact path='/post' component={PostListPage} />
        <Route path='/post/category/1' component={PostListPage1} />
        <Route path='/post/category/2' component={PostListPage2} />
        <Route path='/post/create' component={PostWritingPage} />
        <Route path='/post/update/:pid' component={PostWritingPage} />
        <Route path='/post/search/title/:keywords' component={PostListPageS1} />
        <Route path='/post/search/content/:keywords' component={PostListPageS2} />
        <Route path='/post/:pid' component={PostViewingPage} />
        </Switch>
          </>
          
        )
      }
 


export default Post;

