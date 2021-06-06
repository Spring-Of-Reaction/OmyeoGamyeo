import React from 'react';
import { Link } from 'react-router-dom';
import './mypage.css';
import user from '../components/user.png'



function MyPage() {
  console.log(localStorage.getItem('nickname'));
  return (
  
      <div className='container' >
      <h2 class='reviewnaming' >마이페이지</h2>
      <div className='my'><img  src={user} width='200' height='180'/></div>
      <div className='my'>{localStorage.getItem('nickname')?localStorage.getItem('nickname')+'님':' '}</div>
      
      <ul className='cc'>

        <li><Link to={localStorage.getItem('nickname')?'/mypage/post':'/login'}><button className='mymy'><h2>내가 쓴 글</h2></button></Link></li>
        <li><Link to={localStorage.getItem('nickname')?'/mypage/scrap':'/login'}><button className='mymy'><h2>스크랩 한 글</h2></button></Link></li>
        <li><Link to={localStorage.getItem('nickname')?'/mypage/inform':'/login'}><button className='mymy'><h2>내 정보</h2></button></Link></li>
      </ul>
      </div>
        
  )
}

export default MyPage;