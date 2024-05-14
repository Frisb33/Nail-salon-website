import React from 'react'
import pic from "/service.png"

const Service = () => {
  return (
    <div id="service" className="relative justify-center items-center " >
      <h2 className="text-center max-w-3xl mx-auto px-4 mt-10 text-2xl font-bold mb-4 font-code">Our Service</h2>
      <div className="relative  mx-auto md:max-w-6xl">
        <div className="relative z-1 p-0.5 rounded-2xl bg-n-3">
            <div className=" rounded-t-[0.9rem] rounded-b-[0.9rem] overflow-hidden ">
              <img
                src={pic}
                alt="Banner Image"
              />
            </div>
        </div> 
      </div>
    </div>
  )
}

export default Service
