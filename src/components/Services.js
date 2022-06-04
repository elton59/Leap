import React from 'react';
import './Services.css'
import motgage from '../assets/icons/mortgage.png';
import {  FaPhoneAlt,FaHeart,FaLocationArrow,FaEnvelope } from 'react-icons/fa';
import './Footer.css'
function Services() {
    return (
      
        <div className='service-section'>
         <div className='service-header'><h1> Our Services</h1></div>
           <div className='service-card'>
             <div className='service-card-icons'>
             <img src={motgage}/>
             </div>
             <div className='service-card-title'>
                 Mortgage
             </div>
             <div className='service-card-body'>Get a Customized mortgage now from one of our 20,000 Deals and 100+ lenders. No paperwork , No waiting for Appointments !
             </div>
             <div className='service-card-button'>
               <button className='button-primary'>Get A mortgage</button>
             </div>
             <hr/>
             <div className='service-card-footer'>
               <a href="" style={{color:'#ca1fd9',position:'relative',right:'29px'}}>Required Documents</a>
             </div>
               </div>
               <div className='service-card'>
             <div className='service-card-icons'>
             <img src={motgage}/>
             </div>
             <div className='service-card-title'>
             Mortgage Refinancing
             </div>
             <div className='service-card-body'>Refinance your mortgage today. Customize it to meet your budget!
             </div>
             <div className='service-card-button'>
               <button className='button-primary'>Get A mortgage</button>
             </div>
             <hr/>
             <div className='service-card-footer'>
               <a href="" style={{color:'#ca1fd9',position:'relative',right:'29px'}}>Required Documents</a>
             </div>
               </div>
               <div className='service-card'>
             <div className='service-card-icons'>
             <img src={motgage}/>
             </div>
             <div className='service-card-title'>
             Home Equity Credit
             </div>
             <div className='service-card-body'>Get a Home Equity Credit with the best rates in the market
             </div>
             <div className='service-card-button'>
               <button className='button-primary'>Get A mortgage</button>
             </div>
             <hr/>
             <div className='service-card-footer'>
               <a href="" style={{color:'#ca1fd9',position:'relative',right:'29px'}}>Required Documents</a>
             </div>
               </div>
               <div className='service-card'>
             <div className='service-card-icons'>
             <img src={motgage}/>
             </div>
             <div className='service-card-title'>
             Real Estate
             </div>
             <div className='service-card-body'>Get approved for affordable housing for individuals with limited budget and who cannot afford a large mortgage


             </div>
             <div className='service-card-button'>
               <button className='button-primary'>Get A mortgage</button>
             </div>
             <hr/>
             <div className='service-card-footer'>
               <a href="" style={{color:'#ca1fd9',position:'relative',right:'29px'}}>Required Documents</a>
             </div>
               </div>
              <div className='service-card-application'>
                 <h1>Why Choose Us</h1>
                <ol>
                  <li>Apply For A Mortgage In Less Than 5 Minutes</li>
                  <li>Customize It According To Your Finance</li>
                  <li>Get A Recommendation Of Multiple Rate Quotes From Different Lenders With Our Loan Matching Algorithm</li>
                  <li>Choose One</li>
                  <li>Upload Required Documents</li>
                  <li>Get Funded</li>
                  <li>Move Into Your Home</li>
                </ol>
                <h1>Consult Our Experties in </h1>
                <ul>
                  <li>Secodary Property Investments</li>
                  <li>Motgage and Debts</li>
                  <li>Property Valuation</li>
                  <li>Property Risk Insurance</li>
                  <li>Property Tax</li>
                  <li>Property Upgrade</li>
                  <li>Move Into Your Home</li>
                  <li>Property Purchase and Transfer</li>
                  <li>Eco-Friendly Constructor(s)</li>
                  <li>Property Laws
</li>
                </ul>
              </div>
             
              
              </div>
              
         

    );
}

export default Services;