import React from 'react';
import styles from '../Style';
import foot from '../pets assets/foot print.svg';
import group from '../pets assets/stars.svg';
import frame from '../pets assets/Frame.svg';
function Discount() {
  return (
    <div
      className={` bg-primary_green mt-10 flex ${styles.paddingX} justify-between w-full  md:flex-row flex-col ${styles.paddingY} `}
    >
      <div className="md:-mt-[50px] mt-3 flex md:justify-start justify-center ">
        <img src={foot} alt="foot" />
      </div>
      <div className=" flex justify-center items-center ">
        <div className=" flex flex-col justify-center w-full">
          <h1 className=" font-lato font-normal text-[32px] text-text_white w-full flex justify-center">
            Discount up to 50% <br className=" md:hidden block" /> Only this
            month.
          </h1>
          <div className=" w-full flex justify-center items-center mt-5">
            <button className=" bg-text_white text-primary_green rounded-lg  px-7 py-3">
              Shop now
            </button>
          </div>
        </div>
      </div>
      <div className="group md:-mt-[30px] mt-3 flex md:justify-end justify-center ">
        <img src={group} alt="group" className="" />
        <img src={frame} alt="frame" className=" mt-2" />
      </div>
    </div>
  );
}

export default Discount;
