import React from 'react';
/** @format */
import './herocard.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RxArrowTopRight } from "react-icons/rx";
const Herocards = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
  const data = [
    {
      area: `Finance`,
      msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
      img: `public\images\blogp.png`,
      heading: `What is Ad Exposure and Why It Matters?`,
    },
    {
      area: `Business`,
      msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
      img: `public\images\blogp.png`,
      heading: `What is Ad Exposure and Why It Matters?`,
    },
    {
      area: `Marketing`,
      msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
      img: `public\images\blogp.png`,
      heading: `What is Ad Exposure and Why It Matters?`,
    },
    {
      area: `Finance`,
      msg: `Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`,
      img: `public\images\blogp.png`,
      heading: `What is Ad Exposure and Why It Matters?`,
    },
   
  ];
  return (
    <div className='main-cards-container'>
      <div className='w-3/4 m-auto'>
        <div className='mt-20'>
        <Slider {...settings}>
          {data.map((d) => (
            <div className='blogs-card-content'>
              <div className='my-img-cards'>
                <img src={d.img} alt='' />
              </div>
              <div className='my-text-cards'>
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
};

export default Herocards;