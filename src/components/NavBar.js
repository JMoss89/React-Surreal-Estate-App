import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <ul className='navbar-links'>
          <img className='navbar-logo' alt='surreal estate' src={'https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png'} />
          <Link className='navbar-links-item' to='/'>View Properties</Link>
          <Link className='navbar-links-item' to='/add-property'>Add a Property</Link>
      </ul>
    </div>
  )
}

export default NavBar;
