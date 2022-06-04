import React, { useState } from 'react';
import './Navigation.css';
import leap from '../../src/assets/logo/leap.png'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Navigation() {

  const [sidebar, setSidebar] = useState(false);
  const [menuicon, setMenuIcon] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar);
    setMenuIcon(!menuicon);
  };
  return (
    <>
      <div className='navbar navbar-default fixed-top'>
        <div className='navbar-brand'>
          <div className='header-icon' onClick={showSidebar}>
            {menuicon ? <AiOutlineClose /> : <FaBars />}
          </div>
          <div>
            <img src={leap} alt="leap" className='headerimg' />
          </div>
        </div>



        <ul className={sidebar ? 'navbar-nav' : 'navbar-nav-active'}>
          <Link to='/' className='nav-link'>
            <li className="nav-item active" onClick={showSidebar}>Home &nbsp;&nbsp;</li>
          </Link>
          <Link to='/Rates' className='nav-link'>
            <li className="nav-item" onClick={showSidebar}>View Rates&nbsp;&nbsp;</li>
          </Link>
          <Link to='/Services' className='nav-link'>
            <li className="nav-item" onClick={showSidebar}>Services</li>
          </Link>
          <Link to='/Properties' className='nav-link' onClick={showSidebar}>
            <li className="nav-item" onClick={showSidebar}>Properties</li>
          </Link>
          <Link to='/ListProperty' className='nav-link'>
            <li className="nav-item" onClick={showSidebar} >List Your Properties</li>
          </Link>
          <a href="https://leapmortgages.com/profile/login" className='nav-link'>
            <button className='button-primary2'>Login</button>
          </a>
        </ul>


      </div>
    </>
  );
}

export default Navigation;