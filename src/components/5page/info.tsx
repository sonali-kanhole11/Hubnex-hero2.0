import React from 'react';
import './info.css'
import NumberTicker from '../ui/number-ticker';

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <h2>We are big enough to deliver and small enough to care</h2>
        <p>Teams large and small rely on Hubnex Labs</p>
        <br />
        <button className="connect-button ">Connect Sales →</button>
        <br />
      </div>
      <div className='start-num'>
          <div className='num-first'>
          <span >
            <NumberTicker value={40} />+
          </span>
          <p>Integrations</p>
          </div>
          <div className='num-second'>
          <span>
            <NumberTicker value={40} />+
          </span>
          <p>Integrations</p>
          </div>
          <div className=' num-third'>
          <span >
            <NumberTicker value={40} />+
          </span>
          <p>Integrations</p>
        </div>
        <div className=' num-fourth'>
          <span >
            <NumberTicker value={40} />+
          </span>
          <p>Integrations</p>
        </div>
    </div>
    </div>
  );
};

export default Card;