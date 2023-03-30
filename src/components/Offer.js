import React from 'react';
import stars from '../pets assets/five stars.svg';
import dog from '../pets assets/havanes dog.svg';
import styles from '../Style';
import { services } from '../constants';

function Offer() {
  return (
    <section>
      <div
        className={`${styles.flexCenter} ${styles.paddingX}  ${styles.paddingY}flex justify-between bottom-9  black md:flex-row flex-col border-b-[1px]`}
      >
        <div className="  flex flex-col l">
          <h1 className=" font-red_hat md:text-[150px] text-[130px] font-bold text md:px-0 px-5  ">
            Pucci
          </h1>
          <h1 className=" font-red_hat  md:text-[150px] text-[130px] font-bold mart md:px-0 px-5">
            MART
          </h1>
          <img src={stars} alt="stars" />
          <p className=" text-red text-[32px] font-bold flex md:justify-start justify-center md:my-0 my-3 ">
            $169 <span className=" line-through text-text_black">$220</span>{' '}
          </p>
          <div className=" flex md:justify-start justify-center">
            <button className=" bg-primary_green text-text_white px-10 py-3 rounded-lg mt-3 uppercase">
              Shop now
            </button>
          </div>
        </div>
        <div className="items-center flex justify-center  ml-10  ">
          <h3 className="  mt-4 border text-center  to-text_white rounded-full bg-red text-text_white w-[144px] h-[144px] pt-[36px]  px-3 py-3 leading-[34px] font-lato text-[32px] font-normal ">
            Hot Offer
          </h3>
        </div>
        <div className=" ">
          <img src={dog} alt="dog" />
          <div className=" w-full">
            <h3 className=" font-lato text-[32px] font-normal w-full">
              Discount up to 50% <br className=" md:hidden block" /> Only this
              month.
            </h3>
          </div>
        </div>
      </div>
      <div
        className={` ${styles.flexCenter} ${styles.paddingX} w-full ml-10  my-6 md:flex-row flex-col `}
      >
        {services.map((item) => (
          <div className=" flex flex-1  md:justify-center justify-start md:my-0 my-6 w-full  ">
            <img src={item.name} alt="services" className="" />
            <p className=" font-nunito font-normal text-grey ml-3 text-[20px]">
              {item.service}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offer;
