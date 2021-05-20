import React from 'react';
import { Link } from 'react-router-dom';



function MyPage() {
  return (
  
      <div className='container' >
      <div>마이 페이지 입니다.</div>
      <ul>
        <li><Link to='/mypage/scraps'><h3>스크랩 한 글</h3></Link></li>
        <li><Link to='/mypage/mylist'><h3>내가 쓴 글</h3></Link></li>
        <li><Link to='/mypage/Inform'><h3>내 정보</h3></Link></li>
      </ul>
      </div>
        
  )
}

export default MyPage;