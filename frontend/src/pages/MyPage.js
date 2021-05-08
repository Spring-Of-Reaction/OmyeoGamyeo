import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mypagemain from '../mypage/Mypagemain';
import Scraps from '../mypage/Scraps';
import Mylist from '../mypage/Mylist';
import Inform from '../mypage/Inform';


function MyPage() {
  return (
  
      <div>
      
    <Switch>
        <Route exact path='/mypage' component={Mypagemain} />
        <Route path='/mypage/scraps' component={Scraps} />
        <Route path='/mypage/mylist' component={Mylist} />
        <Route path='/mypage/Inform' component={Inform} />
        </Switch>
      </div>
      
  )
}

export default MyPage;