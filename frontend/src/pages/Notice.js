import React,{Component} from 'react';
import UnivList from '../notice/UnivList';
import '../review/Review.css';

class Notice extends Component {
    id = 4;
    state = {
      univList: [
        {
          id: 1,
          text: '강원대학교',
          text2: " http://www.kangwon.ac.kr/",
          
        },
        {
          id: 2,
          text: '서울대학교',
          text2: " http://www.snu.ac.kr/",
        },
        {
          id: 3,
          text: '숙명여자대학교',
          text2: "http://www.sookmyung.ac.kr/",
        },
        {
          id: 4,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 5,
          text: '가톨릭대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 6,
          text: '건국대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 7,
          text: '경남대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 8,
          text: '경북대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 9,
          text: '경희대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 10,
          text: '계명대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 11,
          text: '고려대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 12,
          text: '광운대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 13,
          text: '국민대학교',
          text2: " http://www.kangwon.ac.kr/",
          
        },
        {
          id: 14,
          text: '대구대학교',
          text2: " http://www.snu.ac.kr/",
        },
        {
          id: 15,
          text: '동국대학교',
          text2: "http://www.sookmyung.ac.kr/",
        },
        {
          id: 16,
          text: '동아대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 17,
          text: '동덕여자대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 18,
          text: '명지대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 19,
          text: '부경대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 20,
          text: '부산대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        
        {
          id: 23,
          text: '삼육대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 24,
          text: '상명대학교',
          text2: "http://www.sejong.ac.kr/",
        },
      ],
      search: '',
    };
  
   
    handleSearch = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    render() {
      const { univList, search } = this.state;
      return (
        <div class='container'>
        <div className= 'notice'>
            <input className= 'searchbar' value={search} name="search" onChange={this.handleSearch} placeholder="    학교 이름을 검색하세요" />
            <UnivList
                data={univList.filter((data) => data.text.indexOf(search) !== -1)}
            />
    </div>
    </div>
      );
    }
  }

export default Notice;