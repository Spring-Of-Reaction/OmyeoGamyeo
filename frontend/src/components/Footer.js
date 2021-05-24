import React from 'react';

import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          학점교류생을 위한 커뮤니티, 오며가며 입니다
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Quick Link</h2>
            <Link to='/review'>강의 후기</Link>
            <Link to='/post'>자유게시판</Link>
            <Link to='/find'>학교별 길찾기</Link>
            <Link to='/notice'>학점교류 공지사항</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Developers</h2>
            <Link className="dev"><a href = "https://github.com/JIAH-LEA"><i className="fab fa-github-square mr-3"></i></a> 이지아</Link> 
                <Link className="dev"><a href = "https://github.com/JIAH-LEA"><i className="fab fa-github-square mr-3"></i></a> 유지연</Link>
                <Link className="dev"><a href = "https://github.com/JIAH-LEA"><i className="fab fa-github-square mr-3"></i></a> 염희진</Link>
          </div>
        </div>
        </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src='logoimg.png' width="80px"></img>
            </Link>
          </div>
          <small class='website-rights'>Omyeogamyeo © 2021</small>
          <div class='social-icons'>          
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'>
                오며가며 시연동영상
              <i class='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;