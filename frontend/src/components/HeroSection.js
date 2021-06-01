import React, { createFactory } from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection(){ 
    return(
        <div className= 'hero-container'>
            <h1>학점 교류생을 위한 커뮤니티</h1>
            <div className='together'>
            <p>오며가며</p>
            <img src="school.png" width="100" height="120"></img>
        </div>
        </div>

    )
}

export default HeroSection
