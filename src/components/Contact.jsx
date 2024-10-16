import React from 'react';
import MyMapComponent from "./Map";

const Contact = () => {
  return (
    <div className='w-full py-16 text-n-2'>
      <div className='max-w-[70%] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4 font-code text-sm uppercase' >
          <h1 className='md:text-2xl  font-bold py-2'>
          133 33rd St N unit 4, Wasaga Beach, ON
          </h1>
          <p>+1(705)422-1111</p>
          <h2 className='font-bold py-2'>
            Opening Hours
          </h2>
          <ul className='space-y-2 md:pr-[50%]'>
            <li className='flex justify-between'><span>Monday</span><span>9:30a.m - 7p.m</span></li>
            <li className='flex justify-between'><span>Tuesday</span><span>9:30a.m - 7p.m</span></li>
            <li className='flex justify-between'><span>Wednesday</span><span>9:30a.m - 7p.m</span></li>
            <li className='flex justify-between'><span>Thursday</span><span>9:30a.m - 7p.m</span></li>
            <li className='flex justify-between'><span>Friday</span><span>9:30a.m - 7p.m</span></li>
            <li className='flex justify-between'><span>Saturday</span><span>9:30a.m - 7p.m</span></li>
            <li className='flex justify-between'><span>Sunday</span><span>Close</span></li>
          </ul>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            
          <MyMapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
