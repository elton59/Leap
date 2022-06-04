import React from 'react';
import './Footer.css';
import {  FaPhoneAlt,FaHeart,FaLocationArrow,FaEnvelope } from 'react-icons/fa';
function Footer() {
    return (
        <div >
       <div className='Footer'>
    <div id="waterdrop"></div>

      <div className="footer-top">
        <div className="pt-exebar">

        </div>
        <div className="">
          <div className="row">
            <div className="">
       
              <h5 className="footer-title">&copy; Copyright Leap All Rights Reserved.</h5>
                <h5 className="footer-title">ADDRESS</h5>
                <div className="footer-title"><FaLocationArrow/> Epic Towers, Mombasa, Kenya</div>
                <div className="site-navigation">
                  <p className="footer-title">CONTACT US</p>
                  <div className="footer-title"><FaPhoneAlt/>  +254 113335062
                  info@leapmortgages.com</div>
                  <div className="footer-title"><FaEnvelope/>              info@leapmortgages.com</div>
                

         
              </div>

            </div>
         
          
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="">
          <div className="row">

            <div className="col-md-3">
              <div className="footer-site-info">Developed with &nbsp; <FaHeart/> &nbsp; by Yubuntutech Solutions</div>
            </div>

           


          </div>
        </div>
      </div>
 
 

        </div>
        <div>
  
       </div>
       </div>
    );
}

export default Footer;