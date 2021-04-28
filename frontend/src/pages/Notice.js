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
        <div>
            <input value={search} name="search" onChange={this.handleSearch} placeholder=" ..검색" />
            <ToDoList
                data={toDoList.filter((data) => data.text.indexOf(search) !== -1)}
            />
            
    </div>
      );
    }
  }

export default Notice;