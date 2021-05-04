import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FindPage from './pages/FindPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import Post from './pages/Post';
import Header from './components/Header';
import Footer from './components/Footer';
import Notice from './pages/Notice';
import ReviewPage from './pages/Review';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <>
    
      <Router>
      <Route component={Header} /> 
      <div className='body'>
        <Switch>
        <Route exact path='/' component={MainPage} />
          <Route path='/post' component={Post} />
          <Route path='/find' component={FindPage} />
          <Route path='/mypage' component={MyPage} />
          <Route path='/notice' component={Notice} />
          <Route path='/review' component={ReviewPage} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route render={() => <div className='error'>에러 페이지</div>} />
        </Switch>
        </div>
      <Route component={Footer} />
      </Router>
    </>
  );
}

export default App;