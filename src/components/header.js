import React from 'react';
import './header.css'
function Header() {
  return <div className='Header__Container'>
     
            <ul className='list'>
                <li><a href="/">Home</a></li>
                <li><a href="/todolist">ToDo List</a></li>
                <li><a href="">About</a></li>

            </ul>
  
  </div>;
}

export default Header;
