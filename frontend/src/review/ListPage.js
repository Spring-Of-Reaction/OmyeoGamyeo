import React from 'react';
import { Link } from 'react-router-dom';

function ListPage() {
  return (
  
      <div>
      <div className='Listpage'> 목록 페이지 입니다.</div>
      <Link to="/review/writingpage"> <button> 글을쓰러가기 </button></Link>
      <Link to="/review/viewingpage"> <button> 글을보러가기 </button></Link>
      </div>
  )
}

export default ListPage;