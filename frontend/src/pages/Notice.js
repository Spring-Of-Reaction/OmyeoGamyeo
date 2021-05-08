import React,{Component} from 'react';
import ToDoList from '../notice/ToDoList';


class Notice extends Component {
    id = 4;
    state = {
      toDoList: [
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
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 6,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 7,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 8,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 9,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 10,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 11,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 12,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 13,
          text: '강원대학교',
          text2: " http://www.kangwon.ac.kr/",
          
        },
        {
          id: 14,
          text: '서울대학교',
          text2: " http://www.snu.ac.kr/",
        },
        {
          id: 15,
          text: '숙명여자대학교',
          text2: "http://www.sookmyung.ac.kr/",
        },
        {
          id: 16,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 17,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 18,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 19,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 20,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 21,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 22,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 23,
          text: '세종대학교',
          text2: "http://www.sejong.ac.kr/",
        },
        {
          id: 24,
          text: '희진',
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
      const { toDoList, search } = this.state;
      return (
        <div className= 'notice'>
            <input value={search} name="search" onChange={this.handleSearch} placeholder=" ..학교 이름을 검색하세요" />
            <ToDoList
                data={toDoList.filter((data) => data.text.indexOf(search) !== -1)}
            />
            
    </div>
      );
    }
  }

export default Notice;