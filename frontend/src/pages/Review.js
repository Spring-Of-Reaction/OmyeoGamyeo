import React,{Component}  from 'react';
import WritingPage from '../review/WritingPage';
import ListPage from '../review/ListPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewingPage from '../review/ViewingPage';


function Review() {
  const tempStyle={
    width:"100%",
    height:"800px",
    background:"yellow",
    display: "flex",
    }
    
  
  return (
    <div>
        <Switch>
        <Route exact path='/review' component={ListPage} />
        <Route path='/review/writingpage/:id' component={WritingPage} />
        <Route path='/review/:id' component={ViewingPage} />
        </Switch>
       </div>   
  )
  
}



export default Review;