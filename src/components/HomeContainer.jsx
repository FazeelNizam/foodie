import React from 'react'
import Bike from '../assets/img/delivery.png'
import HeroBg from '../assets/img/heroBg.png'
import I1 from '../assets/img/i1.png'

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-full"
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 lg:h-full">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
            <img
              src={Bike}
              className="w-full h-full object-contain"
              alt="Bike"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery{' '}
          <span className="text-orange-600 text-[3rem] lg:text-[4.5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptas exercitationem, illum labore quod dolores quisquam quaerat
          error assumenda deserunt obcaecati nostrum nisi eveniet explicabo amet
          perspiciatis et. Dolores, ex.
        </p>
        <button className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto rounded-md px-4 py-2">
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 felx items-center relative">
        <img
          src={HeroBg}
          alt="hero-bg"
          className="ml-auto h-420 w-full lg:w-auto md:h-650 lg:h-full"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-5 flex-wrap">
          <div className=" lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
            <img src={I1} alt="i1" className="w-20 lg:w-40 -mt-10 lg:-mt-20" />
            <p className="text:base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
              Icecream
            </p>
            <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
              Chocolate & vanilla
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">$</span>
              5.25
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
