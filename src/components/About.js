import React from 'react';
import dog from '../pets assets/yellow dog.svg';
import cat from '../pets assets/cat with background blue.svg';
import styles from '../Style';
import vector from '../pets assets/Vector (7).svg';
import { social } from '../constants';

function About() {
  return (
    <section
      id="contactus"
      className={` flex justify-between  ${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} mt-10 mb-10 md:flex-row flex-col md:my-10 my-0   `}
    >
      <div className=" flex w-full ">
        <img src={dog} alt="dog" className=" w-full" />
      </div>

      <div className=" flex justify-center  w-full md:my-0  flex-col ml-3 ">
        <h4 className=" text font-red_hat text-[80px] font-extrabold leading-[106px] uppercase">
          pucci
        </h4>

        <h4 className=" mart font-red_hat text-[80px] font-extrabold leading-[106px] uppercase">
          Mart
        </h4>
      </div>
      <div className=" w-full flex-col justify-start relative">
        <h3 className=" font-lato text-[32px] font-normal">
          Subscribe for updates
        </h3>

        <form className="  ">
          <div className=" flex justify-start w-full ">
            <input
              type="email"
              placeholder="Enter your email address"
              className=" border black px-3 py-3 w-[261px] text-[10px] mt-4 uppercase"
            />

            <button className=" bg-primary_green px-3 py-3 mt-[15px]  ml-3 justify-start ">
              <img src={vector} alt="vector" />
            </button>
          </div>
        </form>

        <div className=" w-full">
          <p className=" font-lato text-[32px] font-normal mt-9">
            contact us: info@pucciMart.com
          </p>
        </div>

        <div className=" flex w-full md:justify-end justify-start items-end mt-7 cursor-pointer absolute">
          {social.map((item) => (
            <img src={item.name} alt="social" className=" mr-4" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
