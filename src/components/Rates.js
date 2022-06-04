import React from 'react';
import './Rates.css'
import {FaSearch } from 'react-icons/fa';
function Rates(props) {
    return (
        <div className="rates-section">
        <div className="rates-search-div-container">
      
                <div className="form-group">
                <label><h1>Motgage Type</h1></label>
                <select placeholder='mo'>
                    <option value="motgage_t">--All--</option>
                    <option value="motgage_t">Motgage</option>
                    <option value="motgage_t">Motgage Refinancing</option>
                </select> 
                </div>
                <div className="form-group">
                <button className="button-primary" style={{height:'40px',position:'relative',top:'98px'}}><FaSearch/></button>
                </div>
        </div>
        <div className="table-section">
        <h1>Latest Rates</h1>

<table className="customers">
  <tr>
    <th>Lender</th>
    <th>Rate</th>
    <th>Upfront Costs</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>
    <td>Sweden</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Königlich Essen</td>
    <td>Philip Cramer</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>North/South</td>
    <td>Simon Crowther</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Paris spécialités</td>
    <td>Marie Bertrand</td>
    <td>France</td>
  </tr>
</table>
</div>
    </div>
    );
}

export default Rates;