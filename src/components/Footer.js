import React from 'react';
import styles from '../Style';
import { footerLinks } from '../constants';

function Footer() {
  return (
    <section className={` ${styles.paddingY} w-full bg-grey2 mt-6 `}>
      <div className="  flex-1 w-full flex flex-row justify-between flex-wrap my-4 mx-5 px-16">
        {footerLinks.map((link) => (
          <div className=" flex flex-col min-w-[150px] md:my-0 my-6 ">
            <h4 className=" font-nunito  text-[20px] font-bold text-grey uppercase">
              {link.title}
            </h4>
            <ul>
              {link.links.map((item) => (
                <div>
                  <li className=" font-nunito text-[20px] text-grey cursor-pointer">
                    {item.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={`flex border-t-[1px] ${styles.paddingX} items-center `}>
        <div className=" flex justify-between  w-full mt-3 text-grey3 md:flex-row flex-col md:my-3 my-5">
          <p>All rights reserved@Puccimart</p>
          <p>Terms and Condition</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
