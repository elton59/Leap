import React from 'react';
import './Description.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaChevronCircleLeft, FaChild, FaWhatsapp } from 'react-icons/fa';
import { FaChevronCircleRight } from 'react-icons/fa';  
import ReactStars from "react-rating-stars-component" 
import './W3.css';
import {useState} from 'react';
import { useParams} from "react-router-dom";
import Data from './Data.js';

function ProjectDescription() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
   const params = useParams()
  const data = Data.find(p => p.Id == params.id)
  console.log('PARAMS::', params, data)
    return (
        <div className="descriptionsection">
          
            <div className="productsectionheader">
            </div>
            
     
            
            <div className="productsbodycontainer">  
        <div className="descriptioncardcontainer">
                <Carousel 
                swipeable={false}
                 renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ 
                  position:'absolute',
                  top:'230px',
                  right: "93%",
                  width:"40px",
                  fontSize:"20px",
                  backgroundColor:"transparent",
                  color:"black",
                  zIndex:"2"
                }}
              >
                <FaChevronCircleLeft />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position:'absolute',
                  top:'230px',
                  right: "0px",
                  width:"40px",
                  fontSize:"20px",
                  backgroundColor:"transparent",
                  color:"black"
                }}
              >
               <FaChevronCircleRight  />
              </button>
            )
          } >
                <div>
                    
 <div class="descriptioncard">
  <img src={data.image[0]} alt="lenovo" className="productcardimage"/>

</div>
</div>
<div>
                    
                    <div class="descriptioncard">
                     <img src={data.image[1]} alt={data.projectname} className="productcardimage"/>
                 
                   </div>
                   </div>
                   <div>
                   <div class="descriptioncard">
                     <img src={data.image[3]} alt={data.projectname} className="productcardimage"/>
                 
                   </div>
                   </div>
                   <div>
                    <div class="descriptioncard">
                     <img src={data.image[2]} alt={data.projectname} className="productcardimage"/>
                     
                   </div>
                   </div>
                          


</Carousel>
            </div>
     <div className="descriptioncontainer">
       <p className="description">
       <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    color="#ffd700"

    
  />
  5 stars based on 2 reviews.
         <div className="customers" >
         <th><h2 className="description">{data.projectname}<br></br></h2></th>
         <h3>Features</h3>
         <tr><td>{"</>"}</td><td>{data.feature1}</td></tr>
         <tr><td>{"</>"}</td><td>{data.feature2}</td></tr>
         <tr><td>{"</>"}</td><td>{data.feature3}</td></tr>
         <tr><td>{"</>"}</td><td>{data.feature4}</td></tr>
         <tr><td>{"</>"}</td><td>{data.feature5}</td></tr>
         <tr><td>{"</>"}</td><td>{data.feature6}</td></tr>
         <tr><td>{"Price"}</td><td>{data.price}</td></tr>
         <tr><td><a href="https://wa.me/+254741225424"><button className="descriptionbutton"><FaWhatsapp/>ORDER NOW</button></a></td><td><a href="https://chat.whatsapp.com/LdnyaN6YtjO3EKFaMq0S7Y"><button className="descriptionbutton"><FaChild/>JOIN WHATSAPP GROUP</button></a></td></tr>
      
       </div>
       {/*  
       <ul >SPECIFICATION
       <li>8 GB RAM</li>
       <li>500 GB HDD</li>
       <li>14 INCH DISPLAY</li>
       <li>CORE I5 7<sup>th</sup>GEN</li>
       <li>PERFECT BATTERY LIFE</li></ul> */}
  
       </p>
     </div>


     <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Description
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Reviews
        </button>
       
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>{data.LaptopName} </h2>
          <hr />
         
         {data.description}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="centerrevirew">
          <h2>Rate And Review </h2>
    
          <hr />
          <p>Ratings</p>
          <hr/>
          <p>Rate Product</p>
          <p className="stars"><ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"  
  /></p>
 
          <p>
            Reviews
          </p>
          <hr/>
          <p>No Reviews Yet</p>
          <p><form>
            <label>Email Address</label>
            <input type="email"/><br/>
            <label>Name</label>
            <input type="text"/><br/>
            <label>Review</label>
            <input type="text"/><br/>
            <button className="reviewbutton">Submit</button>
            </form></p>
       
        </div>

     </div>
      </div>
    </div>



             </div>

    

</div>

    );
}
export default ProjectDescription;