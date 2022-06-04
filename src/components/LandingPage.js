import React from 'react';
import './LandingPage.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaChevronRight } from 'react-icons/fa';
import propery1 from '../assets/properties/property-1.jpg';
import elton from '../assets/profilepictures/elton.png';
import kcb from '../assets/acessories/kcb.png';
import equity from '../assets/acessories/equity.png';
import cooperative from '../assets/acessories/cooperative.png';
import Marquee from "react-fast-marquee";
import './Footer.css';
import './Notebook.css'

import {Link} from 'react-router-dom'

function LandingPage() {
    return (

<div className="properties-seaction">
    <div className="corouselsection">
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
              showDots={true}
              
              >
                    
              <div>
                <div className="">
                <div className='notebook'>

<div class="lines"></div>
<ul class="notebook-list">
  <li>Zedok Apartments</li>
  <li>Location:Kilimani</li>
  <li>Bedooms:5</li>
  <li>price ksh:300,000</li>
  
</ul>
</div>
                  <img src={propery1} alt="property1" className="corouselimage" />

                </div>
              </div>
              <div>
              <div className="">
             


<div className='notebook'>

<div class="lines"></div>
<ul class="notebook-list">
  <li>Zedok Apartments</li>
  <li>Location:Kilimani</li>
  <li>Bedooms:5</li>
  <li>price ksh:300,000</li>
  
</ul>
</div>

                  <img src={propery1} alt="property1" className="corouselimage" />

                </div>
              </div>

            

            </Carousel>
          </div>
      <div className='aboutus'>
       <div className='aboutus-header'> <h1 style={{color:'#CA1FD9'}}>Leap</h1></div>
        <h2 style={{color:'#CA1FD9'}}>East Africa's First Free Online Mortgage Market.</h2>
        <p>LEAP MORTGAGE and ESTATES is an online property and mortgage market that matches customers to mortgage contracts from various Banks, Credit Unions, Wholesale Lenders, and Government Agencies for free at the comfort of your couch while allowing them to customize the contract based on their financial status. This is done online with no paperwork.

</p>
<button className='button-primary'>Get Started </button>
      </div>
      <div className='rates-wrapper'>
      <div className='rates-header'> <h1>Discounted Rates</h1></div>
       <div className='aboutuscardimgdiv_s'>
     
           <div className='aboutuscardimg_s'>
            <div className='calculator'>
              <div className='calculator-values'>
             <h1> 1.33%</h1>
             <h1>EXPIRED</h1>
             </div>
              </div>
              <div className='calculator-button'>
              <button className='button-primary'>Find My Rate</button>
              </div>
           
           </div>
           </div>
           
           <div className='aboutuscardtext_s'>
         <h1 >Get A Discounted Rate Now</h1>
             <button className='button-primary'>Click Here</button>
               <p>We aid client to purchase properties via motgage and seller financing option .         
</p>
<p>Read More &nbsp;<FaChevronRight/></p>
          
          </div>
          </div>
          <div className='feature-a'>
     <h1>Feature Matter</h1>
     <ul>
     <li>Wrong Term</li>
      <li>High Penalties</li>
     <li>Refinance Restrictions</li>
     <li>Portability Limits</li>
<li>Auctoneer Issues</li>
<li>Insufficient Prepayed Priviledges</li>
</ul>
     </div>
     
     <div className='feature-b'>
     <h1>You Are in Control</h1>
     <ul>
     <li>Wrong Term</li>
      <li>High Penalties</li>
     <li>Refinance Restrictions</li>
     <li>Portability Limits</li>
<li>Auctoneer Issues</li>
<li>Insufficient Prepayed Priviledges</li>
</ul>
    
    </div>
    <div className='testimonies'>
      <h1>Testimonials</h1>
      <div className="corouselsection">
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
              showDots={true}
              
              >
                    
              <div>
              <div className='testimonies-image-section'>
                  <img src={elton} alt="property1" className="testimonial-image" />                  
                </div>
                <div className='testimonies-message'>
                  <div className="message-container">
  <div className="arrow">
    <div className="outer"></div>
    <div className="inner"></div>
  </div>
  <div className="message-body">
    <p>Leap is the best, when it comes to mortgage stuff!</p>
  </div>
</div>
<div className='avatar-section'>
<img src={elton} alt="elton" className="avatar"/>
                    </div>  
              </div>  
              </div>

              <div>
                <div className='testimonies-image-section'>
                  <img src={elton} alt="property1" className="testimonial-image" />                  
                </div>
                <div className='testimonies-message'>
                  <div className="message-container">
  <div className="arrow">
    <div className="outer"></div>
    <div className="inner"></div>
  </div>
  <div className="message-body">
    <p>Leap is the best, when it comes to mortgage stuff!</p>
  </div>
</div>
<div className='avatar-section'>
  <div className='avatar-image-section'>
<img src={elton} alt="elton" className="avatar"></img>
</div>
<div className='avatar-title-section'>
  John Elton 
  </div>
                    </div>  
              </div>
              </div>

             

            

            </Carousel>
          </div>
    </div>
    <div className='testimonies'>
      <h1>Our Patners</h1>
      <div className="slider-section">
         <Marquee
         ration={1000}
         background="RGB(250, 250, 250)"
         >
                    
              <div>
               
<div className='patners-avatar-section'>
<img src={kcb} alt="elton" className="patners-avatar"/>
                    </div>  
                    <div className='patners-avatar-section'>
<img src={equity} alt="elton" className="patners-avatar"/>
                    </div>  
                    <div className='patners-avatar-section'>
<img src={cooperative} alt="elton" className="patners-avatar"/>
                    </div>  
             
              </div>

              <div>
             

              </div>

             

            

              </Marquee>
          </div>
    </div>
   
</div>

    );
}
export default LandingPage;