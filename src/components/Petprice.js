import React from 'react';
import { cards } from '../constants';
import Carousel from 'react-elastic-carousel';
import styles from '../Style';

const breakPoints = [
  {
    width: 1,
    itemsToShow: 1,
  },

  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Petprice() {
  return (
    <div id="menu" className={`mt-10 ${styles.paddingY}`}>
      <div className=" w-full text-center">
        <h1 className=" font-poppins font-bold text-[32px]">All Pet</h1>
        <p className=" font-lato text-[16px] font-normal">
          Shop the latest high-end designer products for your pups at our luxury
          dog boutique!
        </p>
      </div>
      <div className=" mt-5">
        <Carousel breakPoints={breakPoints}>
          {cards.map((card) => (
            <div>
              <img src={card.img} alt="cards" />
              <p className=" font-lato text-[20px] font-semibold">
                {card.name}
              </p>
              <p className=" text-[16px]">{card.description}</p>
              <span>{card.price}</span>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Petprice;
