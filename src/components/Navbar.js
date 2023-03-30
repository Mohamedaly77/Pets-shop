import React, { useState } from 'react';
import cart from '../pets assets/cart.svg';
import login from '../pets assets/login.svg';
import menu from '../pets assets/Hamburger menu.svg';
import logo from '../pets assets/logo.svg';
import close from '../pets assets/close.svg';

import { navLinks } from '../constants';
import search from '../pets assets/seach.svg';
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`flex justify-between w-full px-2 py-8 relative border-b-[1px] border-b-primary_green `}
    >
      <div className=" flex  justify-start items-center ">
        <img
          src={logo}
          alt="logo "
          className=" w-[45px] h-[47px] object-contain "
        />
        <h4 className=" text-[16px] ml-4 font-normal font-cabin">PucciMart</h4>
      </div>

      <ul className=" flex-1 justify-center items-center lg:flex hidden ">
        {navLinks.map((nav) => (
          <li className=" mr-4 font-lato font-normal text-[16px] text_black cursor-pointer hover:text-primary_green leading-[19.2px]">
            <a href={nav.id}>{nav.title}</a>
          </li>
        ))}
        <form className=" w-[261px] h-[30px]">
          <div className=" flex justify-center items-center ">
            <input
              type="text"
              placeholder="Search for products ..."
              className=" border black rounded-xl px-3  font-lato font-normal  w-[261px] h-[30px] text-[10px]"
            />

            <button type="Submit" className=" -ml-7 ">
              <img src={search} alt="search" className=" w-[20px] h-[20px]" />
            </button>
          </div>
        </form>
      </ul>

      <div className=" md:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${
          toggle ? 'flex' : 'hidden'
        }  absolute  right-0 overflow-auto w-full top-20 mx-4 my-2  text-text_white rounded-xl bg-primary_green   `}
      >
        <ul className=" flex-1 flex  md:hidden md:text-xl  text-[20px]  flex-col  ease duration-1000 md:justify-centre justify-start  items-center my-4 ">
          {navLinks.map((nav) => (
            <li className=" mr-4 font-lato font-normal mb-6 text-start text_black cursor-pointer hover:text-primary_green leading-[19.2px]">
              <a href={nav.id}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className=" px-3 cursor-pointer  items-center md:flex hidden">
        <img className=" object-contain ml-4" src={cart} alt="cart" />
        <img className=" object-contain ml-4" src={menu} alt="menu" />

        <img className="  object-contain ml-4" src={login} alt="login" />
      </div>
    </nav>
  );
}

export default Navbar;
