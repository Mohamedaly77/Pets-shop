import React from 'react';

import style from '../Style';
import facebook from '../pets assets/facebook.svg';
import twitter from '../pets assets/twitter.svg';
import instagram from '../pets assets/instagram.svg';
import youtube from '../pets assets/youtube.svg';
import group from '../pets assets/Group 20 2.svg';
import group2 from '../pets assets/Group 19.svg';
import hav from '../pets assets/havanes dog.svg';

function Home() {
  return (
    <section
      id="Home"
      className={`${style.paddingX} ${style.paddingY} mt-7 mb-10`}
    >
      {/* <div className=" flex justify-between items-center  z-0">
        <img src={footprint} alt="footprint" />
        <img src={background} alt="background" />
        <img src={footprint} alt="footprint" />
      </div> */}

      <div className="w-full flex justify-between md:flex-row flex-col ">
        <div className=" w-full">
          <h1 className=" font-red_hat text-[48px] font-normal text-primary_black w-full">
            Love your plants <br className=" md:hidden flex" /> Take care of
            yourself
          </h1>
          <p className=" text-[24px] my-5">
            5% of every purchase helps rescues
          </p>
          <button className=" text-white py-3 px-6 bg-primary_green text-text_white rounded-lg mt-4">
            SHOP NOW
          </button>
          <div className=" flex  md:my-4 my-10">
            <img className=" mr-3" src={facebook} alt="facebook" />
            <img className=" mr-3" src={twitter} alt="twitter" />
            <img className=" mr-3" src={instagram} alt="instagram" />
            <img className=" mr-3" src={youtube} alt="youtube" />
          </div>
        </div>

        <div className="">
          <img src={group} alt="group" className=" " />
          <img
            src={group2}
            alt="group2"
            className=" absolute right-8  w-[110px] h-[120px]"
          />
        </div>
        <div className=" w-full flex ">
          <img src={hav} alt="hav" className=" w-[437px] h-[530px]" />
        </div>
        <div className=" card flex flex-col px-5 py-2 rounded-lg justify-center items-center">
          <h2 className=" font-bold text-[24px] font-poppins">18 K+</h2>
          <span className=" text-[15px]">Happy Customers</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
