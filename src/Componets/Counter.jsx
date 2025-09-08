import React from 'react';
import CountUp from 'react-countup';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Img1 from '../assets/freelancer.png'
import Img2 from '../assets/earn.png'
import Img3 from '../assets/trained.png'
import Img4 from '../assets/time.png'


const Counter = () => {

const { text } = useTypewriter({
  words: [ ' Proud Of Passionate .', ' Proud Of Enthusiastic .', ' Proud Of Spirited .', ' Proud Of Excitable .'],
  loop: true,
  typeSpeed: 100,
  deleteSpeed: 70,
  delaySpeed: 1500,
});

    return (
<div className=' w-11/12 mx-auto my-10'>
      
<div className=' content-center items-center text-center'>
  <h1 className='font-bold text-3xl  text-[#AD56C4]'>
   Our Acheviment
  </h1>
  <h1 className='font-normal text-lg text-[#f000b8]'>
    Work with Clients Who Value Your Talent. Build a Future You’re Proud Of  
    <span style={{fontWeight: 'bold', color: 'green'}}>
{text}
    </span>
     <Cursor />
{/* Where Passion Meets Possibility. */}
    </h1>
      </div>
      
 <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 '>
<div className="card  
bg-[#FAFFCA] card-md 
shadow-sm mb-5">
<div className="card-body flex flex-col items-center text-center">
  <img src={Img1} className='w-[50px]'/>
          <h2 className="card-title text-5xl text-[#0F0F0F] font-bold">  <CountUp end={199} 
           duration={2.75}
           delay={1}/>+</h2>
          <p className='text-xl font-medium text-[#FF8DA1]'>Unlimited Job List</p>
         
        </div>
      </div>
      
      <div className="card  
      bg-[#FAFFCA]
      card-md shadow-sm
     mb-5">
        <div className="card-body flex flex-col items-center text-center">
         
          <img src={Img2} className='w-[50px]'/>
          <h2 className="card-title text-5xl text-[#0F0F0F] font-bold"><CountUp end={467} 
           duration={2.75}
           delay={1}/>+</h2>
          <p className='text-xl font-medium text-[#FF8DA1]'>Earning</p>
         
        </div>
      </div>
      
      <div className="card 
      bg-[#FAFFCA] 
      card-md shadow-sm
     mb-5">
        <div className="card-body flex flex-col items-center text-center">
       
          <img src={Img3} className='w-[50px]'/>
          <h2 className="card-title text-5xl text-[#0F0F0F]font-bold"> <CountUp end={1900}  duration={2.75}
           delay={1} />+</h2>
          <p className='text-xl font-medium text-[#FF8DA1]'>Succeful Hires</p>
        
        </div>
      </div>
      
      <div className="card 
      bg-[#FAFFCA]
      card-md shadow-sm
      mb-5">
        <div className="card-body flex flex-col items-center text-center">
          <img src={Img4} className='w-[50px]'/>
          <h2 className="card-title text-5xl text-[#0F0F0F]font-bold"> <CountUp end={300}
           duration={2.75}
           delay={1}   />+</h2>
          <p className='text-xl font-medium text-[#FF8DA1]'>Save Time</p>
        </div>
      </div>
      </div>
      </div>
    );
};

export default Counter;