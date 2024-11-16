import './herotojoin.css'
import { Ri24HoursLine } from "react-icons/ri";

const Index = ()=> {
      return (
         
           <div className='sectionsecond'>
           <h1> Benefits to join Hubnex Labs</h1>

          <div className="cards flex justify-center gap-3 mt-16">

             {/* CARDS BLOCK 1 BEGINS HERE...... */}
         <div className="card w-80  bg-black text-white ">
  <img src="https://www.hubnex.in/companyicon/ontimedelivery.svg" className="card-img-second" />
  <div className="card-body">
  <Ri24HoursLine className='text-4xl'/>
  <h5 className="card-title-second">On time delivery</h5>
    <p className="card-text">We deliver the quality you need on time.</p>
  </div>
   </div>   {/* CARD BLOCK 1 ENDS HERE..... */}

   {/* CARD BLOCK 2 STARTS HERE......... */}
   <div className="cardblock2">

        <div className="cards   bg-black text-white">
          <div className="card-body">
          <Ri24HoursLine className='text-4xl'/>
    <h5 className="card-title-second">Dedicated Project Manager</h5>
    <p className="card-text"> Lorem lorem lorem lorem lorem lorem</p>
        </div>
               </div>   {/* BLOCK 2 FIRST CARD END */}
               
       <div className="card w-80  bg-black text-white card3">
  <img src="https://www.hubnex.in/companyicon/support.svg" className="card-img-top" height="190px"/>
  <div className="card-body">
  <Ri24HoursLine className='text-4xl'/>
  <h5 className="card-title-second"> 24 x 7 round the clock support </h5>
    <p className="card-text"> Lorem lorem Lorem lorem Lorem lorem.</p>
  </div>
   </div>  {/* BLOCK 2 SECOND CARD ENDS  */}

        </div> {/* CARD BLOCK 2 ENDS HERE.... */}

     {/* CARD BLOCK 3 STARTS HERE....... */}
     <div className="cardblock3">
        
       <div className="card w-80  bg-black text-white card3">
  <img src="https://www.hubnex.in/companyicon/satisfaction.svg" className="card-img-top" height="190px"/>
  <div className="card-body ">
  <Ri24HoursLine className='text-4xl'/>
  <h5 className="card-title-second"> 100% Customer satisfaction </h5>
    <p className="card-text"> Our top priority is ensuring every customer leaves with a smile.</p>
  </div>
   </div>    {/* BLOCK 3 FIRST CARD ENDS */}

        <div className="card  w-80 bg-black text-white">
  <div className="card-body p-3">
  <Ri24HoursLine className='text-4xl mb-3'/>
    <h5 className="card-title-second">Escrow account keeping your <br /> money safe</h5>
    <p className="card-text"> Lorem ipsum dolor sit amet consectetur.</p>
  </div>
  {/* BLOCK 3 SECOND CARD ENDS */}
     </div> 
     {/* CARD 3 BLOCK ENDS HERE.......... */}

      
        
    
       




          </div>  {/* CARDS DIV Ends HERE..... */}
           </div> {/* Main section Ends Here.......  */}
           </div>
         
      )

}

export default Index;