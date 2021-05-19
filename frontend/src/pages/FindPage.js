import React from 'react';
import '../review/Review.css';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';  
{/*function getLocation() {
  if (navigator.geolocation) { // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords); // lat lng을 통해 좌표값을 얻어옵니다.
    }, function (error) {
      console.error(error);
    }, {
      enableHighAccuracy: false,
      maximumAge: 0,
      timeout: Infinity
    });
  } else {
    alert('NoGPS');
  }
}*/}



function FindPage() {
  return (
    <div class='container'>
      <div className='map'>
      <RenderAfterNavermapsLoaded
      ncpClientId={'5bq5fdsx8a'} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
      >
      
      <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '50%', // 네이버지도 가로 길이
        height: '70vh' // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
      defaultZoom={13} // 지도 초기 확대 배율
      />

      </RenderAfterNavermapsLoaded>
      <div className='find'></div></div>
    </div>
  );
}

export default FindPage;