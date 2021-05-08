import React,{Component}  from 'react';
import WritingPage from '../review/WritingPage';
import ListPage from '../review/ListPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewingPage from '../review/ViewingPage';


function Review() {


  return (
    
        <Switch>
        <Route exact path='/review' component={ListPage} />
        <Route path='/review/writingpage' component={WritingPage} />
        <Route path='/review/:subjectName' component={ViewingPage} />
        </Switch>



        
  )
  
}

export default Review;