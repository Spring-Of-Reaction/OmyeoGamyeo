import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mypagemain from '../mypage/Mypagemain';
import Scraplist from '../mypage/Scraplist';
import Mylist from '../mypage/Mylist';
import Inform from '../mypage/Inform';
import MypageScrapView from '../mypage/MypageScrapView';
import MylistFreePost from '../mypage/MylistFreePost';
import MylistReview from '../mypage/MylistReview';
import InformUpdate from '../mypage/InformUpdate';
import Navbar from '../components/Navbar';


function MyPage() {
  return (
  
      <div>
      <Navbar/>
      <Switch>
        <Route exact path='/mypage' component={Mypagemain} />
        <Route path='/mypage/review/:id' component={MylistReview} />
        <Route path='/mypage/scrap/:id' component={MypageScrapView} />
        <Route path='/mypage/scrap' component={Scraplist} />
        <Route path='/mypage/post/:pid' component={MylistFreePost} />
        <Route path='/mypage/post' component={Mylist} />
        <Route path='/mypage/inform/update' component={InformUpdate} />
        <Route path='/mypage/inform' component={Inform} />
        </Switch>
      </div>
      
  )
}

export default MyPage;