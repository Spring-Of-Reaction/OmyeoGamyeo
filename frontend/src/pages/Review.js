import React,{Component}  from 'react';
import WritingPage from '../review/WritingPage';
import ListPage from '../review/ListPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewingPage from '../review/ViewingPage';
import ListPageS1 from '../review/ListPageS1';
import ListPageS2 from '../review/ListPageS2';
import Navbar from '../components/Navbar';


function Review() {
  const tempStyle={
    width:"100%",
    height:"800px",
    background:"yellow",
    display: "flex",
    }
    
  
  return (
    <div>
      <Navbar/>
        <Switch>
        <Route exact path='/review' component={ListPage} />
        <Route path='/review/create' component={WritingPage} />
        <Route path='/review/update/:id' component={WritingPage} />
        <Route path='/review/search/univ/:keywords' component={ListPageS1} />
        <Route path='/review/search/subject/:keywords' component={ListPageS2} />
        <Route path='/review/:id' component={ViewingPage} />
        </Switch>
       </div>   
  )
  
}

export default Review;