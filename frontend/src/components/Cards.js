import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>오며가며의 서비스는 아래와 같습니다!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='review.png'
              text='학점 교류를 다녀온 학교의 강의 후기를 남기고 
              학점교류를 희망하는 학생에게 도움이 되어 주세요!'
              label='강의후기'
              path='/review'
            />
            <CardItem
              src='notice.png'
              text='각 학교별 학점교류생을 위한 공지사항을 알려줍니다!'
              label='학교별 공지사항'
              path='/notice'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='board.png'
              text='학점 교류생들 간 꿀팁을 공유하고 일상/질문 글을 남겨보아요!'
              label='자유게시판'
              path='/post'
            />
            <CardItem
              src='path.png'
              text='마이페이지에서 나만의 정보를 관리해요!'
              label='마이페이지'
              path='/find'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;