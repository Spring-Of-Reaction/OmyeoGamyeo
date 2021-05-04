import React from 'react';
import { Link } from 'react-router-dom';

function FreeListPage() {
  return (
  
      <div className='Post'>
      <div className='PostListpage'> 자유게시판의 목록 페이지 입니다.</div>
      <Link to="/post/writingpage"> <button> 글을쓰러가기 </button></Link>
      <Link to="/post/viewingpage"> <button> 글을보러가기 </button></Link>
      </div>
  )
}

export default FreeListPage;