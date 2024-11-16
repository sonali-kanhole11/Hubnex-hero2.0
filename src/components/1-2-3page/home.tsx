
import './home.css'
import SparklesText from '../ui/sparkles-text';
import NumberTicker from '../ui/number-ticker';
import Index from '../herotojoin';
const Partner = () => {
  return (
    <>
      <section className='partner-hero'>
        <div className='nagivation'>
          <a href='#'>Home</a>
        </div>

        <div className='partner-content'>
          <div className='text-content'>
            <SparklesText
              text={
                <h1>
                  SaaS growth with
                  <br /> weekly tips.
                </h1>
              }
            />

            <p>
              Clarity gives you the blocks & components you need to create a
              truly professional website, landing page, or admin panel for your
              SaaS. Clarity gives you the blocks & components you need. Clarity
              gives you the blocks.
            </p>

            <div className='button-group'>
              <button className='contact-button'>Contact Us →</button>
              <button className='join-button'>Join Us →</button>
            </div>

            <div className='stats'>
              <div className='stat-item'>
                <div className='avatars'>
                  <img src='public\images\circle.png' alt='User 1' />
                </div>
                <div className='stat-text'>
                  <span className='stat-number'>
                    <NumberTicker value={5910} />+
                  </span>
                  <span>Companies are using & it’s growing everyday</span>
                </div>
              </div>
              <div className='stat-item'>
                <div className='rating My-rating'>
                  <span className='stat-number'>4.5/5</span>
                  <span>Trusted by the top companies worldwide</span>
                </div>

                <span className='stars'>★★★★★</span>
              </div>
            </div>
          </div>

          <div className='image-content'>
            <img src='public\images\home.png ' alt='' />
          </div>
        </div>
      </section>
      <section className='partner-technologies'>
        <div className='partner-technologies-container'>
          <h2 className='technologies-title'>
            <span>Join 4,000+ companies already growing</span>
          </h2>
          <div>
         <img src="public\images\chorus.png" alt="" />
          </div>
          <div>
         <img src="public\images\tcs.png" alt="" />
          </div>
          <div>
         <img src="public\images\reddit.png" alt="" />
          </div>
          <div>
         <img src="public\images\pantera.png" alt="" />
          </div>
        </div>
      </section>



      <section >
        
        <div className='cards-container'>      
        <Index/>
        </div> 

      </section>



      
      <section className='globe'>
        <div className='text-content'>
          <h1>Unleash the full power of data</h1>
          <p>
            We guide global businesses through the challenges of developing purposeful
            technology that addresses their needs and advances their growth.
            We have established offices in India, the UAE, and the USA.
          </p>
          <div className='stats'>
            <div>
              <span className='number'>
                <NumberTicker value={60} className='number-ticker' />+
              </span>
              <span>Integrations</span>
            </div>
            <div>
              <span className='number'>
                <NumberTicker value={600} className='number-ticker' />%
              </span>
              <span>Return on Investment</span>
            </div>
            <div>
              <span className='number'>4K+</span>
              <span>Global Customers</span>
            </div>
          </div>
          <div className='featured'>
            <span>Featured in</span>
            <div className='logos'>
              <img src='public\images\dailyhunt.png' alt='DailyHunt' />
            </div>
            <div className='logos'>
              <img src='public\images\toi.png' alt='toi' />
            </div>
            <div className='logos'>
              <img src='public\images\ht.png' alt='ht' />
            </div>
          </div>
        </div>
        <div className='globe-image'>
          {/* Place for globe image */}
          <img src='public\tearth.png' alt='Globe' />
        </div>
      </section>

    </>

  );
};
export default Partner;