import React from 'react';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <ul className='navbar-links'>
          <img className='navbar-logo' alt='surreal estate' src={'https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png'} />
          <li className='navbar-links-item'>View Properties</li>
          <li className='navbar-links-item'>Add a Property</li>
      </ul>
    </div>
  )
}

export default NavBar;
