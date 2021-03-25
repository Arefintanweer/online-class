import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div>

      <div className="firstHead">Learn from instructors who practice what they teach | Courses from $11.99 — last day to save!
      </div>

      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#forBusiness">For Business</a>
        <a href="#teachOnClass">Teach On Class</a>
        <a href="#login">Log in</a>
        <a href="#signup">Sign Up</a>
        <input type="text" placeholder="Search.."/>
      </div>
      
      
    </div>
    
  );
};

export default Header;