import React from 'react';
import googleImg from "../../assets/gplay.png"
import appsImg from "../../assets/app.png"
import heroImg from "../../assets/hero.png"

const Banner = () => {
    return (
        <div >
         <div className='space-y-8'>
             <h1 className='font-normal text-7xl text-center'>We Build <br /><span className='text-[#9f62f2]'>Productive </span> Apps</h1>
            <p className='text-center'> At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center'>
                <button className='btn m-2'><img src={googleImg} alt="" className='w-[22px]' /> Google Play</button>
                <button className='btn m-2'> <img src={appsImg} alt=""  className='w-[22px]'/>App Store</button>
            </div>
         </div>


          <div className='flex justify-center mt-8 '>
              <img src={heroImg} alt="" className='w-[693px] ' />
          </div>

          <div className=' bg-linear-to-r from-[#632ee3] h-[430px] to-[#9f62f2] w-full md:h-[380px] md:pt-[44px]'>
            <div className=''>
                <h1 className='text-white font-bold text-5xl text-center'>Trusted by Millions, Built for You</h1>
                <div className='grid md:grid-cols-3 grid-cols-1 text-white md:pt-7 pl-3'>
                    <div className='text-center md:space-y-6 md:pt-5'>
                        <h2 className='text-base font-normal' >Total Downloads</h2>
                        <span className='font-extrabold text-6xl'>29.6M</span>
                        <p className='text-base font-normal md:pt-5'>21% more than last month</p>
                    </div>
                    <div className='text-center md:space-y-6 md:pt-5'>
                        <h2 className='text-base font-normal' >Total Reviews</h2>
                        <span className='font-extrabold text-6xl'>906K</span>
                        <p className='text-base font-normal md:pt-5'>46% more than last month</p>
                    </div>
                    <div className='text-center md:space-y-6 md:pt-5'>
                        <h2 className='text-base font-normal' >Active Apps</h2>
                        <span className='font-extrabold text-6xl'>132+</span>
                        <p className='text-base font-normal  md:pt-5'>31% more than last month</p>
                    </div>
                </div>

            </div>

          </div>
            
        </div>
    );
};

export default Banner;