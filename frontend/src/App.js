import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FindPage from './pages/FindPage';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import MyPage from './pages/MyPage';
import Post from './pages/Post';
import Footer from './components/Footer';
import Notice from './pages/Notice';
import ReviewPage from './pages/Review';
import Login from './pages/Login';
import Signup from './user/Signup';
import Email from './user/email';

function App() {
  if(localStorage.getItem('nickname')){
    localStorage.setItem('nickname',localStorage.getItem('nickname'));
  }
  return (
    
    <>
      <Router>
      <Navbar/>
        <Switch>
        <Route exact path='/' exact component={Main} />
          <Route path='/post' component={Post} />
          <Route path='/find' component={FindPage} />
          <Route path='/mypage' component={MyPage} />
          <Route path='/notice' component={Notice} />
          <Route path='/review' component={ReviewPage} />
          <Route path='/login' component={Login} />
          <Route path='/join' component={Signup} />
          <Route path='/join_email' component={Email} />
          <Route render={() => <div className='error'>에러 페이지</div>} />
        </Switch>
      <Footer/>
      </Router>
    </>
  );
}

export default App;