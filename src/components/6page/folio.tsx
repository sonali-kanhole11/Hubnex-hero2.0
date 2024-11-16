import React from 'react';
import './folio.css'
import { useRef } from 'react';
import PartnerNewsletter from './worktogether';

const PartnerSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX: number, scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only proceed if left mouse button is pressed
    isDragging = true;
    startX = e.pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeft = sliderRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
    <div className='slider-main-heading'>
        <p>3940+ Happy Hubnex Labs Users</p>
        <h1>Driving results for leaders across the globe</h1>
      </div>
    <div
      className='slider-container'
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      
      <div className='slider-item'>
        <div className='left'>
          <img src='public\images\slack.png' alt='' />
        </div>
        <div className='right'>
          <h1>Driving results for leaders across the globe</h1>
          <p>
            “With Landingfolio, the design team can now build design which
            identifies employees’ career aspirations and goals and from which we
            approach managers and check to see what is happening.”
          </p>
          <h1>Slack</h1>
          <p>Product Company</p>
        </div>
      </div>
      <div className='slider-item'>
        <div className='left'>
          <img src='public\images\facebook.png' alt='' />
        </div>
        <div className='right'>
          <h1>Driving results for leaders across the globe</h1>
          <p>
            “With Landingfolio, the design team can now build design which
            identifies employees’ career aspirations and goals and from which we
            approach managers and check to see what is happening.”
          </p>
          <h1>Facebook</h1>
          <p>Product Company</p>
        </div>
      </div>
      <div className='slider-item'>
        <div className='left'>
          <img src='public\images\google.png' alt='' />
        </div>
        <div className='right'>
          <h1>Driving results for leaders across the globe</h1>
          <p>
            “With Landingfolio, the design team can now build design which
            identifies employees’ career aspirations and goals and from which we
            approach managers and check to see what is happening.”
          </p>
          <h1>Google</h1>
          <p>Product Company</p>
        </div>
        
      </div>
    </div>
    <PartnerNewsletter/>
    </>
  );
};

export default PartnerSlider;