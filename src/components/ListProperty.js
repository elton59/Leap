import React from 'react';
import './ListProperty.css';
import {   FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
function ListProperty() {
    return (
        <div>
          <div className='appointment'>
<div class="container">
    <h1>List Your Property</h1>
<div className='formflex'>
  <form>
       <div className='formgroup'>
      <label>*FirstName</label><br/>
      <input type="text"   placeholder="*FistName" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*LastName</label><br/>
      <input type="text"   placeholder="*LastName" name="fname"  />
      </div>
      <div className='formgroup'>
      <label>*Email</label><br/>
      <input type="email"   placeholder="*Email" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*PhoneNumber</label><br/>
      <input type="number"  placeholder="*PhoneNumber" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*Date Posted</label><br/>
      <input type="date"   placeholder="*Date" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*Image</label><br/>
      <input type="file"   placeholder="*Time" name="fname" />
       </div>
       <div className='formgroup'>
      <label>*Property Description</label><br/>
      <textarea   placeholder="*bedrooms/location" name="reason" />
       </div>
       <div className='formgroup' style={{position:'relative',top:-40}}>
      <label>*Condition</label><br/>
      <select>
      <option>select condition</option>
          <option>For Sale</option>
          <option>For Rent</option>
         
      
      </select> 
       </div>
       <input type="submit" value="List Property" className='button-primary'/>
  </form>
  </div>
  </div>
</div>
        </div>
    );
}

export default ListProperty;