import './earth.css'
import FeaturedInSection from './features';

import NumberTicker from '../ui/number-ticker';

const Earth = () => {

  return (
    <div>
      <section className="earth">
        <h1 className='earth-heading'>Unleash the full power of data</h1>
        <p className='earth-cont'>We guide global businesses through the challenges of developing purposeful
          technology that addresses their needs and advances their growth.
          We have established offices in India, the UAE, and the USA.</p>
        <div className='start-number'>
          <div className='num-plus'>

          <span >
            <NumberTicker value={60} />+
          </span>
          <p>Integrations</p>
          </div>
          <div className='num-percent'>
          <span>
            <NumberTicker value={600} />%
          </span>
          <p>Return on investment</p>
          </div>
          <div className='num-thousand'>
          <span >
            <NumberTicker value={4} />K+
          </span>
          <p>Global customers</p>
        </div>
        </div>

        <FeaturedInSection />
      </section>


    </div>
  )


}


export default Earth;