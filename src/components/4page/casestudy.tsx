
import './casestudy.css'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Herocards from './herocard';

const Casestudy = () => {
 
  return (
    
    <div className='text-lg font-light w-[75%] mx-auto text-center'>
      <h1 className='study-heading'>Case Study</h1>
      <h2>We guide global businesses through the challenges of developing purposeful
        technology that addresses their needs and advances their growth.
        <br />
        We have established offices in India, the UAE, and the USA.</h2>
        <br />
       <button className='button-view'> View All →</button>
       <br />
       <div><Herocards/></div>
    </div >
    
  )

};


export default Casestudy;