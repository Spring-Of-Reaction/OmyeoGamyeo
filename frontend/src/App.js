import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FindPage from './pages/FindPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import Free from './pages/Free';
import Header from './components/Header';
import Footer from './components/Footer';
import Notice from './pages/Notice';
import ReviewPage from './pages/ReviewPage'

function App() {
  return (
    <>
      <Router>
      <Route path='/' component={Header} />
     {/* <Nav/>*/}
        <Switch>
        <Route exact path='/' component={MainPage} />
          <Route path='/free' component={Free} />
          <Route path='/find' component={FindPage} />
          <Route path='/mypage' component={MyPage} />
          <Route path='/notice' component={Notice} />
          <Route path='/review' component={ReviewPage} />
          <Route render={() => <div className='error'>에러 페이지</div>} />
        </Switch>
        <Route path='/' component={Footer} />
      </Router>
    </>
  );
}

export default App;