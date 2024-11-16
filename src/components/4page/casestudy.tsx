
import './casestudy.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RxArrowTopRight } from 'react-icons/rx';
import { FaArrowRightLong } from 'react-icons/fa6';
import Slider from "react-slick";
// import Herocards from './herocard';

const Casestudy = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
const data = [
{
  area: `Finance`,
  msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
  img: `/public/blogs1.png`,
  heading: `What is Ad Exposure and Why It Matters?`,
},
{
  area: `Business`,
  msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
  img: `/public/blogs2.png`,
  heading: `What is Ad Exposure and Why It Matters?`,
},
{
  area: `Marketing`,
  msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
  img: `/public/blogs1.png`,
  heading: `What is Ad Exposure and Why It Matters?`,
},
{
  area: `Finance`,
  msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
  img: `/public/blogs2.png`,
  heading: `What is Ad Exposure and Why It Matters?`,
},
{
  area: `Business`,
  msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
  img: `/public/blogs1.png`,
  heading: `What is Ad Exposure and Why It Matters?`,
},
{
  area: `Marketing`,
  msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
  img: `/public/blogs1.png`,
  heading: `What is Ad Exposure and Why It Matters?`,
},
];
return (
<div className='main-blogs-container'>
  <div className='blogs-title'>
    <h2>Case Study</h2>
    <p>We guide global businesses through the challenges of developing purposeful technology that addresses their needs and advances their growth. We have established offices in India, the UAE, and the USA.</p>
    <button className="view">
    View All
    <FaArrowRightLong />
    </button>
  </div>
  <div className='w-3/4 m-auto main-bg-card'>
    <div className='mt-20'>
    <Slider {...settings}>
      {data.map((d) => (
        <div className='blogs-card-content'>
          <div className='my-img-blogs'>
            <img src={d.img} alt='' />
          </div>
          <div className='my-text-blogs'>
            <h3>{d.area}</h3>
            <h1>{d.heading}</h1>
            <p>{d.msg}</p>
            <button className='read'>
              Read more
              <RxArrowTopRight />
            </button>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  </div>
</div>
);
 
  // return (
    
  //   <div className='text-lg font-light w-[75%] mx-auto text-center'>
  //     <h1 className='study-heading'>Case Study</h1>
  //     <h2>We guide global businesses through the challenges of developing purposeful
  //       technology that addresses their needs and advances their growth.
  //       <br />
  //       We have established offices in India, the UAE, and the USA.</h2>
  //       <br />
  //      <button className='button-view'> View All →</button>
  //      <br />
  //      <div><Herocards/></div>
  //   </div >
    
  // )

};


export default Casestudy;