import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mypagemain from '../mypage/Mypagemain';
import Scraplist from '../mypage/Scraplist';
import Mylist from '../mypage/Mylist';
import Inform from '../mypage/Inform';
import MypageScrapView from '../mypage/MypageScrapView';
import MypagePostView from '../mypage/MypagePostView';
import InformUpdate from '../mypage/InformUpdate';


function MyPage() {
  return (
  
      <div>
      
      <Switch>
        <Route exact path='/mypage' component={Mypagemain} />
        
        <Route path='/mypage/scrap' component={Scraplist} />
        <Route path='/mypage/post' component={Mylist} />
        <Route path='/mypage/inform/update' component={InformUpdate} />
        <Route path='/mypage/inform' component={Inform} />
        <Route path='/mypage/post/:pid' component={MypagePostView} />
        <Route path='/mypage/scrap/:sid' component={MypageScrapView} />
        </Switch>
      </div>
      
  )
}

export default MyPage;