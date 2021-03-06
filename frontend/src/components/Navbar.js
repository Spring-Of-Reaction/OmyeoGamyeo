import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';




function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

    window.addEventListener('resize', showButton);

  

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src="logoimg.png" width="80"/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <li className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/review' className='nav-links' onClick={closeMobileMenu}>
                            강의후기
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/post' className='nav-links' onClick={closeMobileMenu}>
                            자유게시판
                        </Link>
                    </li>
                    
                    
                    <li className='nav-item'>
                        <Link to='/notice' className='nav-links' onClick={closeMobileMenu}>
                            학교별 공지사항
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/mypage' className='nav-links' onClick={closeMobileMenu}>
                            마이페이지
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/user/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                            로그인
                        </Link>
                    </li> 
                    <li className='nav-item'>
                        
                    </li> 
                </ul>
                {button && <Button buttonStyle='btn--outline'></Button>}

                {/*{localStorage.getItem('nickname')?'로그아웃':'로그인'}*/}
            </div>
        </nav>
        </>
    );
}

export default Navbar
