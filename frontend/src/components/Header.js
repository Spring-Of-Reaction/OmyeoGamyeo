import React  from 'react';
import { Link } from 'react-router-dom';

function Header({ location, history }) {

    const navStyle = {
        textDecoration: 'none',
        color: 'black'
      }

  return (
    <header className='header'>
      {/*<strong>강의후기</strong>*/}
      


      <ul>
        <li><Link style={navStyle} to='/'><h3>ㅇㅁ<br/>ㄱㅁ</h3></Link></li>
        <li><Link style={navStyle} to='/review'><h3>강의후기</h3></Link></li>
        <li><Link style={navStyle} to='/post'><h3>자유게시판</h3></Link></li>
        <li><Link style={navStyle} to='/find'><h3>학점교류 학교 길찾기</h3></Link></li>
        <li><Link style={navStyle} to='/notice'><h3>학교별 공지사항</h3></Link></li>
        <li><Link style={navStyle} to='/mypage'><h3>마이페이지</h3></Link></li>
        <li><Link style={navStyle} to='/login'><h3>로그인</h3></Link></li>
        <li><Link style={navStyle} to='/signup'><h3>회원가입</h3></Link></li>
        
      </ul>

      {/*
      <ul>
        <li>
        <Link style={navStyle} to='/'><h3>강의후기</h3></Link>
        </li>
        <Link style={navStyle} to='/aboutme'>
        <h3>About Me</h3>
      </Link>
        <li>
          <Link to='/profile'>자유게시판</Link>
        </li>
        <li>
          <Link to='/sign'>학점교류 학교 길찾기</Link>
        </li>
        <li>
          <Link to='/my'>학교별 공지</Link>
        </li>
      </ul>*/}
      
      
    </header>
  );
}

export default Header;
