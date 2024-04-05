import React , { Component } from 'react';
import './home.css'
class Home extends Component {
    state = {  } 
    render() { 
        return (
            <>

 
           <div className='main-navigation'>
            
            <ul>
            <a href="#"><li> ارتباط با ما </li></a>
            <a href="">  <li> سوالات متداول</li></a>
            <a href="">  <li> درباره ما</li></a>
            <a href="">  <li>پروژه ما </li></a>
            <a href=""> <li>خانه</li></a>
          
           
            </ul>
            <div className='logo'> <img src="mylogo.jpeg"/></div>
            </div>
           
            <div className="Home_page">
                <h1>تحولی در کسب و کار</h1>
                
            </div>

            
            </>
        );
    }
}
 
export default Home;