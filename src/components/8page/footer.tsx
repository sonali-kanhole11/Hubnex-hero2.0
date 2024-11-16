/** @format */

import React from "react";
import './footer.css'
import { FaArrowRightLong } from "react-icons/fa6";
const PartnerContact = () => {
  return (
    <div className='main-contact'>
      <div className='Contact-upper'>
        <h1>See all that you can accomplish with Hubnex Labs</h1>
        <button className='connect'>Connect sales</button>
      </div>
      <div className='Contact-lower'>
        <h1>Let’s grow 💪 <br />
        together with the faster ecosystem</h1>
        <button className="contactt">Contact Us<FaArrowRightLong /></button>
      </div>
      <div className='horizontal-linee'></div>
    </div>
     
  );
};

export default PartnerContact;