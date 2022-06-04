import React from 'react';
import './Products.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { FaChevronCircleRight } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Data from './Data.js'
function Products() {
    return (
        <div className="productseaction">
          
            <div className="productsectionheader">
            </div>
            
                  <div className="productsbodyheader">
                  <h2>Laptop Collection</h2>
                  </div>
                <Carousel 
                swipeable={false}
                 renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
             at   type="button"
                onClick={onClickHandler}
                title={label}
                style={{ 
                  position:'absolute',
                  top:'230px',
                  right:"93%",
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
                    
{Data.slice(0,6).map(data => (
<Link to={`/Description/${data.Id}`}>
<div class="productcard">
  <img src={data.image[0]} alt={data.LaptopName} className="productcardimage"/>
  <div className='pricing-details'>
  <p className="productprice">Ksh{data.price}</p>
  <p className="productdescription">{data.LaptopName}</p>
</div>
</div>
</Link>
))}
</div>
<div>
{Data.slice(6,12).map(data => (
<Link to={`/Description/${data.Id}`}>
<div class="productcard">
<img src={data.image[0]} alt={data.LaptopName} className="productcardimage"/>
<div className='pricing-details'>
  <p className="productprice">Ksh{data.price}</p>
  <p className="productdescription">{data.LaptopName}</p>
</div>
</div>
</Link>
))}
</div>

</Carousel>
            
            <div className="productsbodycontainer">  
            <div className="productsbodyheader">
                  <h2>Desktop Collection</h2>
                  </div>
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
                    
                {Data.slice(12,18).map(data => (
<Link to={`/Description/${data.Id}`}>
<div class="productcard">
  <img src={data.image[0]} alt={data.LaptopName} className="productcardimage"/>
  <div className='pricing-details'>
  <p className="productprice">Ksh {data.price}</p>
  <p className="productdescription">{data.LaptopName}</p>
  </div>
  </div>

</Link>
))}
</div>
<div>
{Data.slice(18,24).map(data => (
<Link to={`/Description/${data.Id}`}>
<div class="productcard">
  <img src={data.image[0]} alt={data.LaptopName} className="productcardimage"/>
  <div className='pricing-details'>
  <p className="productprice">{data.price}</p>
  <p className="productdescription">{data.LaptopName}</p>
</div>
</div>
</Link>
))}
</div>

</Carousel>
            </div> 
            <div className="productsbodycontainer">  
            <div className="productsbodyheader">
                  <h2>Pc Accessories</h2>
                  </div>
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
                  right: "8px",
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
                {Data.slice(24,30).map(data => (
<Link to={`/ProjectDescription/${data.Id}`}>
  
<div class="productcard">
  <img src={data.image[0]} alt={data.projectname} className="productcardimage"/>
  <div className='pricing-details'>
  <p className="productprice">{data.price}</p>
  <p className="productdescription">{data.projectname}</p>
  </div>
</div>
</Link>
))}                 

</div>
<div>
{Data.slice(30,36).map(data => (
<Link to={`/ProjectDescription/${data.Id}`}>
<div class="productcard">
  <img src={data.image[0]} alt={data.projectname} className="productcardimage"/>
  <div className='pricing-details'>
  <p className="productprice">{data.price}</p>
  <p className="productdescription">{data.projectname}</p>
</div>
</div>
</Link>
))}
</div>

</Carousel>
            </div> 

</div>

    );
}
export default Products;