import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom'
function Navigation() {
    return (
        <div className="navigation">
          <Link to='/'>
          <p className="navigationlink">Home &nbsp;&nbsp;</p>
          </Link>
          <Link to='/AboutUS'>
          <p className="navigationlink">About us&nbsp;&nbsp;</p>
          </Link>
          <Link to='/SupportUS'>
          <p className="navigationlink">Support us</p> 
          </Link> 
        </div>
    );
}

export default Navigation;