import './herotojoin.css'
import { Ri24HoursLine } from "react-icons/ri";

const Index = ()=> {
  return (
    <>
      <div className='section'>
        <h1> Benefits to join Hubnex Labs</h1>
        <div className='cards flex justify-center gap-3 mt-16'>
          {/* CARDS BLOCK 1 BEGINS HERE...... */}
          <div className='card w-80  bg-black text-white main-full-card1'>
            <img
              src='https://www.hubnex.in/companyicon/ontimedelivery.svg'
              className='card-img'
            />
            <div className='card-body'>
              <Ri24HoursLine className='text-4xl' />
              <h5 className='card-title'>On time delivery</h5>
              <p className='card-text'>
                We deliver the quality you need on time.
              </p>
            </div>
          </div>{" "}
          {/* CARD BLOCK 1 ENDS HERE..... */}
          {/* CARD BLOCK 2 STARTS HERE......... */}
          <div className='cardblock2'>
            <div className='card   bg-black text-white main-full-card'>
              <div className='card-body'>
                <Ri24HoursLine className='text-4xl' />
                <h5 className='card-title'>Dedicated Project Manager</h5>
                <p className='card-text'>
                  {" "}
                  Lorem lorem lorem lorem lorem lorem
                </p>
              </div>
            </div>{" "}
            {/* BLOCK 2 FIRST CARD END */}
            <div className='card w-80  bg-black text-white card3 main-full-card'>
              <img
                src='https://www.hubnex.in/companyicon/support.svg'
                className='card-img-top'
                height='190px'
              />
              <div className='card-body'>
                <Ri24HoursLine className='text-4xl' />
                <h5 className='card-title'> 24 x 7 round the clock support </h5>
                <p className='card-text'>
                  {" "}
                  Lorem lorem Lorem lorem Lorem lorem.
                </p>
              </div>
            </div>{" "}
            {/* BLOCK 2 SECOND CARD ENDS  */}
          </div>{" "}
          {/* CARD BLOCK 2 ENDS HERE.... */}
          {/* CARD BLOCK 3 STARTS HERE....... */}
          <div className='cardblock3'>
            <div className='card w-80  bg-black text-white card3 main-full-card'>
              <img
                src='https://www.hubnex.in/companyicon/satisfaction.svg'
                className='card-img-top'
                height='190px'
              />
              <div className='card-body '>
                <Ri24HoursLine className='text-4xl' />
                <h5 className='card-title'> 100% Customer satisfaction </h5>
                <p className='card-text'>
                  {" "}
                  Our top priority is ensuring every customer leaves with a
                  smile.
                </p>
              </div>
            </div>{" "}
            {/* BLOCK 3 FIRST CARD ENDS */}
            <div className='card  w-80 bg-black text-white main-full-card5'>
              <div className='card-body p-3'>
                <Ri24HoursLine className='text-4xl mb-3' />
                <h5 className='card-title'>
                  Escrow account keeping your <br /> money safe
                </h5>
                <p className='card-text'>
                </p>
              </div>
            </div>
            {/* BLOCK 3 SECOND CARD ENDS */}
          </div>
          {/* CARD 3 BLOCK ENDS HERE.......... */}
        </div>{" "}
        {/* CARDS DIV Ends HERE..... */}
      </div>{" "}
      {/* Main section Ends Here.......  */}
    </>
  );
    
       





}

export default Index;